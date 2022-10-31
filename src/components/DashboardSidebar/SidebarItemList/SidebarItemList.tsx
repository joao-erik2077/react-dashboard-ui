import React from 'react';
import './SidebarItemList.scss';

import SidebarItem from '../SidebarItem/SidebarItem';

import { BiBarChartAlt } from 'react-icons/bi';
import { BiBookBookmark } from 'react-icons/bi';
import { BiCalendarEvent } from 'react-icons/bi';
import { BiCart } from 'react-icons/bi';

function SidebarItemList() {
    return (
        <div className='SidebarItemList'>
            {data.map((value: any, index) => <SidebarItem name={value.name} icon={value.icon} key={index} />)}
        </div>
    );
}

const data = [
    {
        name: 'Ações',
        icon: <BiBarChartAlt />,
    },
    {
        name: 'Compras',
        icon: <BiCart />,
    },
    {
        name: 'To-do',
        icon: <BiBookBookmark />,
    },
    {
        name: 'Dias',
        icon: <BiCalendarEvent />,
    }
];


export default SidebarItemList;
