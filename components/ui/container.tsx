import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = ComponentPropsWithoutRef<"div">;

function Container({ className, ...props }: ContainerProps) {
  return <div className={cn("mx-auto max-w-7xl px-6", className)} {...props} />;
}

export { Container };
