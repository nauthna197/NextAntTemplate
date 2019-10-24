import React from "react";
import Header from "./Header/Header";
import { Layout as AntLayout } from "antd";
import { ContentLayout } from "./Content/ContentLayout";
import { FooterLayout } from "./Footer/FooterLayout";

interface Props {
  title?: string;
}

export const Layout: React.FC<Props> = props => {
  return (
    <AntLayout style={{ minHeight: "100vh" }}>
      <Header />
      <ContentLayout title={props.title}>{props.children}</ContentLayout>
      <FooterLayout />

      <style global jsx>
        {`
          .anticon {
            vertical-align: 2px !important;
          }
        `}
      </style>
    </AntLayout>
  );
};
