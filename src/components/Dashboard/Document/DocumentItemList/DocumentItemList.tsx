import React from 'react';
import './DocumentItemList.scss';

import DocumentItem from './../DocumentItem/DocumentItem';

function DocumentItemList(props: any) {
    const data = props.data;

    return (
        <div className='DocumentItemList'>
            {getItems(data)}
        </div>
    );
}

function getItems(data: any) {
    return data.map((data: any, index: number) => <DocumentItem 
        icon={data.icon} 
        name={data.name} 
        key={index} 
    />);
}


export default DocumentItemList;
