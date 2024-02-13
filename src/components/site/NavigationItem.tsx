import { Typography } from "@ui/typography";
import Link from "next/link";

interface Props {
  label: string;
  url: string;
}

export const HeaderNavItem = ({ label, url }: Props) => {
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
