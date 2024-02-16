"use client";

import { Button } from "@ui/button";
import { Typography } from "@ui/typography";
import { Navigation } from "./Navigation";
import { useRouter } from "next/navigation";

const HeaderComponent = () => {
  const router = useRouter();

  return (
    <header className="flex justify-between items-center px-8 py-8">
      <Typography variant="3xl" weight="extrabold">
        Toil
      </Typography>

      <div className="header-action flex gap-x-2 2xl:gap-x-8 items-center">
        <Navigation />

        <Button variant="outline" onClick={() => router.push("/auth/signup")}>
          Get Started
        </Button>
      </div>
    </header>
  );
};

export default HeaderComponent;
