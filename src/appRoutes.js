// chamando as rotas
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Repositories from './pages/Repositories';
import Home from './pages/Home';

// da pra exportar assim ao inves de botar a linha no fim
export default function appRoutes() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='repositories' element={<Repositories />} />
            </Routes>
        </BrowserRouter>
    )

}