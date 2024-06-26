"use client";

import { useState } from "react";

export default function useDashboard() {
  const [welcomeAlert, setWelcomeAlert] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  return {
    welcomeAlert,
    setWelcomeAlert,
    setOpenModal,
    openModal
  };
}
