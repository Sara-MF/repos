import React, { Fragment, useState } from 'react';
import axios from 'axios';

function Home(props) {

  const [ user, setUser ] = useState('');

  function handleSearch() {
    axios.get(`https://api.github.com/users/${user}/repos`).then(response => console.log(response.data));
  }

  return (
    <Fragment>
      <h1>{ props.title }</h1>
      <input className="userInput" placeholder="Usuário" value={user} onChange={e => setUser(e.target.value)} />
      <button onClick={handleSearch}>Pesquisar</button>
    </Fragment>
  )
}

export default Home;
