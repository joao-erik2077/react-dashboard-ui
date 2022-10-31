import React from 'react';
import './SidebarItem.scss';

function SidebarItem(props: any) {
  if (props.icon) {
    return (
      <div className='SidebarItem'>
        <div className="Icon">
          {props.icon}
        </div>
        <p>
          {props.name}
        </p>
      </div>
    );
  } else {
    return (
      <div className='SidebarItem'>
        {props.name}
      </div>
    );
  }

}

export default SidebarItem;
