"use client";
import AssessmentPage, { AssessmentFormData } from "./clientAssessment";



export default function Page() {
  async function handleAssessmentSubmit(data: AssessmentFormData) {
    // Connect this URL to your actual backend endpoint.
    const response = await fetch("/api/assessment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Assessment submission failed.");
    }
  }

  return (
    <AssessmentPage
      heroImageSrc="/get-your-assessment-hero.png"
      logoSrc="/assessment/logo.png"
      testimonialAvatarSrc="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      onSubmit={handleAssessmentSubmit}
      contactHref="/company/contact"
      faqs={[
        {
          question: "What does the AI assessment include?",
          answer:
            "We review your business processes, identify AI opportunities, and recommend a roadmap for implementation.",
        },
        {
          question: "Is there any obligation to proceed?",
          answer:
            "No. You can review the recommendations before deciding your next steps.",
        },
      ]}
    />
  );
}