import React, { Fragment } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'dva/router';

import { MenuData } from '@/config/menu';

const { Sider } = Layout;
const { SubMenu } = Menu;

const SiderMenu: any = ({ collapsed }) => {
    
    const renderMenuItem = arr => {
        if(arr.length){
            return arr.map(child => {
                if(child.children && child.children.length){
                    return (
                        <SubMenu 
                            key={child.title} 
                            title={<Fragment><Icon type={child.icon} /><span>{child.title}</span></Fragment>}
                        >
                            {renderMenuItem(child.children)}
                        </SubMenu>
                    )
                }else{
                    return (
                        <Menu.Item key={child.title}>
                            <Link to={child.path}><Icon type={child.icon} /><span>{child.title}</span></Link>
                        </Menu.Item>
                    );
                }
            })
        }
    }
    
    return (
        <Sider 
            style={{paddingTop: '64px'}} 
            collapsed={collapsed}
            collapsible={true}
        >
            <Menu
                theme='dark'
                mode='inline'
                inlineCollapsed={collapsed}
            >
                {renderMenuItem(MenuData)}
            </Menu>
        </Sider>
    );
}

export default SiderMenu;
