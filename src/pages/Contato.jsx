import { useState } from "react";
import Voltar from "../components/Voltar";
import emailjs from "@emailjs/browser";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contato() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  const enviarEmail = (e) => {
    e.preventDefault();

    emailjs
      .send("service_drstq7z", "template_3dcfaga", form, "XqNLci1CnN3Rl7M98")
      .then(() => {
        alert("Mensagem enviada!");
        setForm({
          name: "",
          email: "",
          title: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <section className="min-h-screen bg-zinc-950 text-white py-2">
        <div className="max-w-6xl mx-auto space-y-6 px-6">
          <Navbar />
          <div className="mb-12 text-center">
            <h1
              className="
              text-5xl
              md:text-6xl
              font-black
              bg-linear-to-r
              from-blue-400
              to-cyan-400
              bg-clip-text
              text-transparent
            "
            >
              Contato
            </h1>

            <p className="text-zinc-400 mt-4 text-lg">
              Tem alguma proposta, dúvida ou projeto? Entre em contato.
            </p>
          </div>

          <div
            className="
            bg-zinc-900/50
            border
            border-zinc-800
            rounded-3xl
            p-8
            shadow-2xl
          "
          >
            <form className="space-y-6" onSubmit={enviarEmail}>
              <input
                type="text"
                placeholder="Nome"
                value={form.name}
                className="
                w-full
                bg-zinc-900
                border
                border-zinc-800
                rounded-xl
                px-4
                py-3
                outline-none
                focus:border-blue-500
                transition
              "
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />

              <input
                type="email"
                placeholder="Email"
                value={form.email}
                className="
                w-full
                bg-zinc-900
                border
                border-zinc-800
                rounded-xl
                px-4
                py-3
                outline-none
                focus:border-blue-500
                transition
              "
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />

              <input
                type="text"
                placeholder="Assunto"
                value={form.title}
                className="
                w-full
                bg-zinc-900
                border
                border-zinc-800
                rounded-xl
                px-4
                py-3
                outline-none
                focus:border-blue-500
                transition
              "
                onChange={(e) => setForm({ ...form, title: e.target.value })}
              />

              <textarea
                placeholder="Mensagem"
                value={form.message}
                rows="5"
                className="
                w-full
                bg-zinc-900
                border
                border-zinc-800
                rounded-xl
                px-4
                py-3
                outline-none
                resize-none
                focus:border-blue-500
                transition
              "
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />

              <button
                type="submit"
                className="
                w-full
                py-3
                rounded-xl
                bg-blue-600
                hover:bg-blue-700
                transition
                font-semibold
                cursor-pointer
              "
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contato;
