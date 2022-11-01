import React from 'react';
import './Dashboard.scss';

function Dashboard(props: any) {
    return (
        <div className="Dashboard">
            {props.dashboard}
        </div>
    );
}

export default Dashboard;
