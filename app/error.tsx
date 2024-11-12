"use client";
import { Skeleton } from "@/components/ui/skeleton";

export default function Error() {
  return (
    <div className="container mx-auto max-w-2xl px-4 py-10">
      <Skeleton className="mb-6 h-10 w-3/4" />
    </div>
  );
}
