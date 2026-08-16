import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants = {
  primary:
    "bg-burgundy text-softwhite hover:bg-burgundy-dark border border-burgundy hover:border-burgundy-dark",
  secondary:
    "bg-transparent text-burgundy border border-burgundy hover:bg-burgundy hover:text-softwhite",
  ghost:
    "bg-transparent text-softwhite border border-softwhite/60 hover:bg-softwhite hover:text-charcoal",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center px-7 py-3 text-sm font-medium tracking-wide uppercase transition-colors duration-200 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
