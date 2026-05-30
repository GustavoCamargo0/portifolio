import { useState } from 'react'

function Contato() {


  return (
    <>
     <h1>Contato</h1>
      <form>
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Assunto" />
        <input type="text" placeholder="Mensagem" />
        <button type='submit'>Enviar</button>
      </form>
      <a href="https://github.com/GustavoCamargo0">Github</a>
      <a href="https://www.linkedin.com/in/gustavo-camargo-2a617a386/">Linkedin</a>
      <a href="mailto:gustavo.fscamargo08@gmail.com">Email</a>
    </>
  )
}

export default Contato;