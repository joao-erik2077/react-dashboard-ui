import React from 'react';
import './DashboardNavbar.scss';

import { BsFillCaretRightFill } from 'react-icons/bs';

function DashboardNavbar(props: any) {
    const title = props.title || 'a';
    return (
        <div className="DashboardNavbar">
            <BsFillCaretRightFill className='OpenSidemenu' onClick={openSidemenu} />
            <h1 className="NavbarTitle">{title}</h1>
        </div>
    );
}

function openSidemenu() {
    const sidebar = document.querySelector('.sidebar');
    sidebar?.classList.remove('close');
    sidebar?.classList.add('open');
}

export default DashboardNavbar;
