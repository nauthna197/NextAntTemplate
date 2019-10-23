import React from "react";
import { Layout } from "antd";
const { Content } = Layout;

interface Props {}

export const ContentLayout: React.FC<Props> = (props) => {
  return (
    <Content className="pt-2" style={{ margin: "0 16px" , minHeight:"800px"}}>
      <div className="content">
          {props.children}
      </div>
    </Content>
  );
};
