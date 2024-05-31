"use client";

import Auth from "@/auth/auth.component";
import AUTH from "@/common/constants/auth.constant";
import "@/app/graph.css";
import EngineDetail from "@/components/engines/components/engine-detail/engine-detail-component";




export default function Home() {
  return <Auth component={<EngineDetail  />} type={AUTH.PRIVATE} />;
}
