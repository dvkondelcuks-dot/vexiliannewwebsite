import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  HTMLAttributes,
  PropsWithChildren,
} from "react";

type Tone = "graphite" | "paper";
type ButtonVariant = "primary" | "secondary" | "quiet";
type BadgeVariant = "default" | "audit";
type ContainerSize = "default" | "narrow" | "wide";
type HeadingLevel = "h1" | "h2" | "h3";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Container({
  className,
  size = "default",
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>> & {
  size?: ContainerSize;
}) {
  return (
    <div
      className={cx(
        "vx-container",
        size === "narrow" && "vx-container--narrow",
        size === "wide" && "vx-container--wide",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function Button({
  className,
  variant = "primary",
  fullMobile = false,
  type = "button",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  fullMobile?: boolean;
}) {
  return (
    <button
      className={cx(
        "vx-button",
        `vx-button--${variant}`,
        fullMobile && "vx-button--full-mobile",
        className,
      )}
      type={type}
      {...props}
    />
  );
}

export function AnchorButton({
  className,
  variant = "primary",
  fullMobile = false,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant;
  fullMobile?: boolean;
}) {
  return (
    <a
      className={cx(
        "vx-button",
        `vx-button--${variant}`,
        fullMobile && "vx-button--full-mobile",
        className,
      )}
      {...props}
    />
  );
}

export function Badge({
  className,
  variant = "default",
  ...props
}: HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
}) {
  return (
    <span
      className={cx(
        "vx-badge",
        variant === "audit" && "vx-badge--audit",
        className,
      )}
      {...props}
    />
  );
}

export function PaperPanel({
  className,
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div className={cx("vx-paper-panel vx-on-paper", className)} {...props}>
      {children}
    </div>
  );
}

export function VisualFrame({
  className,
  tone = "graphite",
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>> & {
  tone?: Tone;
}) {
  return (
    <div
      className={cx(
        "vx-visual-frame",
        tone === "paper" && "vx-visual-frame--paper vx-on-paper",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function AnnotationLabel({
  className,
  badge = false,
  ...props
}: HTMLAttributes<HTMLSpanElement> & {
  badge?: boolean;
}) {
  return (
    <span
      className={cx(
        badge ? "vx-annotation-badge" : "vx-annotation-label",
        className,
      )}
      {...props}
    />
  );
}

export function SectionHeader({
  className,
  eyebrow,
  title,
  description,
  level = "h2",
  centered = false,
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>> & {
  eyebrow?: string;
  title: string;
  description?: string;
  level?: HeadingLevel;
  centered?: boolean;
}) {
  const Heading = level;
  const headingClass =
    level === "h1"
      ? "vx-heading-xl"
      : level === "h2"
        ? "vx-heading-lg"
        : "vx-heading-md";

  return (
    <div
      className={cx(
        "vx-section-header vx-stack vx-stack--compact",
        centered && "vx-section-header--center",
        className,
      )}
      {...props}
    >
      {eyebrow ? <p className="vx-eyebrow">{eyebrow}</p> : null}
      <Heading className={headingClass}>{title}</Heading>
      {description ? <p className="vx-lede">{description}</p> : null}
      {children}
    </div>
  );
}
