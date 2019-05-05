import React, { PureComponent } from 'react';
import DocumentTitle from 'react-document-title';
import { Layout } from 'antd';

import SiderMenu from './components/siderMenu/';
import styles from './index.css';

const { Header, Content, Footer } = Layout;

class BasicLayout extends PureComponent {

  render() {
    return (
		<DocumentTitle title='Antd-Admin'>
			<Layout>
				<SiderMenu />
				<Layout>
					<Header></Header>
					<Content></Content>
					<Footer></Footer>
				</Layout>
			</Layout>
		</DocumentTitle>
    );
  }

}

export default BasicLayout;
