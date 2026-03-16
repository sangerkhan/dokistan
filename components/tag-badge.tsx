import { Tag } from "@/data/types";
import { getTagClasses } from "@/lib/tag-colors";
import { cn } from "@/lib/utils";

export function TagBadge({
  tag,
  className,
  onClick,
  active,
}: {
  tag: Tag;
  className?: string;
  onClick?: () => void;
  active?: boolean;
}) {
  const base = getTagClasses(tag);
  return (
    <span
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={onClick ? (e) => { if (e.key === "Enter" || e.key === " ") onClick(); } : undefined}
      className={cn(
        "inline-flex items-center rounded-md px-1.5 py-0.5 text-[10px] font-medium tracking-wide transition-all",
        base,
        onClick && "cursor-pointer hover:opacity-80",
        active === false && "opacity-35",
        className
      )}
    >
      {tag}
    </span>
  );
}
