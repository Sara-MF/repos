import React, { useState } from 'react';
import axios from 'axios';
import * as S from '../styles/home'; // S de style
import { useNavigate } from 'react-router-dom';

function Home() {

  const navigate = useNavigate(); // armazenando historico de pesquisa para mostrar na prox rota
  const [ user, setUser ] = useState('');

  function handleSearch() {
    axios.get(`https://api.github.com/users/${user}/repos`).then(response => {
      const repositories = response.data;
      const repositoriesName = [];

      repositories.map((repository) => {
        repositoriesName.push(repository.name);
      });

      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      navigate('/repositories'); // rota
    });
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
