"use client";

import { createContext, useContext, useState,  } from 'react';

interface Theme {
  "--color-1": string;
  "--color-2": string;
  "--color-3": string;
  "--color-4": string;
  "--color-5": string;
}

const themes = {
  default: {
    "--color-1": "#f5f5f5",
    "--color-2": "#3D90D9",
    "--color-3": "#0554F2",
    "--color-4": "#034AA6",
    "--color-5": "#0d0d0d",
  },
  lexus: {
    "--color-1": "#fafafa",
    "--color-2": "#D9D9D9",
    "--color-3": "#595959",
    "--color-4": "#262626",
    "--color-5": "#0D0D0D",
  },
  maite: {
    "--color-1": "#F2F2F2",
    "--color-2": "#727372",
    "--color-3": "#731F2E",
    "--color-4": "#BFBFBF",
    "--color-5": "#0D0D0D",
  },
  natural: {
    "--color-5": "#232625",
    "--color-4": "#35403A",
    "--color-3": "#4C594F",
    "--color-2": "#A4A69C",
    "--color-1": "#BFBFB8",
  },
  street: {
    "--color-1": "#f2f2f2",
    "--color-2": "#6ba7bf",
    "--color-3": "#d9415d",
    "--color-4": "#8c3d2b",
    "--color-5": "#395d73",
  },
};

const ThemeContext = createContext({
  theme: themes.default,
  changeTheme: (theme: string) => {},
} as {
  theme: Theme;
  changeTheme: (theme: string) => void;

});

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(themes.default as Theme);

  const changeTheme = (theme: string) => {
    interface Theme {
      "--color-1": string;
      "--color-2": string;
      "--color-3": string;
      "--color-4": string;
      "--color-5": string;
    }
  
    const root = document.documentElement;
    
    const themes: Record<string, Theme> = {
      default: {
        "--color-1": "#f2f2f2",
        "--color-2": "#3D90D9",
        "--color-3": "#0554F2",
        "--color-4": "#034AA6",
        "--color-5": "#0d0d0d",
      },
      lexus: {
        "--color-1": "#fafafa",
        "--color-2": "#D9D9D9",
        "--color-3": "#595959",
        "--color-4": "#262626",
        "--color-5": "#0D0D0D",
      },
      maite: {
        "--color-1": "#F2F2F2",
        "--color-2": "#727372",
        "--color-3": "#731F2E",
        "--color-4": "#BFBFBF",
        "--color-5": "#0D0D0D",
      },
      natural: {
        "--color-5": "#232625",
        "--color-4": "#35403A",
        "--color-3": "#4C594F",
        "--color-2": "#A4A69C",
        "--color-1": "#BFBFB8",
      },
      street: {
        "--color-1": "#f2f2f2",
        "--color-2": "#6ba7bf",
        "--color-3": "#d9415d",
        "--color-4": "#8c3d2b",
        "--color-5": "#395d73",
      },
    };
    if (theme === "default") {
      root.style.setProperty("--color-1", "#f2f2f2");
      root.style.setProperty("--color-2", "#3D90D9");
      root.style.setProperty("--color-3", "#0554F2");
      root.style.setProperty("--color-4", "#034AA6");
      root.style.setProperty("--color-5", "#0d0d0d");
    } else if (theme === "lexus") {
      root.style.setProperty("--color-1", "#fafafa");
      root.style.setProperty("--color-2", "#D9D9D9");
      root.style.setProperty("--color-3", "#595959");
      root.style.setProperty("--color-4", "#262626");
      root.style.setProperty("--color-5", "#0D0D0D");
    } else if (theme === "maite") {
      root.style.setProperty("--color-1", "#F2F2F2");
      root.style.setProperty("--color-2", "#727372");
      root.style.setProperty("--color-3", "#731F2E");
      root.style.setProperty("--color-4", "#BFBFBF");
      root.style.setProperty("--color-5", "#0D0D0D");
    } else if (theme === "natural") {
      root.style.setProperty("--color-5", "#232625");
      root.style.setProperty("--color-4", "#35403A");
      root.style.setProperty("--color-3", "#4C594F");
      root.style.setProperty("--color-2", "#A4A69C");
      root.style.setProperty("--color-1", "#BFBFB8");
    } else if (theme === "street") {
      root.style.setProperty("--color-1", "#f2f2f2");
      root.style.setProperty("--color-2", "#6ba7bf");
      root.style.setProperty("--color-3", "#d9415d");
      root.style.setProperty("--color-4", "#8c3d2b");
      root.style.setProperty("--color-5", "#395d73");
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
