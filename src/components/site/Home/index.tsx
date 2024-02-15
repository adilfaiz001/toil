import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import Image from "next/image";

const HomeComponent = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <Typography variant="7xl" weight="extrabold" className="mt-32">
          Welcome to <span className="text-pink-500">Toil</span>
        </Typography>

        <div className="w-1/2 text-center mt-4">
          <Typography variant="lg">
            Where information comes alive - explore, organize, & analyze. Make
            data-driven decisions with your document intelligence platform.
          </Typography>
        </div>

        <div className="mt-10 flex flex-col items-center gap-y-4">
          <Button variant="outline">Learn More</Button>
          <Typography variant="sm" color="subtle">
            Start organizing your documents with intelligence!
          </Typography>

          <Image
            src="/home-page.png"
            alt="organise documents"
            width={1200}
            height={712}
            quality={100}
          />
        </div>
      </div>

      <div className="features-section flex flex-col jsutify-center items-stretch gap-y-8 px-36 py-12">
        <div className="flex flex-col jsutify-center items-center py-20">
          <Typography variant="6xl" weight="extrabold">
            Built it. Customize it. Love it.
          </Typography>
        </div>

        <div className="flex justify-start">
          <Image
            src="/home-organise-1.jpg"
            alt="organise documents"
            width={400}
            height={4000}
            quality={100}
            className="rounded-md bg-white p-2 shadow-2xl ring-1 ring-gray-900/10"
          />

          <div className="w-full flex flex-col justify-center items-center">
            <Typography variant="4xl" weight="bold">
              Organise
            </Typography>
            <Typography variant="xl">your digital documents with us</Typography>
          </div>
        </div>

        <div className="flex justify-start">
          <div className="w-full flex flex-col justify-center items-center">
            <Typography variant="4xl" weight="bold">
              Chat
            </Typography>
            <Typography variant="xl">with documents through AI</Typography>
          </div>

          <Image
            src="/home-analyse-1.jpg"
            alt="organise documents"
            width={400}
            height={4000}
            quality={100}
            className="rounded-md bg-white p-2 shadow-2xl ring-1 ring-gray-900/10"
          />
        </div>

        <div className="flex justify-start">
          <Image
            src="/home-analyse-2.jpg"
            alt="organise documents"
            width={400}
            height={4000}
            quality={100}
            className="rounded-md bg-white p-2 shadow-2xl ring-1 ring-gray-900/10"
          />

          <div className="w-full flex flex-col justify-center items-center">
            <Typography variant="4xl" weight="bold">
              Analyze
            </Typography>
            <Typography variant="xl">document and draw analytics</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
