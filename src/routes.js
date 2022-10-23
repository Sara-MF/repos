// chamando as rotas
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Repositories from './pages/Repositories';
import Home from './pages/Home';

// da pra exportar assim ao inves de botar a linha no fim
export default function Routes() {

    // nome da rota, componente q chama
    // bota o exact pra chamar a home qndo tiver só a /,
    // senão ele n chama as outras rotas pq ele vê q começa com / e chama a home
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/repositories' component={Repositories} />
            </Switch>
        </BrowserRouter>
    )

}