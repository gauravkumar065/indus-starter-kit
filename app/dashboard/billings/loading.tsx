import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonLoading() {
  return (
    <div className="container mx-auto max-w-2xl px-4 py-10">
      <Skeleton className="mb-6 h-10 w-3/4" />

      <Card className="mb-8">
        <CardHeader>
          <Skeleton className="mb-2 h-8 w-1/2" />
          <Skeleton className="h-4 w-2/3" />
        </CardHeader>
        <CardContent className="space-y-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center justify-between">
              <Skeleton className="h-4 w-1/4" />
              <Skeleton className="h-4 w-1/3" />
            </div>
          ))}
        </CardContent>
        <CardFooter>
          <Skeleton className="h-10 w-full" />
        </CardFooter>
      </Card>

      <div className="mb-8 space-y-4">
        <Skeleton className="h-6 w-1/3" />
        <Skeleton className="h-10 w-48" />
      </div>

      <div className="mb-8 space-y-4">
        <Skeleton className="h-6 w-1/3" />
        <Skeleton className="h-10 w-48" />
      </div>

      <Skeleton className="h-16 w-full" />
    </div>
  );
}
