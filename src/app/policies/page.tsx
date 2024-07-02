"use client";

import Auth from "@/auth/auth.component";
import AUTH from "@/common/constants/auth.constant";
import CreatePolicy from "@/components/create-policy/createPolicy.component";
import { PolicyPage } from "@/components/policy/policy";

// export default function Home() {
//   return <Auth component={<CreatePolicy />} type={AUTH.PRIVATE} />;
// }


export default function Home() {
  return <Auth component={<PolicyPage />} type={AUTH.PRIVATE} />;
}
