import { Link } from "react-router";

export const Navbar = () => {
  const isLogged = localStorage.getItem("isLogged") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isLogged");
    window.location.href = "/login";
  };

  return (
    <nav className="bg-slate-900 text-white p-4 shadow-md flex justify-between items-center">
      <Link to="/" className="text-xl font-bold hover:text-slate-300">
        Blog App
      </Link>

      {isLogged && (
        <div className="flex gap-4 items-center">
          <Link
            to="/create-article"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition font-semibold"
          >
            Crear Artículo
          </Link>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition cursor-pointer font-semibold"
          >
            Cerrar Sesión
          </button>
        </div>
      )}
    </nav>
  );
};
