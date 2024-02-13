import { Typography } from "@/components/ui/typography";

const HomeComponent = () => {
  return (
    <div className="h-80 flex flex-col justify-center items-center">
      <Typography variant="7xl" weight="extrabold">
        Welcome to <span className="text-pink-500">Toil</span>
      </Typography>
    </div>
  );
};

export default HomeComponent;
