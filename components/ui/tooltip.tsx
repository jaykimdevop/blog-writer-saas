"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { ReactNode } from "react";

export function Tooltip({ children, content }: { children: ReactNode; content: string }) {
  return (
    <TooltipPrimitive.Provider delayDuration={300}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content className="rounded bg-black px-3 py-1.5 text-sm text-white shadow" sideOffset={8}>
            {content}
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}
