"use client";

import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import MoniterIcon from "@/components/Svg/MoniterSvgIcon";
import IconMoon from "@/components/Svg/MoonSvgIcon";
import IconSun from "@/components/Svg/SunSvgIcon";

import { AppTheme } from "@/constant/AppTheme";
import { type AppThemesType } from "@/types/theme.types";

interface ThemeOptionProps {
  value: AppThemesType;
  icon: React.ReactNode;
}
const themeOptions: ThemeOptionProps[] = [
  {
    value: AppTheme.LIGHT,
    icon: <IconSun className="group-hover:rotate-90" />,
  },
  {
    value: AppTheme.DARK,
    icon: <IconMoon className="" />,
  },
  {
    value: AppTheme.SYSTEM,
    icon: <MoniterIcon className="group-hover:animate-bounce" />,
  },
];
export default function ToggleTheme({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  function changeTheme(keys: AppTheme) {
    setTheme(keys);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className={className}>
          <IconSun className="rotate-0 scale-100 duration-500 dark:-rotate-90 dark:scale-0" />
          <IconMoon className="absolute rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themeOptions.map((option: ThemeOptionProps) => {
          return (
            <DropdownMenuItem
              onClick={() => changeTheme(option.value)}
              key={option.value}
              className="justify-between"
            >
              {option.icon}
              <DropdownMenuLabel className="capitalize">
                {option.value}
              </DropdownMenuLabel>
              <DropdownMenuCheckboxItem
                className="justify-end pr-0"
                checked={theme === option.value}
              />
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
