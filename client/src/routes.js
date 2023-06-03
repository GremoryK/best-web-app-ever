import Admin from "./pages/Admin";
import {
    ADMIN_ROUTE,
    ARTICLE_ROUTE,
    ONEARTICLE_ROUTE,
    CREATEARTICLE_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    ACCAUNT_ROUTE,
    HOME_ROUTE
} from "./utils/consts";

import Accaunt from "./pages/Accaunt";
import CreateArticle from "./pages/CreateArticle";
import Auth from "./pages/Auth";
import Article from "./pages/Article";
import OneArticle from "./pages/OneArticle";
import Home from "./pages/Home";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        element: <Admin />
    },
    {
        path: ACCAUNT_ROUTE,
        element: <Accaunt />
    },
]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        element: <Home />
    },
    {
        path: ARTICLE_ROUTE,
        element: <Article />
    },
    {
        path: LOGIN_ROUTE,
        element: <Auth />
    },
    {
        path: REGISTRATION_ROUTE,
        element: <Auth />
    },
    {
        path: CREATEARTICLE_ROUTE,
        element: <CreateArticle />
    },
    {
        path: ONEARTICLE_ROUTE + '/:id',
        element: <OneArticle />
    },
]