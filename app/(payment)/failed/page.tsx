import React from "react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import failedImage from "@/public/failed.svg";

const FullPageFailedPayment = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Card className="h-full w-full max-w-none">
        <div className="grid h-full grid-cols-1 md:grid-cols-2">
          <div className="flex items-center justify-center">
            <Image
              src={failedImage}
              alt="Payment Failed"
              width={400}
              height={400}
            />
          </div>
          <div className="flex flex-col items-start justify-center">
            <CardHeader>
              <CardTitle className="text-3xl text-red-600">
                Payment Failed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-xl">
                We apologize, but your payment was not successful. Please check
                your payment information and try again.
              </CardDescription>
              <div className="mt-6 flex">
                <Button variant="destructive">Try Again</Button>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default FullPageFailedPayment;
