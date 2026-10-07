import { useParams, Link } from "react-router";
import { useFetch } from "../hooks/useFetch";

export const ArticleDetailPage = () => {
  const { id } = useParams();
  const {
    data: article,
    isLoading,
    error,
  } = useFetch(`http://localhost:3000/api/articles/${id}`);

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
        <p className="text-slate-700 whitespace-pre-line leading-relaxed">
          {article.content}
        </p>
      </div>
    </div>
  );
};
