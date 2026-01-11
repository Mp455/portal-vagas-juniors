"use client";
import { Button } from "@/components/ui/8bit/button";
import { SelectThemeDropdown } from "./select-theme-dropdown";
import { useThemeConfig } from "./active-theme";

export default function Header() {
  const { activeTheme, setActiveTheme } = useThemeConfig();
  return (
    <header className="flex justify-between items-center mx-5 lg:mx-10">
      <h1 className="text-sm xl:text-3xl retro">Portal Vagas Juniors</h1>
      <div className="flex gap-4">
        <Button variant={"outline"}>Logar</Button>
        <SelectThemeDropdown
          activeTheme={activeTheme}
          setActiveTheme={setActiveTheme}
        />
      </div>
    </header>
  );
}
