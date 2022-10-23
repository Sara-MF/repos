// listagem de repositorios
import React, { useEffect, useState } from 'react';
import * as S from '../styles/repositories'; // S de style

function Repositories() {

    const [ repositories, setRepositories ] = useState([]);

    // monitora uma variável e dispara uma função qndo o valor da variável mudar
    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName');
        repositoriesName = JSON.parse(repositoriesName);
        setRepositories(repositoriesName);
        localStorage.clear();
    }, []);

    return (
        <S.Container>
            <S.Title>Repositórios</S.Title>
            <S.List>
                { repositories.map(repository => {
                    return (
                        <S.ListItem>{ repository }</S.ListItem>
                    )
                }) }
            </S.List>
        </S.Container>
    )

}

export default Repositories;