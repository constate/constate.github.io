import React, { useEffect } from 'react';

import { HomePage } from 'pages';
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
            element: <HomePage />,
            // children: [
            //     {
            //         path: '',
            //         element: <HomePage />,
            //     },
            // ],
            errorElement: <HomePage />,
        },
    ]);
    return <RouterProvider router={router} />;
});

export default Router;
