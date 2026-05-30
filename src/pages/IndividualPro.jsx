import { useParams } from "react-router-dom";
import projetos from "../data/projetos";

export default function IndividualPro() {
  const { id } = useParams();

  const projeto = projetos.find((p) => p.id === Number(id));

  if (!projeto) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold">
          Projeto não encontrado
        </h2>
      </div>
    );
  }

  return (
    <section className="min-h-screen flex items-center bg-zinc-950 text-white p-2">
      <div className="space-y-8 max-w-7xl mx-auto px-6">
        <img
          src={projeto.img}
          alt={projeto.nome}
          className="w-full rounded-2xl shadow-lg"
        />

        <h1 className="text-5xl font-black">
          {projeto.nome}
        </h1>

        <p className="text-xl text-zinc-600">
          {projeto.descrição}
        </p>

        <div className="flex flex-wrap gap-2">
          {projeto.techs.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-blue-100 text-blue-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={projeto.github}
          target="_blank"
          rel="noreferrer"
          className="
            inline-block
            px-6
            py-3
            rounded-xl
            bg-zinc-900
            text-white
            hover:bg-zinc-800
            transition
          "
        >
          Ver no GitHub
        </a>
      </div>
    </section>
  );
}