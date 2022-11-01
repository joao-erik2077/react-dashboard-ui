import React from 'react';
import './DashboardNavbar.scss';

import { BsFillCaretRightFill } from 'react-icons/bs';

function DashboardNavbar() {
    return (
        <div className="DashboardNavbar">
            <BsFillCaretRightFill className='OpenSidemenu' onClick={openSidemenu} />
            <h1 className="NavbarTitle">NAVBAR</h1>
        </div>
    );
}

function openSidemenu() {
    const sidebar = document.querySelector('.sidebar');
    sidebar?.classList.remove('close');
    sidebar?.classList.add('open');
}

export default DashboardNavbar;
