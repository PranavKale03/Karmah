"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CheckSquare, Moon, Sun, LogOut } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

import { useMe, useLogout } from "@/hooks/useAuth";
import { getUser, isAuthenticated } from "@/lib/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Data layers
  const { data: userFromQuery } = useMe();
  const logout = useLogout();
  
  // Use localStorage cache instantly to prevent query flicker
  const user = userFromQuery || getUser();
  const isAuth = mounted ? isAuthenticated() : false;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (pathname.startsWith('/login') || pathname.startsWith('/signup')) {
    return null;
  }

  const initials = user?.name ? user.name.charAt(0).toUpperCase() : "U";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-14 items-center justify-between px-4 md:px-8">
        
        {/* Dynamic Logo Mapping */}
        <Link 
          href="/" 
          className="flex items-center gap-2 font-semibold transition-opacity hover:opacity-80"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded bg-primary/10">
            <CheckSquare className="h-4 w-4 text-primary" />
          </div>
          <span>Karmah</span>
        </Link>
        
        {/* Utility / Routing Block */}
        <div className="flex items-center gap-2 md:gap-4">
          
          {/* Authenticated Links Area */}
          {mounted && isAuth && (
            <nav className="hidden md:flex items-center gap-6 text-sm mr-4">
              <Link
                href="/tasks"
                className={cn(
                  "transition-colors hover:text-foreground",
                  pathname.startsWith("/tasks") ? "font-semibold text-foreground" : "text-foreground/60"
                )}
              >
                Tasks
              </Link>
            </nav>
          )}

          {/* Core Visual Tools */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="w-9 h-9 mr-1"
          >
            {mounted ? (
              <>
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </>
            ) : (
              <div className="h-4 w-4" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* Logic Toggle Segment */}
          {mounted ? (
            isAuth ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="outline-none ring-2 ring-transparent transition-all focus:ring-ring rounded-full">
                    <Avatar className="h-8 w-8 hover:opacity-80 transition-opacity flex items-center justify-center">
                      <AvatarFallback className="bg-primary text-primary-foreground text-[13px] font-medium w-full h-full flex items-center justify-center">
                        {initials}
                      </AvatarFallback>
                    </Avatar>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[200px]">
                  <div className="flex flex-col space-y-1 p-3 pt-2">
                    <p className="text-sm font-medium leading-none">{user?.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout} className="text-destructive focus:text-destructive cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center gap-2">
                <Button variant="ghost" className="hidden md:inline-flex px-5" asChild>
                  <Link href="/login">Log in</Link>
                </Button>
                <Button asChild className="px-5 rounded-full">
                  <Link href="/login">Sign up</Link>
                </Button>
              </div>
            )
          ) : (
            // Neutral load gap to prevent CLS layout shift prior to hydration hooks
            <div className="w-16 h-8 md:w-32" />
          )}
          
        </div>
      </div>
    </header>
  );
}
