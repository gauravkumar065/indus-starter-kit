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
import successImage from "@/public/success.svg";

const FullPageFailedPayment = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Card className="h-full w-full max-w-none">
        <div className="grid h-full grid-cols-1 md:grid-cols-2">
          <div className="flex items-center justify-center">
            <Image
              src={successImage}
              alt="Payment Success"
              width={400}
              height={400}
            />
          </div>
          <div className="flex flex-col items-start justify-center">
            <CardHeader>
              <CardTitle className="text-3xl text-pink-600">
                Payment Successful
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-xl">
                Thank you for your purchase! Your payment has been processed
                successfully.
              </CardDescription>
              <div className="mt-6 flex">
                <Button>Continue Shopping</Button>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default FullPageFailedPayment;
