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
      tech: ["Git", "Postman"]
    },
    {
      category: "Testes",
      tech: ["Cypress"]
    }
  ];
  return (
    <>
      <h1 className="text-4xl">Tech Stak</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {techStak.map((item, index) => (
          <div key={index} className="border rounded-xl p-5 shadow-md">
            <h2 className="text-xl font-bold">{item.category}</h2>
            <ul className={`${item.tech.length > 3 ? "grid grid-cols-2" : "grid grid-cols-1"}` }>
              {item.tech.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}