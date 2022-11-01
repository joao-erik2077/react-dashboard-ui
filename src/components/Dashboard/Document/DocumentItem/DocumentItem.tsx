import React from 'react';
import './DocumentItem.scss';

function DocumentItem(props: any) {
    return (
        <div className={`DocumentItem ${props.color}`}>
            <div className="DocumentItemIcon">
                {props.icon}
            </div>
            <div className='DocumentItemName'>
                <h1>{props.name}</h1>
            </div>
        </div>
    );
}

export default DocumentItem;
