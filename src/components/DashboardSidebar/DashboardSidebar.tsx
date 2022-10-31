import React from 'react';
import './DashboardSidebar.scss';

import SidebarItemList from './SidebarItemList/SidebarItemList';

import { BsFillCaretLeftFill } from 'react-icons/bs';

function DashboardSidebar() {
    return (
        <div className='DashboardSidebar'>
            <div className='SidebarNavbar'>
                <span className='SidebarNavbarTitle'>SIDEMENU</span>
                <span className='SidebarNavbarIcon' onClick={dismiss}><BsFillCaretLeftFill /></span>
            </div>
            <SidebarItemList />
        </div>
    );
}

function dismiss() {
    const sidebar = document.querySelector('.sidebar');
    sidebar?.classList.add('close');
}

export default DashboardSidebar;
