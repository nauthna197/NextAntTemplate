import React, { useState } from "react";
import { Icon, Menu } from "antd";
const { SubMenu } = Menu;
import Router from "next/router";

interface Props {}

export const MenuHeader: React.FC<Props> = () => {
  const [current, setCurrent] = useState("mail");

  const handleClick = (e: any) => {
    setCurrent(e);
  };

  const onClickMenu = (link: string) => {
    Router.push(link);
  };

  return (
    <Menu
      onClick={handleClick}
      theme="dark"
      selectedKeys={[current]}
      mode="horizontal"
      className="align-self-center"
    >
      {MENU_CONSTANT.map(menu => {
        if (menu.childMenu.length > 0) {
          return (
            <SubMenu
              key={menu.key}
              title={
                <span>
                  <Icon type={menu.icon} />
                  <span>{menu.displayName}</span>
                </span>
              }
            >
              {menu.childMenu.map(subItem => {
                return (
                  <Menu.Item
                    key={subItem.key}
                    onClick={() => onClickMenu(subItem.link)}
                  >
                    <Icon type={subItem.childIcon} />
                    <span>{subItem.displayName}</span>
                  </Menu.Item>
                );
              })}
            </SubMenu>
          );
        } else {
          return (
            <Menu.Item key={menu.key} onClick={() => onClickMenu(menu.link)}>
              <Icon type={menu.icon}></Icon>
              <span>{menu.displayName}</span>
            </Menu.Item>
          );
        }
      })}
    </Menu>
  );
};

const MENU_CONSTANT = [
  {
    link: "/",
    icon: "home",
    displayName: "Trang chủ",
    key: "home",
    permission: "",
    childMenu: []
  },
  {
    link: "/ctv",
    icon: "home",
    displayName: "Cộng tác viên",
    key: "ctv",
    permission: "",
    childMenu: []
  },
  {
    link: "/dai-ly",
    icon: "home",
    displayName: "Đại lý",
    key: "daily",
    permission: "",
    childMenu: []
  },
  {
    link: "",
    icon: "setting",
    displayName: "Quản lý đại lý, CTV",
    key: "system",
    permission: "",
    childMenu: [
      {
        link: "/dai-ly",
        childIcon: "cluster",
        displayName: "Quản lý đại lý",
        permission: "",
        key: "agency"
      },
      {
        link: "/ctv",
        childIcon: "branches",
        displayName: "Quản lý CTV",
        permission: "",
        key: "colla"
      }
    ]
  }
];
