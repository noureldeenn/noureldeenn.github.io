import * as React from "react";
import Link from "next/link";

type ButtonProps = {
  variant?: "primary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

const sizeMap = {
  sm: "px-4 py-2 text-xs",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-sm",
};

const variantMap = {
  primary:
    "bg-ember text-ink font-medium hover:bg-paper transition-colors duration-200",
  ghost:
    "border border-rule text-paper hover:border-ember hover:text-ember transition-colors duration-200",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  children,
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = `inline-flex items-center gap-2 font-mono tracking-tight rounded-none ${sizeMap[size]} ${variantMap[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}