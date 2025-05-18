
import { Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

/**
 * ThemeToggle component - This would normally toggle between light and dark themes,
 * but has been modified to show only the dark mode icon since we're keeping the app
 * in dark mode only.
 */
export default function ThemeToggle() {
  // We still use useTheme but won't actually toggle themes
  const { theme } = useTheme();

  return (
    <div className="rounded-full" aria-label="Dark Mode">
      <Moon className="h-[1.5rem] w-[1.5rem] text-primary" />
    </div>
  );
}
