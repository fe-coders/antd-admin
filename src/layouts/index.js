import React, { Component } from 'react'
import withRouter from 'umi/withRouter';
import { LocaleProvider } from 'antd';

@withRouter()
class Layout extends Component {

    render() {
        return (
            <LocaleProvider>
                
            </LocaleProvider>
        )
    }

}

export default Layout;
