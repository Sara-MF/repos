import React, { useState } from 'react';
import axios from 'axios';
import * as S from '../styles/home'; // S de style
import { useNavigate } from 'react-router-dom';

function Home() {

  const navigate = useNavigate(); // armazenando historico de pesquisa para mostrar na prox rota
  const [ user, setUser ] = useState('');
  const [ error, setError ] = useState(false);

  function handleSearch() {
    axios.get(`https://api.github.com/users/${user}/repos`).then(response => {
      const repositories = response.data;
      const repositoriesName = [];

      repositories.map((repository) => {
        repositoriesName.push(repository.name);
      });

      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      setError(false); // garantia de q foi encontrado um repositório a ser buscado
      navigate('/repositories'); // rota
    }).catch(err => {
      setError(true);
    });
  }

  return (
    <S.HomeContainer>
      <S.Title>Repos</S.Title>

      <S.Content>
        <S.Input className="userInput" placeholder="Usuário" value={user} onChange={e => setUser(e.target.value)} />
        <S.Button onClick={handleSearch}>Pesquisar</S.Button>
      </S.Content>
      
      { error ? <S.ErrorMsg>Ocorreu um erro. Tente novamente</S.ErrorMsg> : '' }
      
    </S.HomeContainer>
  )
}

export default Home;
