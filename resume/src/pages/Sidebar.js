import React from 'react';
import '../stylesheets/sidebar.css'
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact'
import {NavLink} from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='wrapper'>
        <div className='sidebar-main'>
            <CDBSidebar className='cdbsidebar'>
                <CDBSidebarHeader className='csbsider-header' prefix={<i className='fa fa-bars fa-large'></i>}>
                    <p className='sidebar-menu'>Menu</p>
                </CDBSidebarHeader>

                <CDBSidebarContent className='csbsidebar-content'>
                    <CDBSidebarMenu>
                        <NavLink to="/me">
                            <CDBSidebarMenuItem icon='user'>About me</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink to="/portfolio">
                            <CDBSidebarMenuItem icon='book'>Portfolio</CDBSidebarMenuItem>
                        </NavLink>
                        {/* <NavLink to="/contact">
                            <CDBSidebarMenuItem icon='envelope'>Contact</CDBSidebarMenuItem>
                        </NavLink> */}
                    </CDBSidebarMenu>
                </CDBSidebarContent>

                {/* <CDBSidebarFooter className='cdbsidebar-footer'>
                    <div className='sidebar-btn-wrapper'>
                        Sidebar Footer
                    </div>
                </CDBSidebarFooter> */}
            </CDBSidebar>
        </div>
        </div>
    )
}

export default Sidebar;