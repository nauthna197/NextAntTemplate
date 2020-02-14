import { Layout } from "../../components/Layout/Layout";
import { Table } from "../../components/common/table/Table";

import React from "react";
import { FormInput } from "../../components/form/input/FormInput";
import { FormSelect } from "../../components/form/select/FormSelect";
import { FormButtonCreate } from "../../components/form/button/create/FormButtonCreate";
import { FormButtonSearch } from "../../components/form/button/search/FormButtonSearch";

const Agency = (props:any) => {
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
    <Layout title="Danh sách đại lý">
      <div className="input-group">
        <div className="form-group col-md-2">
          <FormSelect options={{}} name="manager" placeHolder="Người quản lý" />
        </div>
        <div className="form-group col-md-2">
          <FormSelect options={{}} name="status" placeHolder="Trạng thái" />
        </div>
        <div className="form-group col-md-3">
          <FormInput name="name" placeHolder="Mã, tên đại lý" />
        </div>
        <div className="form-group col-md-3">
          <FormInput name="tax-code" placeHolder="Mã số thuế" />
        </div>
        <div className="form-group col-md-2">
          <FormButtonSearch />
          <FormButtonCreate toUrl="/dai-ly/them-moi" />
        </div>
      </div>
      <Table columns={columns} onFetchData={() => []} />
    </Layout>
  );
};

Agency.getInitialProps = async function() {

  
  return {
    shows: "helloworld"
  };
};

export default Agency;
