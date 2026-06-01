import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-full bg-slate-900 text-white shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold tracking-wide text-cyan-400">
          Gustavo
        </h1>

        <ul className="flex items-center gap-8">
          <li>
            <Link
              to="/"
              className="transition-colors duration-200 hover:text-cyan-400"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/projetos"
              className="transition-colors duration-200 hover:text-cyan-400"
            >
              Projetos
            </Link>
          </li>

          <li>
            <Link
              to="/contato"
              className="transition-colors duration-200 hover:text-cyan-400"
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}