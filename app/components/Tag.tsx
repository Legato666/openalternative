import { Slot } from "@radix-ui/react-slot"
import { Link, type LinkProps } from "@remix-run/react"
import { ReactNode } from "react"
import { cx } from "~/utils/cva"

type TagProps = Omit<LinkProps, "prefix"> & {
  /**
   * The slot to be rendered before the label.
   */
  prefix?: ReactNode
}

export const Tag = ({ children, className, prefix, ...props }: TagProps) => {
  return (
    <Link
      className={cx(
        "flex items-center gap-0.5 text-secondary text-sm hover:text-foreground",
        className,
      )}
      unstable_viewTransition
      {...props}
    >
      {prefix && <Slot className="opacity-30">{prefix}</Slot>}
      {children}
    </Link>
  )
}
