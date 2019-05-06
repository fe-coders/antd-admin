import React, { PureComponent } from 'react';
import { Layout, Row, Col, Icon } from 'antd';
import classnames from 'classnames';

import styles from './index.less';

const { Header } = Layout;

class GlobalHeader extends PureComponent<any, any> {

    render() {
        const { collapsed, toggleCollapsed } = this.props;

        return (
            <Header>
                <Row type='flex'>
                    <Col 
                        span={4} 
                        className={styles.menuIcon}
                        onClick={toggleCollapsed}
                    >
                        <Icon
                            type={
                                classnames({
                                    'menu-unfold': collapsed,
                                    'menu-fold': !collapsed
                                })
                            }
                        />
                    </Col>
                </Row>
            </Header>
        );
    }

}

export default GlobalHeader;