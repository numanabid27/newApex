"use client";

import Auth from "@/auth/auth.component";
import AUTH from "@/common/constants/auth.constant";
import Dashboard2 from "@/components/dashboard-2/dashboard-2.component";
import Dashboard from "@/components/dashboard/dashboard.component";

export default function Home() {
  // return <Auth component={<Dashboard />} type={AUTH.PRIVATE} />;
  return <Auth component={<Dashboard2 />} type={AUTH.PRIVATE} />;
}
