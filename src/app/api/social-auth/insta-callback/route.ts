
// import { NextResponse } from "next/server";
// import { prisma } from "../../../../../lib/prisma";

// // GET: Get Direct Instagram Live Posts
// export async function GET(req: Request) {
//     try {
//         const adminId = (req as any).admin?.id;

//         if (!adminId) {
//             return NextResponse.json(
//                 { error: "Unauthorized" },
//                 { status: 401 }
//             );
//         }

//         const cacheKey = `ig_live_posts_${adminId}`;

//         // CHECK CACHE (5 min)
//         /* const cached = postCache.get(cacheKey);
//         if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
//             return NextResponse.json({
//                 success: true,
//                 posts: cached.data,
//                 cached: true
//             });
//         } */

//         // 1. Get connected Instagram account from DB
//         const account = await prisma.socialAccount.findFirst({
//             where: {
//                 userId: adminId,
//                 platform: "INSTAGRAM",
//             },
//         });

//         if (!account || !account.accessToken) {
//             return new Response("Instagram not connected", {
//                 status: 400,
//             });
//         }

//         const { accessToken } = account;

//         // 2. Fetch posts from Instagram using the /me/media edge
//         const response = await fetch(
//             `https://graph.instagram.com/v26.0/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${accessToken}`
//         );

//         const data = await response.json();

//         console.log("Instagram data is ", data);

//         if (!data.data) {
//             return new Response("No posts found or token expired", {
//                 status: 400,
//             });
//         }

//         // 3. Normalize posts to match your frontend expectations
//         const normalizedPosts = data.data.map((post: any) => ({
//             id: post.id,
//             caption: post.caption || "",
//             media_type: post.media_type,
//             media_url: post.media_url || null,
//             thumbnail_url: post.thumbnail_url || post.media_url || null,
//             timestamp: post.timestamp,
//             permalink: post.permalink,
//         }));

//         // SAVE CACHE
//         /* postCache.set(cacheKey, {
//             data: normalizedPosts,
//             timestamp: Date.now(),
//         }); */

//         return NextResponse.json({
//             success: true,
//             posts: normalizedPosts,
//         });
//     } catch (err) {
//         console.error("Failed to fetch Instagram posts:", err);
//         return new Response("Failed to fetch Instagram posts", {
//             status: 500,
//         });
//     }
// }

// // POST: Direct Instagram OAuth Callback (No Facebook Pages involved)
// export async function POST(req: Request) {
//     try {
//         const { searchParams } = new URL(req.url);
//         const code = searchParams.get("code");

//         if (!code) {
//             return new Response("No code received", {
//                 status: 400,
//             });
//         }

//         const adminId = (req as any).admin?.id;

//         if (!adminId) {
//             return NextResponse.json(
//                 { error: "Unauthorized" },
//                 { status: 401 }
//             );
//         }

//         // 1. Exchange code → short-lived token
//         const form = new URLSearchParams();
//         form.append("client_id", process.env.INSTAGRAM_APP_ID!);
//         form.append("client_secret", process.env.INSTAGRAM_APP_SECRET!);
//         form.append("grant_type", "authorization_code");
//         form.append("redirect_uri", process.env.INSTAGRAM_REDIRECT_URI!);
//         form.append("code", code);

//         const tokenRes = await fetch(
//             "https://api.instagram.com/oauth/access_token",
//             {
//                 method: "POST",
//                 body: form,
//             }
//         );

//         const tokenData = await tokenRes.json();

//         if (!tokenData.access_token) {
//             console.error("Short token error:", tokenData);
//             return NextResponse.json(
//                 {
//                     error: "Failed to get short-lived token",
//                     details: tokenData,
//                 },
//                 { status: 400 }
//             );
//         }

//         // 2. Exchange → long-lived token
//         const longRes = await fetch(
//             `https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=${process.env.INSTAGRAM_APP_SECRET}&access_token=${tokenData.access_token}`
//         );

//         const longData = await longRes.json();

//         if (!longData.access_token) {
//             console.error("Long token error:", longData);
//             return NextResponse.json(
//                 {
//                     error: "Failed to get long-lived token",
//                     details: longData,
//                 },
//                 { status: 400 }
//             );
//         }

//         const accessToken = longData.access_token;
//         console.log("IG Long Access Token received");

//         // 3. Get Instagram Profile Data directly
//         const profileRes = await fetch(
//             `https://graph.instagram.com/v26.0/me?fields=user_id,username,name,profile_picture_url&access_token=${accessToken}`
//         );

//         const profileData = await profileRes.json();

//         if (!profileData.user_id) {
//             return NextResponse.json(
//                 {
//                     error: "Failed to fetch Instagram profile",
//                     raw: profileData,
//                 },
//                 { status: 400 }
//             );
//         }

//         const igAccountId = profileData.user_id;

//         console.log(
//             "IG Account ID:",
//             igAccountId,
//             "Username:",
//             profileData.username
//         );

//         // 4. Save to DB (Pure Instagram only)
//         await prisma.socialAccount.upsert({
//             where: {
//                 userId_platform: {
//                     userId: adminId,
//                     platform: "INSTAGRAM",
//                 },
//             },
//             update: {
//                 accessToken: accessToken,
//                 igAccountId: igAccountId,
//                 username: profileData.username,
//                 // Do not update pageId since it's not linked to Facebook
//             },
//             create: {
//                 userId: adminId,
//                 platform: "INSTAGRAM",
//                 accessToken: accessToken,
//                 igAccountId: igAccountId,
//                 username: profileData.username,
//             },
//         });

//         console.log("Saved Direct Instagram to DB");

//         // 5. Redirect to frontend
//         const clientUrl =
//             process.env.NEXT_PUBLIC_APP_URL || "https://aiworksforce.com";

//         return NextResponse.redirect(
//             new URL("/socialmedia-manager", clientUrl)
//         );
//     } catch (err) {
//         console.error("Instagram OAuth Error:", err);

//         return NextResponse.json(
//             {
//                 error: "Instagram OAuth failed",
//                 details:
//                     err instanceof Error ? err.message : "Unknown error",
//             },
//             { status: 500 }
//         );
//     }
// }
