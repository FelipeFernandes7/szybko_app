import { CloudMoon, CloudSun, MoonStar, Sun } from "lucide-react-native";
import { useMemo } from "react";

export function GreetingIcon() {
  const hours = new Date().getHours();

  const IconComponent = useMemo(() => {
    if (hours >= 6 && hours <= 12) {
      return CloudSun;
    } else if (hours > 12 && hours <= 18) {
      return Sun;
    } else if (hours > 18 && hours <= 23) {
      return CloudMoon;
    } else {
      return MoonStar;
    }
  }, [hours]);

  return <IconComponent size={40} className="text-white font-bold" />;
}
