"use client";

import { useEffect } from "react";
import Button from "./Button";

export default function CalendlyButton() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const openCalendly = () => {
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/shubhamkumar2452004/30min",
      });
    }
  };

  return <Button name="Get Appointment" onClick={openCalendly} />;
}
