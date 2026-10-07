import { useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { useForm } from "../hooks/useForm";
import { useFetch } from "../hooks/useFetch";

export const EditArticlePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    data: article,
    isLoading,
    error,
  } = useFetch(`http://localhost:3000/api/articles/${id}`);
  const { formState, handleInputChange, setFormState } = useForm({
    title: "",
    content: "",
  });

  useEffect(() => {
    if (article) {
      setFormState({
        title: article.title || "",
        content: article.content || "",
      });
    }
  }, [article, setFormState]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/api/articles/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        navigate(`/articles/${id}`);
      } else {
        alert("Error al actualizar el artículo");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Error al conectar con el servidor");
    }
  };

  if (isLoading)
    return <p className="p-4 text-gray-500">Cargando artículo...</p>;
  if (error) return <p className="p-4 text-red-500">Error: {error}</p>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-slate-800 mb-6">
        Editar Artículo
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
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold transition"
        >
          Guardar Cambios
        </button>
      </form>
    </div>
  );
};
