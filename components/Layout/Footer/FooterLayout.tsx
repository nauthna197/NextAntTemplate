import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

interface Props {}

export const FooterLayout: React.FC<Props> = () => {
  return (
    <Footer className="footer" style={{ textAlign: "center" }}>
      Ant Design ©2019 Created by BongBongAnt
    </Footer>
  );
};
