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
        Component: Admin
    },
    {
        path: ACCAUNT_ROUTE,
        Component: Accaunt
    },
]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: ARTICLE_ROUTE,
        Component: Article
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: CREATEARTICLE_ROUTE,
        Component: CreateArticle
    },
    {
        path: ONEARTICLE_ROUTE + '/:id',
        Component: OneArticle
    },
]