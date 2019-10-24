import { Layout } from "../../components/Layout/Layout";
import { Table } from "../../components/common/table/Table";

import React from "react";

const Agency = ({}) => {
  const columns = [
    {
      title: "STT",
      key: "index",
      render: (text: any, record: any, index: any) => index + 1,
      className: "text-center",
      width: 2
    },
    { title: "Mã đại lý", dataIndex: "code" },
    { title: "Mã số thuế", dataIndex: "tax_code" },
    {
      title: "Trạng thái",
      dataIndex: "status",
      className: ""
      //   render: this.renderStatusColumn
    },
    { title: "Tên đại lý", dataIndex: "fullname", width: "30%" },
    { title: "Tên viết tắt", dataIndex: "sortname" },
    { title: "Email", dataIndex: "email" },
    { title: "SĐT", dataIndex: "phone" },
    { title: "Người quản lý", dataIndex: "manager.fullname" }
  ];

  return (
    <Layout title="Quản lý đại lý">
      <Table columns={columns} onFetchData={() => []} />
    </Layout>
  );
};
export default Agency;
