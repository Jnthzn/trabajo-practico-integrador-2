import { useNavigate, Link } from "react-router";
import { useForm } from "../hooks/useForm";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const { formState, handleInputChange } = useForm({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        alert("Usuario creado correctamente. Ahora podés iniciar sesión.");
        navigate("/login");
      } else {
        const errorData = await response.json().catch(() => ({}));
        alert(errorData.message || "Error al registrar usuario");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al conectar con el servidor");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md border border-slate-200"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-slate-800">
          Crear Cuenta
        </h2>

        <div className="mb-4">
          <label className="block text-slate-700 text-sm font-semibold mb-2">
            Nombre de usuario
          </label>
          <input
            type="text"
            name="username"
            value={formState.username}
            onChange={handleInputChange}
            required
            className="w-full p-2 border border-slate-300 rounded focus:outline-none focus:border-slate-500"
          />
        </div>

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
          Registrarse
        </button>

        <p className="mt-4 text-center text-sm text-slate-600">
          ¿Ya tenés cuenta?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Iniciá sesión
          </Link>
        </p>
      </form>
    </div>
  );
};
