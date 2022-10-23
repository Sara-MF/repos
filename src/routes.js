// chamando as rotas
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Repositories from './Repositories';

// da pra exportar assim ao inves de botar a linha no fim
export default function Routes() {

    // nome da rota, componente q chama
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/repositories' component={Repositories} />
            </Switch>
        </BrowserRouter>
    )

}