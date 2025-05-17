
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme}
      className="rounded-full"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all" />
      ) : (
        <Moon className="h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all" />
      )}
    </Button>
  );
}
