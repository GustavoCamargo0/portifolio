import { useNavigate } from "react-router-dom";

export default function CardProjeto({ projeto }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/individualpro/${projeto.id}`)}
      className="
        group
        w-full
        overflow-hidden
        rounded-2xl
        border
        border-zinc-200
        bg-white
        shadow-md
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
        hover:border-blue-500
        text-left
      "
    >
      <div className="overflow-hidden">
        <img
          src={projeto.img}
          alt={projeto.nome}
          className="
            w-full
            h-56
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />
      </div>

      <div className="p-6 space-y-4">
        <h2
          className="
            text-2xl
            font-bold
            text-zinc-900
            group-hover:text-blue-600
            transition-colors
          "
        >
          {projeto.nome}
        </h2>

        <p className="text-zinc-600 line-clamp-3">
          {projeto.descricao}
        </p>

        <div className="flex flex-wrap gap-2">
          {projeto.techs.map((tech, i) => (
            <span
              key={i}
              className="
                px-3
                py-1
                rounded-full
                text-sm
                font-medium
                bg-blue-100
                text-blue-700
              "
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="pt-2 border-t border-zinc-100">
          <span className="text-sm font-semibold text-blue-600">
            Ver detalhes →
          </span>
        </div>
      </div>
    </button>
  );
}