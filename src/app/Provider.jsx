'use client'

import { ThemeProvider } from "next-themes"



const Provider = ({children}) => {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
        <div className="text-black dark:text-white dark:bg-black min-h-screen select-none transition-colors duration-400">
            {children}
        </div>
    </ThemeProvider>
  )
}

export default Provider