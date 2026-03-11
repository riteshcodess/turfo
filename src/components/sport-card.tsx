import { LucideIcon } from 'lucide-react';

interface SportCardProps {
  icon: LucideIcon;
  name: string;
  gradient: string;
  onClick?: () => void;
}

export function SportCard({ icon: Icon, name, gradient, onClick }: SportCardProps) {
  return (
    <div
      onClick={onClick}
      className={`glass-card rounded-2xl p-6 hover-neon cursor-pointer group relative overflow-hidden ${gradient}`}
    >
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-full glass-card border border-primary/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-7 h-7 text-primary" />
        </div>
        <h3 className="font-semibold text-lg text-foreground">{name}</h3>
        <p className="text-sm text-muted-foreground mt-1">150+ venues</p>
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}
