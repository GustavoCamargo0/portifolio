import { useState } from 'react'
import TechStak from '../components/TechStak';

function Home() {


  return (
    <>
      <div className='grid gap-5'>
        <h1 className='text-5xl font-black'>Gustavo Camargo</h1>
        <h2 className='text-3xl'>Desenvolvedor back-end</h2>
        <p>Busco sempre me aprimorar, apredendo novas Stacks e elaborando projetos que fazem a diferença</p>
        <p>Sempre fui apaixonado por programação e desenvolvimento, então sempre estudei e fui apredendo linguagens e frameworks novas para usar, quando surgiu a oportunidade de estudar Desenvolvimento de Sistemas no SENAI. onde pude evoluir muito mais e é onde estou atualmente fazendo esse curso técnico</p>
        <TechStak />
      </div>
    </>
  )
}

export default Home;
