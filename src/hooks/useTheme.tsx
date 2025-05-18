
import { useEffect, createContext, useContext } from "react";

type Theme = "dark";

type ThemeProviderProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: Theme;
};

// Create a context for theme management
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * ThemeProvider component - Manages the theme state
 * Modified to always use dark theme
 */
export function ThemeProvider({ children }: ThemeProviderProps) {
  // Always use dark theme
  const theme: Theme = "dark";

  // Apply theme to the document root on component mount
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light");
    root.classList.add("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Custom hook to access the theme context
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
