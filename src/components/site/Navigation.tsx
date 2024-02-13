import { SITE_NAVIGATION } from "@/config/site-config";
import { INavigationItem } from "@/types/site";
import { NavigationItem } from "./NavigationItem";

export const Navigation = () => {
  return (
    <div className="header-action flex gap-x-2">
      {SITE_NAVIGATION.map((item: INavigationItem) => (
        <NavigationItem {...item} />
      ))}
    </div>
  );
};
