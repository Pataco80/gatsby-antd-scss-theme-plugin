/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Layout, Menu, Icon } from 'antd';
import Header from "./header"
//import "./layout.css"
import '../sass/layout.scss'

const {
  Content, Footer, Sider,
} = Layout;

const AppLayout = ({ children, page }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Layout style={{ height: "100vh" }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => { console.log(broken); }}
          onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[page]}>
            <Menu.Item key="home">
              <Link to="/">
                <Icon type="home" />
                <span className="nav-text">Home</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="about">
              <Link to="/about/">
                <Icon type="user" />
                <span className="nav-text">About</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} siteTitle={data.site.siteMetadata.title} />
          <Content style={{ margin: '24px 16px 0', padding: 24, background: '#fff', minHeight: 'auto' }}>
            {children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
      </Footer>
        </Layout>
      </Layout>

    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppLayout
