import type React from "react";
import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  LayoutDashboard,
  TrendingUp,
  Wallet,
  PiggyBank,
  Target,
  Settings,
  FileText,
  BarChart3,
  Calendar,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NavLink, useLocation } from "react-router";

interface SubMenuItem {
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  href?: string;
}

interface MenuItem {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  href?: string;
  subItems?: SubMenuItem[];
}

const menuItems: MenuItem[] = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    label: "Transacciones",
    icon: FileText,
    subItems: [
      { label: "Todas las transacciones", href: "/transactions/all" },
      { label: "Ingresos", href: "/transactions/income" },
      { label: "Gastos", href: "/transactions/expenses" },
      { label: "Transferencias", href: "/transactions/transfers" },
    ],
  },
  {
    label: "Cuentas",
    icon: Wallet,
    subItems: [
      { label: "Cuentas bancarias", href: "/accounts/bank" },
      { label: "Tarjetas de crédito", href: "/accounts/credit" },
      { label: "Efectivo", href: "/accounts/cash" },
      { label: "Inversiones", href: "/accounts/investments" },
    ],
  },
  {
    label: "Presupuestos",
    icon: BarChart3,
    subItems: [
      { label: "Ver presupuestos", href: "/budgets/view" },
      { label: "Crear presupuesto", href: "/budgets/create" },
      { label: "Categorías", href: "/budgets/categories" },
    ],
  },
  {
    label: "Objetivos",
    icon: Target,
    subItems: [
      { label: "Mis objetivos", href: "/goals/my-goals" },
      { label: "Crear objetivo", href: "/goals/create" },
      { label: "Historial", href: "/goals/history" },
    ],
  },
  {
    label: "Ahorros",
    icon: PiggyBank,
    subItems: [
      { label: "Cuentas de ahorro", href: "/savings/accounts" },
      { label: "Planes de ahorro", href: "/savings/plans" },
      { label: "Análisis", href: "/savings/analysis" },
    ],
  },
  {
    label: "Inversiones",
    icon: TrendingUp,
    subItems: [
      { label: "Portafolio", href: "/investments/portfolio" },
      { label: "Rendimiento", href: "/investments/performance" },
      { label: "Historial", href: "/investments/history" },
    ],
  },
  {
    label: "Reportes",
    icon: Calendar,
    subItems: [
      { label: "Reporte mensual", href: "/reports/monthly" },
      { label: "Reporte anual", href: "/reports/yearly" },
      { label: "Análisis personalizado", href: "/reports/custom" },
    ],
  },
  {
    label: "Configuración",
    icon: Settings,
    href: "/settings",
  },
  {
    label: "Ayuda",
    icon: HelpCircle,
    href: "/help",
  },
];

interface SidebarProps {
  isOpen: boolean;
  onClose?: () => void;
  isCollapsed?: boolean;
}

export const SidebarMenu = ({ isOpen, isCollapsed, onClose }: SidebarProps) => {
  const location = useLocation();

  const [expandedItems, setExpandedItems] = useState<string[]>(["Dashboard"]);

  const isActive = (href?: string) => {
    if (!href) return false;
    return location.pathname === href;
  };

  // Verificar si un item padre tiene un hijo activo
  const hasActiveChild = (subItems?: SubMenuItem[]) => {
    if (!subItems) return false;
    return subItems.some((subItem) => location.pathname === subItem.href);
  };

  const toggleItem = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-16 h-[calc(100vh-4rem)] bg-sidebar border-r border-sidebar-border z-40 transition-all duration-300 ease-in-out overflow-y-auto",
          "lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
          isCollapsed ? "lg:w-16" : "lg:w-64",
          "w-64"
        )}
      >
        <nav className="p-4 space-y-1">
          {menuItems.map((item) => (
            <div key={item.label}>
              {item.subItems ? (
                <>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full gap-2 text-sidebar-foreground hover:bg-sidebar-accent",
                      // Marcar activo si tiene un hijo activo
                      hasActiveChild(item.subItems) &&
                        "bg-sidebar-accent text-sidebar-accent-foreground",
                      isCollapsed ? "justify-center px-0" : "justify-start"
                    )}
                    onClick={() => toggleItem(item.label)}
                  >
                    <item.icon className="h-4 w-4 flex-shrink-0" />
                    {!isCollapsed && (
                      <>
                        <span className="flex-1 text-left">{item.label}</span>
                        {expandedItems.includes(item.label) ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </>
                    )}
                  </Button>
                  {expandedItems.includes(item.label) && !isCollapsed && (
                    <div className="ml-6 mt-1 space-y-1">
                      {item.subItems.map((subItem) => (
                        <Button
                          key={subItem.label}
                          variant="ghost"
                          asChild
                          className={cn(
                            "w-full justify-start text-sm text-sidebar-foreground",
                            // Marcar activo el subitem
                            isActive(subItem.href) &&
                              "bg-sidebar-primary text-sidebar-primary-foreground"
                          )}
                        >
                          <NavLink to={subItem.href!}>{subItem.label}</NavLink>
                        </Button>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full gap-2 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                    isActive(item.href) &&
                      "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90",
                    isCollapsed ? "justify-center px-0" : "justify-start"
                  )}
                  title={isCollapsed ? item.label : undefined}
                >
                  <item.icon className="h-4 w-4" />
                  <NavLink
                    to={item.href!}
                    className={({ isActive }) =>
                      cn(
                        "w-full gap-2 inline-flex items-center justify-start px-4 py-2 rounded",
                        isActive
                          ? "bg-sidebar-primary text-sidebar-primary-foreground"
                          : "text-sidebar-foreground hover:bg-sidebar-accent"
                      )
                    }
                  >
                    {!isCollapsed && <span>{item.label}</span>}
                  </NavLink>
                </Button>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
};
