import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="grid h-screen w-full flex-grow items-center bg-zinc-100 px-4 sm:justify-center dark:bg-black">
      <SignUp fallbackRedirectUrl="/" signInFallbackRedirectUrl="/dashboard" />
    </div>
  );
}
