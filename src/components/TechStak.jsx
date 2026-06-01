export default function TechStak() {
  const techStak = [
    {
      category: "Linguagens",
      tech: ["JavaScript", "Python"]
    },
    {
      category: "Front-end",
      tech: ["HTML", "CSS", "React", "Fetch API", "Axios", "Tailwind"]
    },
    {
      category: "Mobile",
      tech: ["React Native", "Expo"]
    },
    {
      category: "Back-end",
      tech: ["Node.js", "Express.js"]
    },
    {
      category: "Banco de Dados",
      tech: ["Supabase", "PostgreSQL"]
    },
    {
      category: "Ferramentas",
      tech: ["Git", "Postman", "Figma", "VS Code"]
    },
    {
      category: "Testes",
      tech: ["Cypress", "Selenium"]
    },
     {
      category: "DevOps",
      tech: ["Vercel", "Netfily"]
    }
  ];

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-4xl font-black">
          Minhas <span className="text-blue-400">Stacks</span>
        </h2>

        <p className="text-zinc-400 mt-2">
          Tecnologias que utilizo para desenvolver aplicações web,
          mobile e APIs.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {techStak.map((item, index) => (
          <div
            key={index}
            className="
              p-6 rounded-2xl
              border border-zinc-800
              bg-zinc-900/50
              backdrop-blur
              hover:border-blue-500/50
              hover:-translate-y-1
              transition-all duration-300
            "
          >
            <h3 className="text-xl font-bold mb-4">
              {item.category}
            </h3>

            <div className="flex flex-wrap gap-2">
              {item.tech.map((tech, i) => (
                <span
                  key={i}
                  className="
                    px-3 py-1
                    rounded-full
                    text-sm font-medium
                    bg-blue-500/10
                    border border-blue-500/20
                    text-blue-300
                    hover:bg-blue-500/20
                    transition-colors
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}