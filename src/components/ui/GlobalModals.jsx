import React from "react";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HowItWorksModal from "./HowItWorksModal";

export const GlobalModals = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const modalType = searchParams.get("modal");

  const closeModal = () => {
    const updatedParams = new URLSearchParams(searchParams);
    updatedParams.delete("modal");
    setSearchParams(updatedParams);
  };

  return (
    <AnimatePresence>
      {modalType === "how-it-works" && <HowItWorksModal onClose={closeModal} />}
    </AnimatePresence>
  );
};

export default GlobalModals;
