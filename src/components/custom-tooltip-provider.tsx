import React from "react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
 
export interface CustomInputProps {
    children: React.ReactNode,
    tooltip: string
}

export const CustomTooltipProvider: React.FC<CustomInputProps> = ({ children, tooltip }: CustomInputProps) => {
    return (
        <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild className=" cursor-pointer hover:bg-white w-full h-full">
            {children}
        </TooltipTrigger>
        <TooltipContent>
            {tooltip}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
    )
}