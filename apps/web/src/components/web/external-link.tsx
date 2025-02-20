"use client"

import { type Properties, posthog } from "posthog-js"
import type { ComponentProps } from "react"
import { Link } from "~/components/common/link"
import { updateUrlWithSearchParams } from "~/utils/queryString"

type ExternalLinkProps = ComponentProps<typeof Link> &
  ComponentProps<"a"> & {
    eventName?: string
    eventProps?: Properties
  }

export const ExternalLink = ({
  href,
  target = "_blank",
  rel = "noopener noreferrer nofollow",
  eventName,
  eventProps,
  ...props
}: ExternalLinkProps) => {
  return (
    <Link
      href={updateUrlWithSearchParams(href, { ref: "openalternative" })}
      target={target}
      rel={rel}
      onClick={() => eventName && posthog.capture(eventName, eventProps)}
      {...props}
    />
  )
}
