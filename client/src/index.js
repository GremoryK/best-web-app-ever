import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";
import UserStore from "./store/UserStore";
import ArticleStore from "./store/ArticleStore";
import Home from "./pages/Home";
import Auth from "./pages/Auth";

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        user: new UserStore(),
        article: new ArticleStore()
    }}>
        <App/>
    </Context.Provider>

);
