import React from 'react';
import { Outlet } from 'react-router';
import Encabezado from './Encabezado';
import Pie from './Pie';
import Principal from './Principal';


function Layout() {
    return (
        <>
            <Encabezado></Encabezado>
            <Principal>
                <Outlet></Outlet>
            </Principal>
            <Pie></Pie>
        </>
    );
}

export default Layout;