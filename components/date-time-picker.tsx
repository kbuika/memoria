// import { CalendarIcon } from "lucide-react";
import React from "react";
import {
  DateValue,
  useDatePicker,
} from "react-aria";
import { DatePickerStateOptions, useDatePickerState } from "react-stately";
import { useForwardedRef } from "../lib/useForwardRef";
import { cn } from "../lib/utils";
// import { Button } from "./ui/button";
// import { Popover, PopoverContent, PopoverTrigger } from "../popover";
// import { Calendar } from "./calendar";
import { DateField } from "./ui/date-field";
// import { TimeField } from "./time-field";

const DateTimePicker = React.forwardRef<
  HTMLDivElement,
  DatePickerStateOptions<DateValue>
>((props, forwardedRef) => {
  const ref = useForwardedRef(forwardedRef);

  const state = useDatePickerState(props);
  const {
    groupProps,
    fieldProps,
  } = useDatePicker(props, state, ref);

  return (
    <div
      {...groupProps}
      ref={ref}
      className={cn(
        groupProps.className,
        "w-auto flex items-center rounded-md ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2"
      )}
    >
      <DateField {...fieldProps} />
    </div>
  );
});

DateTimePicker.displayName = "DateTimePicker";

export { DateTimePicker };
