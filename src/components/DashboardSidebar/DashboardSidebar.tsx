import React from 'react';
import './DashboardSidebar.scss';

import SidebarItemList from './SidebarItemList/SidebarItemList';

import { BsFillCaretLeftFill } from "react-icons/bs";

function DashboardSidebar(props: any) {
  return (
    <div className='DashboardSidebar'>
      <div className='SidebarNavbar'>
        <span className='SidebarNavbarTitle'>SIDEMENU</span>
        <span className='SidebarNavbarIcon'><BsFillCaretLeftFill /></span>
      </div>
      <SidebarItemList />
    </div>
  );
}

export default DashboardSidebar;
