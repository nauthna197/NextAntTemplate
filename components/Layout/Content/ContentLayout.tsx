import React from "react";
import { Layout, Card } from "antd";
const { Content } = Layout;

interface Props {
    title?:string;
}

export const ContentLayout: React.FC<Props> = props => {
  return (
    <Content className="mt-2" style={{ margin: "0 16px" }}>
      <Card
          size="default"
          title={props.title}
          bordered={true}
          className="card-content"
        >
          {props.children}
        </Card>
      <style jsx>
        {`
          .card-content {
            padding: 24px;
            background-color: #fff;
            min-height: 600px;
          }
        `}
      </style>
    </Content>
  );
};
