
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Wallet, LineChart, Users, Home, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface NavItemProps {
  to: string;
  Icon: React.ElementType;
  label: string;
  current: boolean;
}

const NavItem = ({ to, Icon, label, current }: NavItemProps) => (
  <Link to={to}>
    <Button 
      variant={current ? "default" : "ghost"} 
      className={`flex items-center justify-start gap-2 w-full ${current ? 'bg-accent hover:bg-accent/90' : 'hover:bg-muted'}`}
    >
      <Icon className={`h-5 w-5 ${current ? 'text-accent-foreground' : 'text-muted-foreground'}`} />
      <span className={current ? 'text-accent-foreground' : 'text-muted-foreground'}>{label}</span>
    </Button>
  </Link>
);

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const [isWalletConnected, setIsWalletConnected] = React.useState(false);

  const connectWallet = () => {
    // Mock wallet connection
    setIsWalletConnected(true);
    toast.success("Wallet connected successfully");
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/d3cfed66-a858-4e92-88ae-d9db1ae2a75d.png" 
                alt="Reto Business Logo" 
                className="h-8 w-32 object-contain"
              />
              <span 
                className="text-lg font-bold" 
                style={{ color: '#04e3f1' }}
              >
                Reto Business
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            {isWalletConnected ? (
              <Button variant="outline" className="border border-tron-blue animate-glow">
                <Wallet className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">0x1a2...3b4c</span>
              </Button>
            ) : (
              <Button onClick={connectWallet}>
                <Wallet className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">Connect Wallet</span>
              </Button>
            )}
          </div>
        </div>
      </header>

      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <div className="h-full py-6 pr-6 lg:py-8">
            <nav className="flex flex-col gap-2">
              <NavItem to="/" Icon={Home} label="Dashboard" current={location.pathname === '/'} />
              <NavItem to="/profile" Icon={LineChart} label="My Stats" current={location.pathname === '/profile'} />
              <NavItem to="/leaderboard" Icon={Trophy} label="Leaderboard" current={location.pathname === '/leaderboard'} />
              <NavItem to="/challenges" Icon={Users} label="Challenges" current={location.pathname === '/challenges'} />
            </nav>
          </div>
        </aside>
        <main className="flex w-full flex-col overflow-hidden py-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
