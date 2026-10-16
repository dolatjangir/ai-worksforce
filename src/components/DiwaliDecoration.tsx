
import Image from "next/image";

interface DiwaliDecorationProps {
  enabled?: boolean;
  zIndex?: number;
}

export default function DiwaliDecoration({
  enabled = true,
  zIndex = 20,
}: DiwaliDecorationProps) {
  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 mt-7 overflow-hidden"
      style={{ zIndex }}
    >
      <Image
        src="/diwali-decoration.png"
        alt=""
        fill
        priority
        sizes="93vw"
        className="pointer-events-none select-none object-fill"
        draggable={false}
      />
    </div>
  );
}
