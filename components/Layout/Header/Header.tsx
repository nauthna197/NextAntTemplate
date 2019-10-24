import { Layout, Dropdown, Icon, Menu } from "antd";
import { Row, Col } from "antd";
import MyHead from "./Head";
import { MenuHeader } from "./Menu/MenuHeader";

const AntHeader = Layout.Header;

const Header = () => {
  return (
    <AntHeader className="header" style={{ padding: 0 }}>
      <MyHead title="hihi" />
      <Row className="d-flex">
        <Col className="logo" span={4}></Col>
        <MenuHeader />
        <Col span={4} className="ml-auto text-right pr-3">
          <Dropdown overlay={menu}>
            <button className="btn btn-link text-white ">
              Nguyễn Tuấn Anh <Icon type="down" />
            </button>
          </Dropdown>
        </Col>
      </Row>
      <style global jsx>
        {`
          .logo {
            background: rgba(255, 255, 255, 0.2);
            margin: 16px 24px 16px 16px;
          }
        `}
      </style>
    </AntHeader>
  );
};

const menu = (
  <Menu>
    <Menu.Item>
      <button className="btn btn-link">Đăng xuất</button>
    </Menu.Item>
  </Menu>
);

export default Header;
