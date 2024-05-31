"use client";

import Auth from "@/auth/auth.component";
import AUTH from "@/common/constants/auth.constant";
import Login from "@/components/login/login.component";

export default function Home() {
  return <Auth component={<Login />} type={AUTH.PUBLIC} />;
}
