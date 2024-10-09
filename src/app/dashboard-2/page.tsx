"use client";

import Auth from "@/auth/auth.component";
import AUTH from "@/common/constants/auth.constant";
import Dashboard2 from "@/components/dashboard-2/dashboard-2.component";

export default function Home2() {
  return <Auth component={<Dashboard2 />} type={AUTH.PRIVATE} />;
}
