import { Link } from "react-router";

export const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem("isLogged");
    window.location.href = "/login";
  };

  return (
    <nav className="bg-slate-900 text-white p-4 shadow-md flex justify-between items-center">
      <Link to="/" className="text-xl font-bold hover:text-slate-300">
        Blog App
      </Link>
      <div>
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition cursor-pointer"
        >
          Cerrar Sesión
        </button>
      </div>
    </nav>
  );
};
