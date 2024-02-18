export const codeString1 = `
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  :root {
    --color-1: #f2f2f2;
    --color-2: #3D90D9;
    --color-3: #0554F2;
    --color-4: #034AA6;
    --color-5: #0d0d0d;
  }`;

export const codeString2 = `
  export const changeTheme = (theme: string) => {
    const root = document.documentElement;
    if (theme === "") {
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
  `;

export const codeString3 = `
  "use client";
  import { changeTheme } from "@/utils/changeTheme";

  export default function ChangeThemeButtons() {
  
  return (
    <div>
      <button onClick={() => changeTheme("")}> Default </button>
      <button onClick={() => changeTheme("lexus")}> Lexus </button>
      <button onClick={() => changeTheme("maite")}> Maite </button>
      <button onClick={() => changeTheme("natural")}> Natural </button>
      <button onClick={() => changeTheme("street")}> Street </button>
    </div>
  )}
  `;
