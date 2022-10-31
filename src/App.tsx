import React from 'react';
import './App.scss';

import Dashboard from './components/Dashboard/Dashboard';
import DashboardSidebar from './components/DashboardSidebar/DashboardSidebar';
import DashboardNavbar from './components/DashboardNavbar/DashboardNavbar';

function App() {
    return (
        <div className="App row">
            <div className="col-3">
                <DashboardSidebar />
            </div>
            <div className="col">
                <DashboardNavbar />
                <Dashboard />
            </div>
        </div>
    );
}

export default App;
