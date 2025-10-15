import { Church } from "lucide-react";
import { Link } from "react-router-dom";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <header className="bg-secondary text-secondary-foreground py-4 px-6 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 transition-smooth hover:opacity-80">
          <Church className="h-10 w-10 text-primary" />
          <div>
            <h1 className="text-2xl font-bold">{title}</h1>
            {subtitle && <p className="text-sm opacity-90">{subtitle}</p>}
          </div>
        </Link>
      </div>
    </header>
  );
};
