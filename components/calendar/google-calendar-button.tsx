"use client";
import { useEffect, useState } from "react";
import Script from "next/script";
import { PulsatingButton } from "@/components/ui/pulsating-button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface CalendarButtonProps {
  color?: string;
  label?: string;
}

const TIMEZONE_URLS = {
  US: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1vD2M-fgHRxfbhhUhg45cLwwJcK7auI9vyx6gNsj2qdouOG-Xk835inMAjUne8hXaTGU5aQDnt?gv=true",
  Europe:
    "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1vD2M-fgHRxfbhhUhg45cLwwJcK7auI9vyx6gNsj2qdouOG-Xk835inMAjUne8hXaTGU5aQDnt?timezone=Europe/London&gv=true",
};

declare global {
  interface Window {
    calendar?: {
      schedulingButton: {
        load: (config: { url: string; color: string; label: string; target: HTMLElement | null }) => void;
      };
    };
  }
}

export function GoogleCalendarButton({ color = "#e11d48", label = "Book a Demo" }: CalendarButtonProps) {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [timezone, setTimezone] = useState<"US" | "Europe">("US");
  const [key, setKey] = useState(0); // Add a key to force remount

  const handleTimezoneChange = (value: "US" | "Europe") => {
    setTimezone(value);
    setKey((prev) => prev + 1); // Increment key to force remount
  };

  useEffect(() => {
    const loadCalendarButton = () => {
      const target = document.getElementById("calendar-button-container");
      if (window.calendar && target) {
        // Clear the previous button
        target.innerHTML = "";

        window.calendar.schedulingButton.load({
          url: TIMEZONE_URLS[timezone],
          color,
          label,
          target,
        });
      }
    };

    if (isScriptLoaded) {
      loadCalendarButton();
    }

    window.addEventListener("load", loadCalendarButton);

    return () => {
      window.removeEventListener("load", loadCalendarButton);
    };
  }, [color, label, isScriptLoaded, timezone]);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex gap-x-6 justify-center items-end">
        <div className="flex flex-col gap-y-2">
          <label htmlFor="timezone-select" className="text-sm text-muted-foreground pl-2">
            Select a timezone
          </label>
          <Select value={timezone} onValueChange={handleTimezoneChange}>
            <SelectTrigger id="timezone-select" className="w-[180px]">
              <SelectValue placeholder="Select timezone" />
            </SelectTrigger>
            <SelectContent className="border-black">
              <SelectItem value="US">US (Eastern Time)</SelectItem>
              <SelectItem value="Europe">Europe (West)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div key={key}>
          <Script
            src="https://calendar.google.com/calendar/scheduling-button-script.js"
            onLoad={() => setIsScriptLoaded(true)}
          />
          <link
            href="https://calendar.google.com/calendar/scheduling-button-script.css"
            rel="stylesheet"
            type="text/css"
          />
          <div
            id="calendar-button-container"
            className="calendar-button-container min-h-[40px] min-w-[180px] flex items-center justify-center"
          >
            {!isScriptLoaded && (
              <PulsatingButton pulseColor={color} disabled>
                {label}
              </PulsatingButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
