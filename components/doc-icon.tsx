import {
  IdCard,
  BookOpen,
  Car,
  Baby,
  Receipt,
  FileText,
  Heart,
  Home,
  Landmark,
  Truck,
  UserCheck,
  Smartphone,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "id-card": IdCard,
  "book-open": BookOpen,
  car: Car,
  baby: Baby,
  receipt: Receipt,
  heart: Heart,
  home: Home,
  landmark: Landmark,
  truck: Truck,
  "user-check": UserCheck,
  smartphone: Smartphone,
};

export function DocIcon({
  name,
  className = "size-5",
}: {
  name: string;
  className?: string;
}) {
  const Icon = iconMap[name] || FileText;
  return <Icon className={className} />;
}
