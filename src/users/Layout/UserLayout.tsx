import { useState } from "react"

import {
  Menu,
  X,
  Bell,
  Wallet,

} from "lucide-react"

import { Button } from "@/components/ui/button"

import { Outlet } from "react-router"
import { SidebarMenu } from "../Components/SidebarMenu"
import { cn } from "@/lib/utils"

export const UserLayout = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  const toggleSidebar = () => {
    if (window.innerWidth < 1024) {
      setSidebarOpen(!sidebarOpen)
    } else {
      setSidebarCollapsed(!sidebarCollapsed)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Hamburger Menu */}
      <header className="sticky top-0 z-50 border-b border-border text-gray-600 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={toggleSidebar}>
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            <div className="flex items-center gap-2">
              <Wallet className="h-6 w-6 text-blue-400" />
              <h1 className="text-xl font-bold text-foreground">Finance App</h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5 text-gray-700" />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                3
              </span>
            </Button>
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-full bg-blue-200 flex items-center justify-center">
                <span className="text-sm font-semibold text-blue-700">MC</span>
              </div>
              <div className="text-sm hidden sm:block">
                <p className="font-medium text-foreground">Iram Alvarez</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar Component */}
      <SidebarMenu isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} isCollapsed={sidebarCollapsed} />

      {/* Main Content with Left Margin on Desktop */}
      <main className={cn("transition-all duration-300 ease-in-out", sidebarCollapsed ? "lg:ml-16" : "lg:ml-64")}>
        <div className="container mx-auto p-4 md:p-6 space-y-6">
          {/* Welcome Section */}
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-balance text-black">Bienvenido, Iram</h2>
            <p className="text-muted-foreground">Aquí está el resumen de tus finanzas personales</p>
          </div>
          <Outlet />
        </div>
      </main>
    </div>
  )
}
