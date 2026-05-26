import CardProjeto from "./CardProjeto"

export default function ListaProjetos(){

    const projetos = [
      {
    id: 1,
    name: "Sistema de Clientes",
    description: "CRUD completo com Node e React",
    image: "/img1.png",
    techs: ["React", "Node", "PostgreSQL"]
  },
]

  return (
    <>
     {projetos.map((projeto) => (
      <CardProjeto key={projeto.id} projeto={projeto}/>
     ))}
    </>
  )
}
