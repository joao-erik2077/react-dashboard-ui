import React from 'react';
import './SidebarItemList.scss';

import SidebarItem from '../SidebarItem/SidebarItem';

import {
    BiFolder,
    BiUser,
    BiGitRepoForked,
    BiChat,
    BiDollarCircle,
    BiEnvelope,
    BiTransfer,
    BiCog
} from 'react-icons/bi';

function SidebarItemList() {
    return (
        <div className='SidebarItemList'>

            <div className="SidebarListSection">
                <h1 className='SidebarListTitle'>Management</h1>
                {getItems(managementItemsData)}
                <div className='Divider'></div>

                <h1 className='SidebarListTitle'>Connection</h1>
                {getItems(connectionItemsData)}
                <div className='Divider'></div>

                <h1 className='SidebarListTitle'>Customer</h1>
                {getItems(customerItemsData)}
            </div>

        </div>
    );
}

function getItems(data: any[]) {
    return data.map((value, index) => <SidebarItem name={value.name} icon={value.icon} key={index} />);
}

const managementItemsData = [
    {
        name: 'Document',
        icon: <BiFolder />,
    },
    {
        name: 'Contact',
        icon: <BiUser />,
    },
    {
        name: 'Workflow',
        icon: <BiGitRepoForked />,
    }
];

const connectionItemsData = [
    {
        name: 'Chat Integration',
        icon: <BiChat />,
    },
    {
        name: 'Marketing Automation',
        icon: <BiDollarCircle />,
    },
    {
        name: 'Email Integration',
        icon: <BiEnvelope />,
    },
];

const customerItemsData = [
    {
        name: 'Transaction',
        icon: <BiTransfer />,
    },
    {
        name: 'Maintenance',
        icon: <BiCog />,
    },
];

export default SidebarItemList;
