import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-background w-full border-t py-6">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-muted-foreground text-sm">
          © 2024 SaaS Starter. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Button variant="ghost" size="sm">
            Terms
          </Button>
          <Button variant="ghost" size="sm">
            Privacy
          </Button>
          <Button variant="ghost" size="sm">
            Contact
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
