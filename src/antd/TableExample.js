import React, { useEffect, useState } from "react";
import { Button, Checkbox, Divider, Radio, Table, Tag } from "antd";
// import "antd/dist/antd.css";
import { getStatus } from "./Helpers";

const TableExample = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [paginateData, setpaginateData] = useState(null);
  useEffect(() => {
    setLoading(true);
    getData(10, 1);
    setLoading(false);
  }, []);
  const getData = async (skip) => {
    const res = await fetch(
      `https://dummyjson.com/users?limit=10&skip=${skip}&select=firstName,age`
    );
    const result = await res.json();
    setData(result.users);
    setpaginateData({
      total: result.total,
      skip: result.skip,
    });
  };
  const columns = [
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
      sorter: (a, b) => {
        return a.firstName - b.firstName;
      },
      sort: true,
    },
    {
      title: "email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      render: (_, record) => {
        console.log("typeof", typeof record.age);
        return (
          <Tag color={record.age < 50 ? "success" : "error"}>{record.age}</Tag>
        );
      },
    },

    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_, record) => {
        console.log("record", record);
        return <Tag color={getStatus(record.status)}>{record.status}</Tag>;
      },
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];
  const handleSelect = (record, selected) => {
    if (selected) {
      setSelectedRowKeys((keys) => [...keys, record.key]);
    } else {
      setSelectedRowKeys((keys) => {
        const index = keys.indexOf(record.key);
        return [...keys.slice(0, index), ...keys.slice(index + 1)];
      });
    }
  };
  const toggleSelectAll = () => {
    setSelectedRowKeys((keys) =>
      keys.length === data.length ? [] : data.map((r) => r.key)
    );
  };
  const headerCheckbox = (
    <Checkbox
      checked={selectedRowKeys.length}
      indeterminate={
        selectedRowKeys.length > 0 && selectedRowKeys.length < data.length
      }
      onChange={toggleSelectAll}
    />
  );
  const rowSelection = {
    selectedRowKeys,
    type: "checkbox",
    fixed: true,
    onSelect: handleSelect,
    columnTitle: headerCheckbox,
    //onSelectAll: this.handleSelectAll
  };
  const handleTableChange = async (paginate) => {
    setLoading(true);
    await getData(paginate);
    setLoading(false);
  };
  return (
    <div>
      <h1>Button</h1>
      <Button loading>khbjhb</Button>
      <h1>Table</h1>
      <Divider />
      {data && data.length > 0 && (
        <Table
          rowSelection={rowSelection}
          loading={loading}
          dataSource={data}
          columns={columns}
          rowKey={(record) => record.key}
          // pagination={true}
          pagination={{
            onChange: handleTableChange,
            pageSize: 10,
            total: paginateData && paginateData.total,
          }}
          // onChange={handleTableChange}
        />
      )}
    </div>
  );
};

export default TableExample;
