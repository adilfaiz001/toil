import { INavigationItem } from "@/types/site";
import { Typography } from "@ui/typography";
import Link from "next/link";

export const NavigationItem = ({ label, url }: INavigationItem) => {
  return (
    <div className="px-4 py-2">
      <Link href={url}>
        <Typography variant="xl" weight="semibold" color="subtle">
          {label}
        </Typography>
      </Link>
    </div>
  );
};
