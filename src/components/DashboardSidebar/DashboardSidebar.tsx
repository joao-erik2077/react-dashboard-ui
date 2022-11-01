import React from 'react';
import './DashboardSidebar.scss';

import SidebarItemList from './SidebarItemList/SidebarItemList';

import { BsFillCaretLeftFill } from 'react-icons/bs';

function DashboardSidebar() {
    return (
        <div className='DashboardSidebar'>
            <div className="SidebarSection">
                <div className='SidebarNavbar'>
                    <span className='SidebarNavbarTitle'>SIDEMENU</span>
                    <span className='SidebarNavbarIcon' onClick={dismiss}><BsFillCaretLeftFill /></span>
                </div>
                <div className="Divider"></div>
            </div>
            <SidebarItemList />
        </div>
    );
}

function dismiss() {
    const sidebar = document.querySelector('.sidebar');
    sidebar?.classList.remove('open');
    sidebar?.classList.add('close');
}

export default DashboardSidebar;
