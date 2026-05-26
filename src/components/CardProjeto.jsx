export default function CardProjeto({ projeto }) {
    return (
        <>
            <img src={projeto.img} />

            <h1>{projeto.nome}</h1>

            <p>{projeto.descrição}</p>

            {projeto.techs.map((tech, i) => (
                <span key={i}>{tech}</span>
            ))}
        </>
    )
}

