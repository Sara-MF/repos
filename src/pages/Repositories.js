// listagem de repositorios
import React from 'react';
import * as S from '../styles/repositories'; // S de style

function Repositories() {

    return (
        <S.Container>
            <S.Title>Repositórios</S.Title>
            <S.List>
                <S.ListItem>Repositório: Nome</S.ListItem>
                <S.ListItem>Repositório: Nome</S.ListItem>
                <S.ListItem>Repositório: Nome</S.ListItem>
                <S.ListItem>Repositório: Nome</S.ListItem>
                <S.ListItem>Repositório: Nome</S.ListItem>
                <S.ListItem>Repositório: Nome</S.ListItem>
            </S.List>
        </S.Container>
    )

}

export default Repositories;