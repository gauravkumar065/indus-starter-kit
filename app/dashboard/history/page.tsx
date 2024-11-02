"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const handlePreviousMonth = () => {
    if (date) {
      const previousMonth = new Date(
        date.getFullYear(),
        date.getMonth() - 1,
        1,
      );
      setDate(previousMonth);
    }
  };

  const handleNextMonth = () => {
    if (date) {
      const nextMonth = new Date(date.getFullYear(), date.getMonth() + 1, 1);
      setDate(nextMonth);
    }
  };

  const handleToday = () => {
    setDate(new Date());
  };

  return (
    <div className="bg-background flex min-h-screen items-center justify-center p-4">
      <div className="bg-card w-full max-w-md rounded-lg p-6 shadow-lg">
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-foreground text-2xl font-bold">Calendar</h1>
          <div className="flex space-x-2">
            <Button variant="outline" size="icon" onClick={handlePreviousMonth}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={handleNextMonth}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border shadow"
        />
        <div className="mt-4 flex items-center justify-between">
          <Button variant="outline" onClick={handleToday}>
            Today
          </Button>
          <p className="text-muted-foreground text-sm">
            {date ? date.toDateString() : "No date selected"}
          </p>
        </div>
      </div>
    </div>
  );
}
