import { type ReactNode } from "react";

type OffsetButtonProps = {
  children: ReactNode;
  face?: string;
  shadow?: string;
  textColor?: string;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

/**
 * Figma CTA: face sits inset on the right + bottom so the shadow
 * color shows on those two edges only.
 */
export function OffsetButton({
  children,
  face = "#EB6601",
  shadow = "#14DDBD",
  textColor = "#FFFFFF",
  className = "",
  href,
  onClick,
  type = "button",
}: OffsetButtonProps) {
  const body = (
    <span className="group relative block h-[52px] w-full transition-transform duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0">
      {/* Shadow layer — visible on right + bottom */}
      <span
        className="absolute transition-[left,top] duration-200 ease-out group-hover:left-[3%] group-hover:top-[10%]"
        style={{
          background: shadow,
          left: "1.5%",
          right: 0,
          top: "5.77%",
          bottom: 0,
        }}
        aria-hidden
      />
      {/* Face */}
      <span
        className="absolute flex items-center justify-center gap-2 border border-black px-4 transition-[filter,right,bottom] duration-200 ease-out group-hover:brightness-110 group-hover:right-[3%] group-hover:bottom-[10%]"
        style={{
          background: face,
          color: textColor,
          left: 0,
          right: "1.5%",
          top: 0,
          bottom: "5.77%",
        }}
      >
        {children}
      </span>
    </span>
  );

  /* className on the outer control so hidden/md: etc. actually take effect */
  if (href) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className={`inline-block ${className}`}
        onClick={onClick}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {body}
      </a>
    );
  }

  return (
    <button type={type} className={`inline-block cursor-pointer ${className}`} onClick={onClick}>
      {body}
    </button>
  );
}

export function ButtonArrow() {
  return (
    <svg
      width="8"
      height="12"
      viewBox="0 0 8 12"
      fill="currentColor"
      aria-hidden
      className="shrink-0 -translate-y-px transition-transform duration-200 group-hover:translate-x-0.5"
    >
      <path d="M1.2 0.4L7.2 6L1.2 11.6L0 10.3L4.8 6L0 1.7L1.2 0.4Z" />
    </svg>
  );
}
