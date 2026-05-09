import { useRef, type ReactNode, type MouseEvent } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  strength?: number;
};

export function MagneticButton({ children, className = "", href, target, rel, onClick, strength = 0.35 }: Props) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);

  const onMove = (e: MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };
  const onLeave = () => {
    const el = ref.current; if (!el) return;
    el.style.transform = "translate(0,0)";
  };

  const props = {
    ref: ref as never,
    onMouseMove: onMove,
    onMouseLeave: onLeave,
    onClick,
    className,
    "data-cursor": true,
    style: { transition: "transform 0.35s cubic-bezier(0.2,0.8,0.2,1)" },
  };

  if (href) {
    return (
      <a href={href} target={target} rel={rel} {...props}>
        {children}
      </a>
    );
  }
  return <button {...props}>{children}</button>;
}
