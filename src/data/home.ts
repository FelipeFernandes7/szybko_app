import {
  LucideIcon,
  Package,
  Sandwich,
  Trash,
  Users,
} from "lucide-react-native";

type HomeType = {
  pathname: string;
  label: string;
  icon: LucideIcon;
};

export const home: HomeType[] = [
  {
    pathname: "/snack",
    label: "Lanche da tarde",
    icon: Sandwich,
  },
  {
    pathname: "/day",
    label: "Lixo",
    icon: Trash,
  },
  {
    pathname: "/order",
    label: "Encomendas",
    icon: Package,
  },
  {
    pathname: "/employees",
    label: "Funcionários",
    icon: Users,
  },
];
