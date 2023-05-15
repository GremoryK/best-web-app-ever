import React from 'react';
import {Breadcrumbs, Link} from "@mui/material";

const MyBreadcrumbs = () => {
    return (
        <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="white" href="#">
                Главная
            </Link>
            <Link underline="hover" color="white" href="#">
                Курсы
            </Link>
            <Link underline="hover" color="white" href="#">
                Статьи
            </Link>
            <Link underline="hover" color="white" href="#">
                Вход
            </Link>
        </Breadcrumbs>
    );
};

export default MyBreadcrumbs;