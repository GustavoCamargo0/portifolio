import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
    
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/"
            target="_blank"
            className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href="mailto:seuemail@email.com"
            className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition"
          >
            <MdEmail size={20} />
          </a>

          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 text-sm">
            <BsFillTelephoneFill />
            <span>+55 49 98503-2524</span>
          </div>
        </div>

        <p className="text-slate-400 text-sm text-center md:text-right">
          © 2026 Gustavo Camargo. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}