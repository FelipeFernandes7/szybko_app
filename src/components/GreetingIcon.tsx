import { CloudMoon, CloudSun, MoonStar, Sun } from "lucide-react-native";

export function GreetingIcon() {
  const hours = new Date().getHours();
  if (hours > 6 && hours <= 12) {
    return <CloudSun size={40} className=" text-white font-bold" />;
  }
  if (hours > 12 && hours <= 18) {
    return <Sun size={40} className=" text-white font-bold" />;
  }
  if (hours >= 18 && hours < 6) {
    return <CloudMoon size={40} className=" text-white font-bold" />;
  }
  if (hours > 23 && hours <= 5) {
    return <MoonStar size={40} className=" text-white font-bold" />;
  }
  return hours.toString();
}
