import { Link, useNavigate } from "react-router";

export const Navbar = () => {
  const navigate = useNavigate();
  const isLogged = localStorage.getItem("isLogged") === "true";

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:3000/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
    } catch (error) {
      console.error("Error al cerrar sesión en servidor:", error);
    } finally {
      localStorage.removeItem("isLogged");
      localStorage.removeItem("username");
      navigate("/login");
    }
  };

  if (!isLogged) return null;

  return (
    <nav className="bg-slate-900 text-white p-4 shadow-md mb-6">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-wide">
          Blog App
        </Link>
        <div className="flex items-center gap-6 font-medium text-sm">
          <Link to="/" className="hover:text-slate-300 transition">
            Inicio
          </Link>
          <Link
            to="/create-article"
            className="hover:text-slate-300 transition"
          >
            Crear Artículo
          </Link>
          <Link to="/profile" className="hover:text-slate-300 transition">
            Mi Perfil
          </Link>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 px-3 py-1.5 rounded transition cursor-pointer"
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
    </nav>
  );
};
