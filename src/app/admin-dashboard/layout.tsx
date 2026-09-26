// src/app/admin-dashboard/layout.tsx

import { redirect } from "next/navigation";


import DashboardLayoutClient from "./dashboardLayoutClient";
import { getCurrentAdmin } from "../../../lib/auth-guard";


export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const admin = await getCurrentAdmin();

  if (!admin) {
    redirect("/login");
  }

  return (
    <DashboardLayoutClient>
      {children}
    </DashboardLayoutClient>
  );
}