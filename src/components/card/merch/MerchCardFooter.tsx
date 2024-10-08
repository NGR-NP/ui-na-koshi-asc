"use client";

import { useEffect } from "react";
// Sub-component for choosing color
import { useMemo } from "react";

import { MinusCircleIcon, PlusCircleIcon, ShoppingCart } from "lucide-react";
import {
  Control,
  Controller,
  SubmitHandler,
  UseFormSetValue,
  UseFormWatch,
  useForm,
} from "react-hook-form";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

// Define types for props and form inputs
type Inputs = {
  qty: number;
  size: sizeType;
  color: string;
  suk: merchVarientType[];
};

interface MerchActionsProps {
  merch: merchType;
}

// Main component
export default function MerchCardFooter({ merch }: MerchActionsProps) {
  const { varient } = merch;
  const firstMerch = varient[0];
  const isFirstMerchHasStock = firstMerch.stock > 0;

  const form = useForm<Inputs>({
    defaultValues: {
      qty: isFirstMerchHasStock ? 1 : 0,
      color: firstMerch.color,
      size: firstMerch.size,
      suk: varient,
    },
  });
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = form;

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const handleQtyChange = (
    value: number,
    onChange: (value: number) => void,
    type: "add" | "sub"
  ) => {
    const val = Number(value);
    if (!Number.isNaN(val) && val > 0) {
      onChange(type === "add" ? val + 1 : Math.max(1, val - 1)); // Ensure quantity does not go below 1
    }
  };

  return (
    <CardFooter className="flex-col items-start gap-y-2">
      <Form {...form}>
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col flex-wrap items-start justify-start gap-y-4">
            <ChooseColor
              setValue={setValue}
              watch={watch}
              control={control}
              variants={varient}
            />
            <ChooseSize control={control} variants={varient} />
          </div>
          <div className="flex w-full items-center justify-end gap-2 py-2">
            <p className="my-3 cursor-auto text-lg font-semibold text-foreground">
              {formatCurrency(merch.price)}
            </p>
            <Controller
              control={control}
              name="qty"
              rules={{
                required: "Quantity is required",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Invalid quantity",
                },
                max: {
                  value: 10,
                  message: "Not enough stock",
                },
                min: {
                  value: 1,
                  message: "Quantity must be at least 1",
                },
              }}
              render={({
                field: { onChange, value, ref },
                fieldState: { invalid },
              }) => (
                <div
                  ref={ref}
                  className="flex w-full items-center justify-end gap-2 py-2"
                >
                  <Input
                    type="tel"
                    value={value}
                    onChange={onChange}
                    inputMode="numeric"
                    className={`order-2 size-8 appearance-none p-0 text-center ${
                      invalid ? "animate-shake border-red-500" : ""
                    }`}
                  />
                  <Button
                    size="icon"
                    onClick={() => handleQtyChange(value, onChange, "add")}
                    className="order-3 size-8 p-0 active:scale-95"
                    variant="ghost"
                  >
                    <PlusCircleIcon />
                  </Button>
                  <Button
                    onClick={() => handleQtyChange(value, onChange, "sub")}
                    variant="ghost"
                    size="icon"
                    className="order-1 size-8 p-0 active:scale-95"
                  >
                    <MinusCircleIcon />
                  </Button>
                </div>
              )}
            />
          </div>

          <Button
            type="submit"
            disabled={!!errors.qty}
            className="w-full text-primary-foreground duration-200 ease-in-out active:scale-95"
          >
            <ShoppingCart /> &nbsp; Add to Cart
          </Button>
          {errors.qty && <p className="text-red-500">{errors.qty.message}</p>}
        </form>
      </Form>
    </CardFooter>
  );
}

// Currency formatting function
const formatCurrency = (amount: number) => {
  return Intl.NumberFormat("en-NP", {
    style: "currency",
    currency: "NPR",
    currencyDisplay: "narrowSymbol",
    useGrouping: true,
    minimumFractionDigits: 0,
  }).format(amount);
};

const ChooseColor = ({
  control,
  variants,
  watch,
  setValue,
}: {
  control: Control<Inputs>;
  variants: merchVarientType[];
  watch: UseFormWatch<Inputs>;
  setValue: UseFormSetValue<Inputs>;
}) => {
  const watchSize = watch("size");

  // Use useMemo to memoize available colors
  const availableColors = useMemo(
    () =>
      variants
        .filter((variant) => variant.size === watchSize)
        .map((variant) => variant.color),
    [variants, watchSize]
  );

  useEffect(() => {
    if (availableColors.length > 0) {
      setValue("color", availableColors[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setValue, availableColors]);

  return (
    <Controller
      control={control}
      name="color"
      rules={{
        required: {
          value: true,
          message: "Please select a color",
        },
      }}
      render={({ field: { onChange, value, ref } }) => (
        <ToggleGroup
          type="single"
          ref={ref}
          defaultValue={value}
          onValueChange={onChange}
          variant="outline"
          className="max-w-64 flex-wrap justify-start gap-x-3"
        >
          {availableColors.map((color) => (
            <ToggleGroupItem
              key={color}
              value={color}
              className={cn(
                value === color && "ring-offset-2",
                "size-7 rounded-full border border-card shadow-2xl ring-1 duration-300 animate-in slide-in-from-bottom-2 focus-visible:ring-2 focus-visible:ring-offset-4"
              )}
              style={{
                backgroundColor: color,
                boxShadow: `var(--tw-ring-offset-shadow), var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) ${
                  value === color
                    ? color !== "black"
                      ? color
                      : "hsl(var(--custom-outline-on-black))"
                    : "transparent"
                }, var(--tw-shadow, 0 0 #0000)`,
              }}
            />
          ))}
        </ToggleGroup>
      )}
    />
  );
};

// Sub-component for choosing size
const ChooseSize = ({
  control,
  variants,
}: {
  control: Control<Inputs>;
  variants: merchVarientType[];
}) => {
  const uniqueSizes = Array.from(new Set(variants.map(({ size }) => size)));

  return (
    <Controller
      control={control}
      name="size"
      rules={{ required: "Please select a size" }}
      render={({ field: { onChange, value, ref } }) => (
        <ToggleGroup
          type="single"
          ref={ref}
          defaultValue={value}
          onValueChange={onChange}
          variant="outline"
          className="max-w-64 flex-wrap justify-start gap-x-2"
        >
          {uniqueSizes.map((size) => (
            <ToggleGroupItem
              key={size}
              value={size}
              className="uppercase active:scale-95"
            >
              {size}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      )}
    />
  );
};
