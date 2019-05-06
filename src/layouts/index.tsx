import React, { PureComponent } from 'react';
import DocumentTitle from 'react-document-title';
import { Layout } from 'antd';

import SiderMenu from './components/siderMenu/';
import GlobalHeader from './components/globalHeader/';

import { MenuData } from '@/config/menu.ts';
import styles from './index.less';

const { Content, Footer } = Layout;

interface BasicLayoutProps {
	children: React.ReactNode
}

interface BasicLayoutState {
	collapsed: Boolean
}

class BasicLayout extends PureComponent<BasicLayoutProps, BasicLayoutState> {

	state = {
		collapsed: false
	}

	toggleCollapsed = () => {
		this.setState(({ collapsed }: BasicLayoutState) => ({
			collapsed: !collapsed
		}))
	}

	render() {
		const { collapsed }: BasicLayoutState = this.state;

		return (
			<DocumentTitle title='ant-design'>
				<Layout className={styles.mainLayout}>
					<SiderMenu collapsed={collapsed} />
					<Layout>
						<GlobalHeader
							collapsed={collapsed}
							toggleCollapsed={this.toggleCollapsed}
						/>
						<Content>{this.props.children}</Content>
						<Footer></Footer>
					</Layout>
				</Layout>
			</DocumentTitle>
		);
	}

}

export default BasicLayout;
