"use client";

import Auth from "@/auth/auth.component";
import AUTH from "@/common/constants/auth.constant";
import SettingsView from "@/components/settings/settings.component";

export default function Setting() {
  return <Auth component={<SettingsView />} type={AUTH.PRIVATE} />;
}