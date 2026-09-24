"use client";

import { usePathname } from "next/navigation";


import WhatsAppChatbot from "../whatsapp-button/whatsapp";
import Header from "../header";
import Footer from "../Footer/Footer";
import ScrollProgressBar from "../common/indicators/ScrollProgressBar";



export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const hideRoutes = ["/login","/register",
    "/seodashboard","/seo",
    "/onboarding",
    "/seo-login",
    "/certificates",
    "/employee-verify",
   
"/admin-dashboard",
  
  "/blogs","/blogs/new","/blog/[slug]"];
  const hideLayout = hideRoutes.includes(pathname) ||
  pathname.startsWith("/admin-dashboard/");

  return (
    <>
      {!hideLayout && <Header />}
       {!hideLayout && <ScrollProgressBar position="sticky" top="top-[64px]" className=" max-md:hidden" zIndex="99" />}
      {children}
       {!hideLayout && <WhatsAppChatbot/>}
    {!hideLayout &&     <WhatsAppChatbot />}
     
      {!hideLayout && <Footer />}
    </>
  );
}