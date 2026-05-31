import { useParams } from "react-router-dom";
import projetos from "../data/projetos";

export default function IndividualPro() {
  const { id } = useParams();

  const projeto = projetos.find((p) => p.id === Number(id));

  if (!projeto) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white">
        <h2 className="text-3xl font-bold">
          Projeto não encontrado
        </h2>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-zinc-950 text-white py-16">
      <div className="max-w-6xl mx-auto px-6 space-y-10">

        <img
          src={projeto.img}
          alt={projeto.nome}
          className="
    w-96
    h-auto
    mx-auto
    rounded-3xl
    border
    border-zinc-800
    shadow-2xl
  "
        />

        <div className="space-y-4">
          <h1
            className="
              text-5xl
              md:text-6xl
              font-black
              bg-gradient-to-r
              from-blue-400
              to-cyan-400
              bg-clip-text
              text-transparent
            "
          >
            {projeto.nome}
          </h1>

          <p className="text-zinc-400 text-lg">
            Projeto desenvolvido para praticar e aprofundar conhecimentos
            em desenvolvimento de software.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {projeto.techs.map((tech) => (
            <span
              key={tech}
              className="
                px-4
                py-2
                rounded-full
                border
                border-blue-500/20
                bg-blue-500/10
                text-blue-300
                font-medium
              "
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="space-y-8">

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">
              Descrição do Projeto
            </h2>

            <p className="text-zinc-300 leading-8">
              {projeto.descDetalhada}
            </p>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-green-400 mb-4">
              Objetivo
            </h2>

            <p className="text-zinc-300 leading-8">
              {projeto.objetivo}
            </p>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">
              Funcionalidades
            </h2>

            <p className="text-zinc-300 leading-8">
              {projeto.funcionalidade}
            </p>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-orange-400 mb-4">
              Desafios Enfrentados
            </h2>

            <p className="text-zinc-300 leading-8">
              {projeto.desafio}
            </p>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              Aprendizados
            </h2>

            <p className="text-zinc-300 leading-8">
              {projeto.aprendizado}
            </p>
          </div>

        </div>

        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href={projeto.github}
            target="_blank"
            rel="noreferrer"
            className="
              px-6
              py-3
              rounded-xl
              bg-blue-600
              hover:bg-blue-700
              transition
              font-semibold
            "
          >
            Ver código no GitHub
          </a>

          {projeto.deploy && (
            <a
              href={projeto.deploy}
              target="_blank"
              rel="noreferrer"
              className="
                px-6
                py-3
                rounded-xl
                border
                border-zinc-700
                hover:border-blue-500
                hover:text-blue-400
                transition
                font-semibold
              "
            >
              Acessar Deploy
            </a>
          )}
        </div>

      </div>
    </section>
  );
}