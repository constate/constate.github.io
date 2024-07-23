import React, { useEffect } from 'react';

import { HomePage } from 'pages';
import { Layout } from 'components/_common/Layout/Layout';
import {
    Routes,
    Route,
    RouterProvider,
    createBrowserRouter,
    redirect,
    useNavigate,
} from 'react-router-dom';

const Router: React.FC = React.memo(() => {
    console.log('Router render');

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: '',
                    element: <HomePage />,
                },
            ],
            errorElement: <HomePage />,
        },
    ]);
    return <RouterProvider router={router} />;
});

export default Router;
