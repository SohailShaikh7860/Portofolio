"use client"

import * as React from "react"
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="relative group">
      <button
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="relative p-2.5 md:p-3.5 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 dark:hover:bg-gray-700 hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 dark:focus:ring-offset-gray-900"
      >
        <Sun className="w-5 h-5 md:w-6 md:h-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 md:w-6 md:h-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </button>
      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 pointer-events-none">
        Theme
      </span>
    </div>
  )
}
