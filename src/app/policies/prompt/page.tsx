"use client";

import Auth from "@/auth/auth.component";
import AUTH from "@/common/constants/auth.constant";
import PromptView from "@/components/policy-prompt/index.component";

export default function Home() {
  return <Auth component={<PromptView />} type={AUTH.PRIVATE} />;
}
