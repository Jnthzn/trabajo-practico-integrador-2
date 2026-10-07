import { Link } from "react-router";

export const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white p-4 shadow-md flex justify-between items-center">
      <Link to="/" className="text-xl font-bold hover:text-slate-300">
        Blog App
      </Link>
      <div>
        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition">
          Cerrar Sesión
        </button>
      </div>
    </nav>
  );
};
