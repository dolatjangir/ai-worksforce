// utils/cloudinary.ts

export const uploadToCloudinary = async (file: File): Promise<string | null> => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    
    // Using NEXT_PUBLIC_ exposes these safely to the browser
    const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

    if (!uploadPreset || !cloudName) {
      console.error("Cloudinary environment variables are missing.");
      return null;
    }

    // Notice we only append the preset, no API key required!
    formData.append("upload_preset", uploadPreset);

    const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to upload image to Cloudinary");
    }

    const data = await response.json();
    return data.secure_url; 
  } catch (error) {
    console.error("Cloudinary Upload Error:", error);
    return null;
  }
};