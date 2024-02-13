import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <header className="flex justify-between px-8 py-8">
        <Typography variant="3xl" weight="extrabold">
          Toil
        </Typography>

        <div className="header-action flex gap-x-2">
          <div className="px-4 py-2">
            <Typography variant="xl" weight="semibold" color="subtle">
              Home
            </Typography>
          </div>
          <div className="px-4 py-2">
            <Typography variant="xl" weight="semibold" color="subtle">
              Features
            </Typography>
          </div>
          <div className="px-4 py-2">
            <Typography variant="xl" weight="semibold" color="subtle">
              Pricing
            </Typography>
          </div>
          <div className="px-4 py-2">
            <Typography variant="xl" weight="semibold" color="subtle">
              Testimonials
            </Typography>
          </div>

          <Button variant="outline">Get Started</Button>
        </div>
      </header>
    </main>
  );
}
