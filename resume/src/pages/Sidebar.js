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
                <CDBSidebarHeader prefix={<i className='fa fa-bars fa-large'></i>}>
                    <a href='/'>Menu</a>
                </CDBSidebarHeader>

                <CDBSidebarContent className='csbsidebar-content'>
                    <CDBSidebarMenu>
                        <NavLink to="/">
                            <CDBSidebarMenuItem icon='user'>About me</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink to="/">
                            <CDBSidebarMenuItem icon='book'>Portfolio</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink to="/">
                            <CDBSidebarMenuItem icon='envelope'>Contact</CDBSidebarMenuItem>
                        </NavLink>
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