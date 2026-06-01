import TechStak from "../components/TechStak";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

function Home() {

  const navigate = useNavigate()

  return (
    <>
    <section className="min-h-[90vh] flex items-center bg-zinc-950 text-white p-2">
      <div className="max-w-6xl mx-auto px-6">
           <Navbar/>
        <div className="space-y-6">

          <h1 className="text-5xl md:text-7xl font-black tracking-tight">
            Olá, eu sou{" "}
            <span className="bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Gustavo Camargo
            </span>
          </h1>

          <span className="inline-block px-4 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
            Desenvolvedor Back-end
          </span>

          <p className="text-xl text-zinc-400 max-w-2xl">
            Transformando ideias em aplicações eficientes, escaláveis e bem
            estruturadas.
          </p>

          <div className="space-y-4 max-w-3xl text-zinc-300 leading-relaxed">
            <p>
              Busco sempre me aprimorar, aprendendo novas tecnologias e
              desenvolvendo projetos que geram impacto real.
            </p>

            <p>
              Minha paixão por programação começou cedo. Desde então, venho
              estudando diferentes linguagens, frameworks e conceitos de
              desenvolvimento de software. Atualmente curso Desenvolvimento de
              Sistemas no SENAI, onde continuo evoluindo minhas habilidades
              técnicas e práticas.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">

            <button onClick={() => navigate('/projetos')} className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition-all duration-300 font-semibold">
              Ver projetos
            </button>

            <button onClick={() => navigate('/contato')} className="px-6 py-3 rounded-xl border border-zinc-700 hover:border-blue-500 hover:text-blue-400 transition-all duration-300">
              Contato
            </button>
          </div>

          <div className="pt-10">
            <h3 className="text-xl font-bold mb-4">
              Tecnologias que utilizo
            </h3>

            <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur">
              <TechStak />
            </div>

          </div>
        </div>
      </div>
    </section>
    <Footer/>
  </>
  );
}

export default Home;