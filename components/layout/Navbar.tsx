"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Moon, Sun, LogOut, CheckSquare } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
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

  if (pathname.startsWith('/login')) {
    return null;
  }

  const initials = user?.name ? user.name.charAt(0).toUpperCase() : "U";

  return (
    <div className="fixed top-6 left-0 right-0 z-50 px-4 pointer-events-none">
      <header className="max-w-4xl mx-auto border border-border/50 bg-background/40 backdrop-blur-md rounded-full h-14 pointer-events-auto">
        <div className="flex h-full items-center justify-between px-2">
          
          {/* LEFT: Branding */}
          <Link 
            href="/" 
            className="flex items-center gap-2 font-semibold transition-opacity hover:opacity-80 text-lg font-extrabold"
          >
            <Image src="/Logo.png" alt="Karmah Logo" width={40} height={40} className="rounded-full border" />
            <span>Karmah</span>
          </Link>

          {/* RIGHT: Actions & Tools */}
          <div className="flex items-center gap-3">
            
            {/* My Tasks Quick Link */}
            {mounted && isAuth && (
              <Button asChild variant="outline" size="sm" className="hidden sm:flex rounded-full h-9 px-4">
                <Link href="/tasks">My Tasks</Link>
              </Button>
            )}

            {/* Theme Overlay Toggle */}
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-9 h-9 rounded-full hover:bg-foreground/5"
            >
              {mounted ? (
                <>
                  <Sun className="h-[1.1rem] w-[1.1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.1rem] w-[1.1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </>
              ) : (
                <div className="h-4 w-4" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Auth Dependent Segment */}
            {mounted ? (
              isAuth ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="" size="icon">
                      <Avatar className="h-full w-full hover:opacity-80 transition-opacity border border-border/30">
                        <AvatarFallback className="bg-primary text-primary-foreground text-[12px] font-bold">
                          {initials}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-[200px] mt-2">
                    <div className="flex flex-col space-y-1 p-3 pt-2">
                      <p className="text-sm font-medium leading-none">{user?.name}</p>
                      <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild className="cursor-pointer">
                      <Link href="/tasks" className="flex items-center w-full">
                        <CheckSquare className="mr-2 h-4 w-4" />
                        Dashboard
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={logout} className="text-destructive focus:text-destructive cursor-pointer">
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button asChild className="rounded-full px-5 h-9 text-xs font-semibold shadow-none">
                  <Link href="/login">Get Started</Link>
                </Button>
              )
            ) : (
              <div className="w-9 h-9" />
            )}
            
          </div>
        </div>
      </header>
    </div>
  );
}
