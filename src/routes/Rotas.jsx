import {
    createBrowserRouter
} from 'react-router-dom'

import Home from '../pages/Home'
import Projetos from '../pages/Projetos'
import Contato from '../pages/Contato'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/projetos',
        element: <Projetos />
    },
    {
        path: '/contato',
        element: <Contato />
    }
])