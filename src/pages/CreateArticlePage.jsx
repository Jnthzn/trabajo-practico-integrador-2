import { useNavigate } from "react-router";
import { useForm } from "../hooks/useForm";

export const CreateArticlePage = () => {
  const navigate = useNavigate();
  const { formState, handleInputChange } = useForm({
    title: "",
    content: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/articles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        navigate("/");
      } else {
        alert("Error al crear la publicación");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-slate-800 mb-6">
        Crear Nuevo Artículo
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md border border-slate-200"
      >
        <div className="mb-4">
          <label className="block text-slate-700 font-semibold mb-2">
            Título
          </label>
          <input
            type="text"
            name="title"
            value={formState.title}
            onChange={handleInputChange}
            required
            className="w-full p-2 border border-slate-300 rounded focus:outline-none focus:border-slate-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-slate-700 font-semibold mb-2">
            Contenido
          </label>
          <textarea
            name="content"
            rows="6"
            value={formState.content}
            onChange={handleInputChange}
            required
            className="w-full p-2 border border-slate-300 rounded focus:outline-none focus:border-slate-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-slate-900 text-white px-6 py-2 rounded font-semibold hover:bg-slate-800 transition"
        >
          Publicar
        </button>
      </form>
    </div>
  );
};
