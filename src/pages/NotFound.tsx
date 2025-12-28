import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F5F1E8] relative overflow-hidden">
      <div className="text-center relative z-10">
        <h1 className="mb-4 text-6xl font-serif font-bold text-[#2A2A2A]">404</h1>
        <p className="mb-4 text-xl text-gray-600">Oops! Page non trouvée</p>
        <p className="mb-8 text-gray-500">La page que vous recherchez n'existe pas.</p>
        <Button variant="gold" size="lg" asChild>
          <Link to="/">
            <Home className="w-5 h-5" />
            Retour à l'accueil
          </Link>
        </Button>
      </div>
    </div>
  );
}