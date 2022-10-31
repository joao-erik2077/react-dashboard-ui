import React from 'react';
import './SidebarItemList.scss';

import SidebarItem from '../SidebarItem/SidebarItem';

import { BsFillBarChartFill } from 'react-icons/bs';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { BsFillCalendarEventFill } from 'react-icons/bs';

function SidebarItemList(props: any) {
  return (
    <div className='SidebarItemList'>
      {data.map((value: any) => <SidebarItem name={value.name} icon={value.icon} />)}
    </div>
  );
}

const data = [
  {
    name: 'Name 1',
    icon: <BsFillBarChartFill />,
  },
  {
    name: 'Name 2',
  },
  {
    name: 'Name 3',
    icon: <BsFillBookmarkFill />,
  },
  {
    name: 'Name 4',
    icon: <BsFillCalendarEventFill />,
  }
];


export default SidebarItemList;
