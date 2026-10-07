import { useParams, Link, useNavigate } from "react-router";
import { useFetch } from "../hooks/useFetch";

export const ArticleDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    data: article,
    isLoading,
    error,
  } = useFetch(`http://localhost:3000/api/articles/${id}`);

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "¿Estás seguro de que querés eliminar este artículo?",
    );
    if (!confirmDelete) return;

    try {
      const response = await fetch(`http://localhost:3000/api/articles/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      if (response.ok) {
        navigate("/");
      } else {
        alert("Error al eliminar el artículo");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Error al conectar con el servidor");
    }
  };

  if (isLoading)
    return <p className="p-4 text-gray-500">Cargando artículo...</p>;
  if (error) return <p className="p-4 text-red-500">Error: {error}</p>;
  if (!article)
    return <p className="p-4 text-gray-500">Artículo no encontrado.</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <Link
        to="/"
        className="text-blue-600 hover:underline mb-4 inline-block font-semibold"
      >
        ← Volver al inicio
      </Link>
      <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          {article.title}
        </h1>
        <p className="text-slate-700 whitespace-pre-line leading-relaxed mb-6">
          {article.content}
        </p>

        <button
          onClick={handleDelete}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition cursor-pointer font-semibold"
        >
          Eliminar Artículo
        </button>
      </div>
    </div>
  );
};
