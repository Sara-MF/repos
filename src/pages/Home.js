import React, { useState } from 'react';
import axios from 'axios';
import * as S from '../styles/home'; // S de style

function Home() {

  const [ user, setUser ] = useState('');

  function handleSearch() {
    axios.get(`https://api.github.com/users/${user}/repos`).then(response => console.log(response.data));
  }

  return (
    <S.Container>
      <S.Title>Repos</S.Title>
      <S.Input className="userInput" placeholder="Usuário" value={user} onChange={e => setUser(e.target.value)} />
      <S.Button onClick={handleSearch}>Pesquisar</S.Button>
    </S.Container>
  )
}

export default Home;
