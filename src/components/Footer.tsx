import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-card-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-muted-foreground flex items-center justify-center space-x-2">
            <span>© 2024 Portfolio Developer. Dibuat dengan</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>menggunakan React & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;