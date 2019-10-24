import React, { useState, useEffect } from "react";
import { Table as AntTable, Select } from "antd";

const { Option } = Select;
const rawOptions = [10, 20, 30, 40];

interface Props {
  columns: any[];
  onFetchData: any;
}

export const Table: React.FC<Props> = props => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    total: 0,
    pageSize: 10,
    current: 2
  });

  useEffect(() => {
    console.log("i'm effected ");
  });

  const footerRaw = () => {
    return (
      <div className="font-weight-bold">
        <Select value={pagination.pageSize} className="mr-2">
          {rawOptions.map((option, index) => {
            return (
              <Option key={index} value={option}>
                {option}
              </Option>
            );
          })}
        </Select>
        Bản ghi
      </div>
    );
  };

  return (
    <AntTable
      columns={props.columns}
      dataSource={data}
      pagination={pagination}
      //   onChange={this.onChangeData}
      loading={loading}
      rowKey={(record, index) => index.toString()}
      bordered={true}
      style={{ width: "100%" }}
      footer={footerRaw}
      title={() => (
        <React.Fragment>
          <span className="font-weight-bold"> Tổng số:</span> {pagination.total}
        </React.Fragment>
      )}
      className="mt-2 table-responsive"
    />
  );
};
