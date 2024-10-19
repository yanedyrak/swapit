import { icons } from "lucide-react-native";
import { className } from "../../node_modules/@sinonjs/commons/types/index.d";

export const Icon = ({
  name,
  color = "#616161",
  size = 26,
  filled,
  className,
}: {
  name: keyof typeof icons;
  color?: string;
  size?: number;
  filled?: boolean;
  className?: string;
}) => {
  const LucideIcon = icons[name];

  return (
    <LucideIcon
      color={color}
      size={size}
      fill={filled ? color : "none"}
      className={className}
    />
  );
};
