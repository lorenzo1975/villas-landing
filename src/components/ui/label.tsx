import * as React from "react";

import { cn } from "@/lib/utils";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  isRequired?: boolean;
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, isRequired, children, ...props }, ref) => (
    <label
      ref={ref}
      className={cn("text-sm font-medium text-foreground dark:text-secondary-foreground", className)}
      {...props}
    >
      {children}
      {isRequired ? <span className="ml-1 text-primary">*</span> : null}
    </label>
  )
);

Label.displayName = "Label";

export { Label };
