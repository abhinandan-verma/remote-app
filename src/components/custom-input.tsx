import React from 'react'
import { cn } from "@/lib/utils"

export interface CustomInputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    startIcons?: React.ReactNode[],
    endIcons?: React.ReactNode[],
  }

const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
    ({ className, type, startIcons, endIcons, ...props }, ref) => {
        return (
            <div className="flex items-center justify-around gap-2">
                {startIcons?.map((icon, index) => (
                    <div key={index} className="mr-2">
                        {icon}
                    </div>
                ))}
                <input
                    type={type}
                    className={cn(
                        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                        className
                    )}
                    ref={ref}
                    {...props}
                />
                {endIcons?.map((icon, index) => (
                    <div key={index} className="ml-2">
                        {icon}
                    </div>
                ))}
            </div>
        )
    }
)

CustomInput.displayName = "CustomInput"

export { CustomInput }