import { useNavigate } from "react-router";
import { useForm } from "../hooks/useForm";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { formState, handleInputChange } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Guardamos el estado de login en localStorage
    localStorage.setItem("isLogged", "true");
    navigate("/");
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md border border-slate-200"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-slate-800">
          Iniciar Sesión
        </h2>

        <div className="mb-4">
          <label className="block text-slate-700 text-sm font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleInputChange}
            required
            className="w-full p-2 border border-slate-300 rounded focus:outline-none focus:border-slate-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-slate-700 text-sm font-semibold mb-2">
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            value={formState.password}
            onChange={handleInputChange}
            required
            className="w-full p-2 border border-slate-300 rounded focus:outline-none focus:border-slate-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-slate-900 text-white py-2 rounded hover:bg-slate-800 transition font-semibold"
        >
          Ingresar
        </button>
      </form>
    </div>
  );
};
