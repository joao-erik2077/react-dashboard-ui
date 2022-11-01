import React from 'react';
import './SidebarItem.scss';

class SidebarItem extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className='SidebarItem' onClick={() => this.props.setDashboard(this.props.name)}>
                <div className="Icon">
                    {this.props.icon}
                </div>
                <p>
                    {this.props.name}
                </p>
            </div>
        );
    }
}

export default SidebarItem;
