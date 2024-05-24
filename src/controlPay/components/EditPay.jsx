import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";

import { Calendar } from "@/components/ui/calendar";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { CalendarIcon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  updateAmount,
  updateName,
  updatePercentage,
} from "@/store/controlSlice/controlSlice";

export const EditPay = ({ data }) => {
  const [calendarOpen, setCalendarOpen] = useState(false);
  const { totalAmount } = useSelector((state) => state.control);
  const dispatch = useDispatch();

  const form = useForm({
    defaultValues: {
      name: data?.name,
      amount: data?.amount,
      date: data?.date,
      percentage: data?.percentage,
    },
  });

  //Emite un evento para actualizar el nombre de la persona
  const handleNameChange = (e) => {
    console.log("cambio nombre");
    const value = e.target.value;
    dispatch(updateName({ id: data.id, name: value }));
  };

  //Emite un evento para actualizar la cantidad de dinero
  const handleAmountChange = (e) => {
    const value = parseFloat(e.target.value);

    if (Number.isInteger(value)) {
      const intValue = parseInt(value);

      form.setValue("amount", intValue);
      dispatch(updateAmount({ id: data.id, amount: intValue }));
    } else {
      const floatValue = parseFloat(value.toFixed(1));

      form.setValue("amount", floatValue);
      dispatch(updateAmount({ id: data.id, amount: floatValue }));
    }
  };

  const handleDecrease = () => {
    const currentValue = Math.ceil(parseInt(form.getValues("percentage")));
    if (currentValue > 0) {
      form.setValue("percentage", currentValue - 1);
      dispatch(updatePercentage({ id: data.id, change: "decrease" }));
    }
  };

  const handleIncrease = () => {
    const currentValue = Math.ceil(parseInt(form.getValues("percentage")));
    console.log(currentValue);
    if (currentValue < 100) {
      form.setValue("percentage", currentValue + 1);
      dispatch(updatePercentage({ id: data.id, change: "increase" }));
    }
  };

  const handleDateChange = (date) => {
    console.log("Selected date:", format(date, "dd MMM, yyyy"));
    form.setValue("date", date);
    const ds = form.getValues("date", date);

    console.log(ds);
  };

  return (
    <>
      <Form {...form}>
        <form className="w-24 flex flex-col items-center justify-center">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex">
                <FormControl className="w-full mt-1.5 text-center h-[22px] p-[2px] ">
                  <Input
                    {...field}
                    onChange={(e) => {
                      if (
                        e.target.value.length <= 8 &&
                        e.target.value.length >= 3
                      ) {
                        handleNameChange(e);
                        field.onChange(e);
                      }
                    }}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem className="flex relative items-center">
                <FormControl className="w-full p-[2px] pl-[7px] mt-1.5 text-left h-[22px]">
                  <Input
                    type="number"
                    {...field}
                    onChange={(e) => {
                      if (
                        e.target.value <= totalAmount &&
                        parseFloat(e.target.value).toFixed(2)
                      ) {
                        handleAmountChange(e);
                        field.onChange(e);
                      }
                    }}
                  />
                </FormControl>
                <span className="absolute text-xs right-1 text-gray-500">
                  USD
                </span>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="percentage"
            render={({ field }) => (
              <FormItem className="flex  flex-row items-center justify-center space-x-2 mt-1">
                <Button
                  variant="secondary"
                  type="button"
                  className="size-6 p-2 bg-white border border-orange-700 text-orange-700 text-sm rounded-full"
                  {...field}
                  onClick={handleDecrease}
                >
                  -
                </Button>
                <span className="text-sm h-full text-gray-500">{`${
                  Number.isInteger(field.value)
                    ? field.value.toString()
                    : field.value.toFixed(1)
                }%`}</span>
                <Button
                  variant="secondary"
                  type="button"
                  className="size-6 p-2 bg-white border border-orange-700 text-orange-700 text-sm rounded-full"
                  onClick={handleIncrease}
                >
                  +
                </Button>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                  <PopoverTrigger asChild>
                    <FormControl className="w-full p-[2px] pl-[7px] mt-1.5 text-left h-[22px]">
                      <Button
                        variant={"outline"}
                        className={cn(
                          "pl-3 text-left text-xs",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value && format(field.value, "dd MMM, yyyy")}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={(date) => {
                        field.onChange(date);
                        handleDateChange(date);
                        setCalendarOpen(false);
                      }}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </>
  );
};
