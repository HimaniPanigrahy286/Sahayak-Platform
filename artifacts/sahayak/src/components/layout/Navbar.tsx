import React from 'react';
import { Link, useLocation } from 'wouter';
import { useAuth } from '@/context/AuthContext';
import { Accessibility, Menu, X, Bell, User as UserIcon, LogOut, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { mockNotifications } from '@/data/mockData';

export function Navbar() {
  const [location] = useLocation();
  const { isAuthenticated, user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const unreadCount = mockNotifications.filter(n => !n.isRead).length;

  const publicLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
  ];

  const protectedLinks = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Schemes', href: '/schemes' },
    { name: 'Eligibility', href: '/eligibility' },
    { name: 'UDID Guide', href: '/udid' },
    { name: 'Knowledge', href: '/knowledge' },
    { name: 'Updates', href: '/updates' },
  ];

  const links = isAuthenticated ? protectedLinks : publicLinks;

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-1.5 rounded-lg text-primary-foreground group-hover:bg-primary/90 transition-colors">
            <Accessibility className="h-6 w-6" />
          </div>
          <span className="font-serif font-bold text-xl tracking-tight text-foreground">Sahayak</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-6">
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === link.href ? 'text-primary border-b-2 border-primary py-5' : 'text-muted-foreground'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4 border-l border-border pl-6">
            {isAuthenticated ? (
              <>
                <Link href="/notifications" className="relative p-2 text-muted-foreground hover:text-foreground transition-colors">
                  <Bell className="h-5 w-5" />
                  {unreadCount > 0 && (
                    <span className="absolute top-1 right-1 h-4 w-4 bg-destructive text-destructive-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
                      {unreadCount}
                    </span>
                  )}
                </Link>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center gap-2 pl-2 pr-4 py-2 h-auto rounded-full border border-border/50 hover:bg-muted">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                        {user?.name.charAt(0)}
                      </div>
                      <span className="text-sm font-medium hidden lg:block">{user?.name.split(' ')[0]}</span>
                      <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <div className="px-2 py-2.5">
                      <p className="text-sm font-medium">{user?.name}</p>
                      <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/profile" className="w-full cursor-pointer flex items-center">
                        <UserIcon className="mr-2 h-4 w-4" /> Profile
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard" className="w-full cursor-pointer flex items-center">
                        <Accessibility className="mr-2 h-4 w-4" /> Dashboard
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout} className="text-destructive focus:text-destructive cursor-pointer">
                      <LogOut className="mr-2 h-4 w-4" /> Log out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                <Link href="/login" className="text-sm font-medium hover:text-primary transition-colors">
                  Log in
                </Link>
                <Link href="/register">
                  <Button className="rounded-full shadow-sm">Sign Up</Button>
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center gap-4">
          {isAuthenticated && (
            <Link href="/notifications" className="relative p-2 text-muted-foreground">
              <Bell className="h-5 w-5" />
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 h-4 w-4 bg-destructive text-destructive-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </Link>
          )}
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background p-4 absolute w-full shadow-lg">
          <div className="flex flex-col space-y-4">
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`text-base font-medium px-2 py-1 rounded-md ${
                  location === link.href ? 'bg-primary/10 text-primary' : 'text-foreground'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="h-px bg-border my-2" />
            
            {isAuthenticated ? (
              <>
                <Link href="/profile" className="flex items-center gap-2 px-2 py-1 font-medium text-foreground" onClick={() => setIsMobileMenuOpen(false)}>
                  <UserIcon className="h-5 w-5 text-muted-foreground" /> Profile
                </Link>
                <button 
                  onClick={() => { handleLogout(); setIsMobileMenuOpen(false); }}
                  className="flex items-center gap-2 px-2 py-1 font-medium text-destructive text-left"
                >
                  <LogOut className="h-5 w-5" /> Log out
                </button>
              </>
            ) : (
              <div className="flex flex-col gap-2 pt-2">
                <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full justify-center">Log in</Button>
                </Link>
                <Link href="/register" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full justify-center">Sign Up</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
