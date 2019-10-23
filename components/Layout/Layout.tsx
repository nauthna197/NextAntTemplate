import React from "react";
import Header from "./Header/Header";
import { ContentLayout } from "./Content/ContentLayout";
import { FooterLayout } from "./Footer/FooterLayout";

interface Props {}

export const Layout: React.FC<Props> = (props) => {
  return (
    <div>
      <Header />
      <ContentLayout>
            {props.children}
      </ContentLayout>
      <FooterLayout />
    </div>
  );
};
