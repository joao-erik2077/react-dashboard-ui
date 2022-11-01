import React from 'react';
import './App.scss';

import Dashboard from './components/Dashboard/Dashboard';
import DashboardSidebar from './components/DashboardSidebar/DashboardSidebar';
import DashboardNavbar from './components/DashboardNavbar/DashboardNavbar';

import Document from './components/Dashboard/Document/Document';
import Contact from './components/Dashboard/Contact/Contact';
import Workflow from './components/Dashboard/Workflow/Workflow';
import ChatIntegration from './components/Dashboard/ChatIntegration/ChatIntegration';
import MarketingAutomation from './components/Dashboard/MarketingAutomation/MarketingAutomation';
import EmailIntegration from './components/Dashboard/EmailIntegration/EmailIntegration';
import Transaction from './components/Dashboard/Transaction/Transaction';
import Maintenance from './components/Dashboard/Maintenance/Maintenance';

class App extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {dashboard: dashboards['Document'], currentDashboard: 'Document'};
    }

    render() {
        return (
            <div className="App row">
                <div className="col-2 sidebar">
                    <DashboardSidebar setDashboard={(key: string) => this.setState({dashboard: dashboards[key], currentDashboard: key})} />
                </div>
                <div className="col">
                    <DashboardNavbar title={this.state.currentDashboard} />
                    <Dashboard dashboard={this.state.dashboard} />
                </div>
            </div>
        );
    }
}

const dashboards: any = {
    'Document': <Document />,
    'Contact': <Contact />,
    'Workflow': <Workflow />,
    'Chat Integration': <ChatIntegration />,
    'Marketing Automation': <MarketingAutomation />,
    'Email Integration': <EmailIntegration />,
    'Transaction': <Transaction />,
    'Maintenance': <Maintenance />,
};

export default App;
