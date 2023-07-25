import React, { useState } from "react";
import "./index.scss";
import { Layout, Menu, theme } from "antd";
import Container from "../../common/component/container";
import items from "./const";

const { Header, Content, Footer, Sider } = Layout;

const Index: React.FC = () => {
  const [ key, setKey ] = useState("1");

  const {
    token: { colorBgContainer }
  } = theme.useToken();

  return (
    <Container>
      <Layout hasSider style={{height:"100%"}}>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
          }}
        >
          <div style={{height:"auto",width:'100%',padding:'20px',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <img style={{height:'72px',width:'72px',objectFit:'fill',borderRadius:'50%'}} src="https://picnew13.photophoto.cn/20190319/yingxionglianmengtubiao-32259816_1.jpg" />
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]} onClick={(item) => setKey(item.key)}>
            {items.map((item) => (
              <Menu.Item key={item.key} icon={item.icon}>
                {item.title}
              </Menu.Item>
             ))}
          </Menu>
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Header style={{ padding: 0, background: colorBgContainer }} />
          <Content style={{ margin: "24px 16px 0", overflow: "scroll" }}>
            <div style={{ padding: 12, textAlign: "center", background: colorBgContainer, height: '100%' }}>
              {items.find((i) => i.key === key)?.component}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>LOL Helper ©2023 Created by AWei6丶</Footer>
        </Layout>
      </Layout>
    </Container>
  );
};

export default Index;
