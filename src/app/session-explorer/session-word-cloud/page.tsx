"use client";

import Auth from "@/auth/auth.component";
import AUTH from "@/common/constants/auth.constant";
import { SessionWordCloud } from "@/components/session-explorer/components/session-cloud/session-cloud.component";




export default function Home() {
  return <Auth component={<SessionWordCloud />} type={AUTH.PRIVATE} />;
}
