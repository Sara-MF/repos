import React, { useState } from 'react';

function App(props) {
  return (
    // fragment (tags vazias) pra n quebrar o css ao invés de uma div
    // n estão dentro de uma tag especifica
    <>
      <h1>{ props.title }</h1>
      <input name="usuario" id="usuario" className="usuarioInput" placeholder="Usuário"/>
      <button>Pesquisar</button>
    </>
   
  );
}

export default App;
