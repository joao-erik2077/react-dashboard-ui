import React from 'react';
import './App.scss';

import Dashboard from './components/Dashboard';
import DashboardSidebar from './components/DashboardSidebar';
import DashboardNavbar from './components/DashboardNavbar';

function App() {
  return (
    <div className="App row">
      <div className="col-3">
        <DashboardSidebar />
      </div>
      <div className="col-9">
        <DashboardNavbar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
