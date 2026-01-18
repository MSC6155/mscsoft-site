"use client";

import { useState } from "react";
import { PopupModal } from "react-calendly";
import { SITE } from "@/config/site";

export default function CalendlyPopupButton({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} className={className}>
        {label}
      </button>

      <PopupModal
        url={SITE.calendlyUrl}
        open={open}
        onModalClose={() => setOpen(false)}
        rootElement={document.body}
        // rootElement={typeof document !== "undefined" ? document.body : undefined}
      />
    </>
  );
}
