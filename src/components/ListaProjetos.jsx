import CardProjeto from "./CardProjeto";
import projetos from "../data/projetos";

export default function ListaProjetos() {
  return (
    <section
      id="projetos"
      className="bg-zinc-950 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-blue-400 font-semibold tracking-wider">
            PORTFÓLIO
          </span>

          <h2 className="text-4xl md:text-5xl font-black mt-2">
            Meus Projetos
          </h2>

          <p className="mt-4 text-zinc-400 max-w-2xl">
            Alguns dos projetos que desenvolvi durante meus estudos e
            experiências práticas com desenvolvimento web.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {projetos.map((projeto) => (
            <CardProjeto
              key={projeto.id}
              projeto={projeto}
            />
          ))}
        </div>
      </div>
    </section>
  );
}