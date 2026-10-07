import { useFetch } from "../hooks/useFetch";

export const HomePage = () => {
  const {
    data: posts,
    isLoading,
    error,
  } = useFetch("http://localhost:3000/api/articles");

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-slate-800 mb-6">
        Últimas Publicaciones
      </h1>

      {isLoading && <p className="text-gray-500">Cargando publicaciones...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      <div className="grid gap-4">
        {posts &&
          posts.map((post) => (
            <div
              key={post.id}
              className="border border-slate-200 p-4 rounded-lg shadow-sm bg-white"
            >
              <h2 className="text-xl font-semibold text-slate-900 mb-2">
                {post.title}
              </h2>
              <p className="text-slate-600">{post.content}</p>
            </div>
          ))}
      </div>
    </div>
  );
};
