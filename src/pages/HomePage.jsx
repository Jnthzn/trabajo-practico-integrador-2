import { Link } from "react-router";
import { useFetch } from "../hooks/useFetch";

export const HomePage = () => {
  const {
    data: posts,
    isLoading,
    error,
  } = useFetch("http://localhost:3000/api/articles");

  if (isLoading)
    return <p className="p-4 text-gray-500">Cargando publicaciones...</p>;
  if (error) return <p className="p-4 text-red-500">Error: {error}</p>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-slate-800">Publicaciones</h1>
      <div className="grid gap-4">
        {posts &&
          posts.map((post) => {
            const postDate = post.createdAt || post.created_at;

            return (
              <div
                key={post.id}
                className="bg-white p-6 rounded-lg shadow-md border border-slate-200"
              >
                <div className="flex justify-between items-center text-xs text-slate-500 mb-2">
                  <span>
                    Por:{" "}
                    {post.User?.username || post.user?.username || "Anónimo"}
                  </span>
                  <span>
                    {postDate ? new Date(postDate).toLocaleDateString() : ""}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-slate-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-slate-600 line-clamp-2 mb-4">
                  {post.content}
                </p>

                <Link
                  to={`/articles/${post.id}`}
                  className="text-blue-600 hover:underline font-semibold"
                >
                  Leer más →
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};
