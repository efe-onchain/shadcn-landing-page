"use client";

import { Card, CardContent, CardHeader } from "../ui/card";

interface AppointmentSchedulerProps {
  title?: string;
  description?: string;
}

export function AppointmentScheduler({}: AppointmentSchedulerProps) {
  return (
    <div>
      <div className="rounded-lg overflow-hidden border bg-background">
        <iframe
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1vD2M-fgHRxfbhhUhg45cLwwJcK7auI9vyx6gNsj2qdouOG-Xk835inMAjUne8hXaTGU5aQDnt?gv=true"
          width="100%"
          height="600"
          frameBorder="0"
          className="w-full"
        />
      </div>
    </div>
  );
}
