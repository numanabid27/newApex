"use client";

import Auth from "@/auth/auth.component";
import AUTH from "@/common/constants/auth.constant";
import CreatePolicy from "@/components/create-policy/createPolicy.component";
import { useParams, useSearchParams } from "next/navigation";

export default function Home() {
  const searchParam = useSearchParams();
  const id = searchParam.get("id");
  return (
    <div>
      <Auth component={<CreatePolicy id={id}/>} type={AUTH.PRIVATE} />
    </div>
  );
}
