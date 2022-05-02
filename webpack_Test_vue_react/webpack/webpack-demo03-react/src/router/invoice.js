import React, { useEffect } from "react";
// import URL from 'url'
// export default function Invoice() {
//     return <h2>Invoice #???</h2>;
//   }
// import { useParams } from "react-router-dom";

// export default function Invoice() {
//   let params = useParams();
//   return <h2>Invoice: {params.invoiceId}</h2>;
// }
import chalk from 'chalk';
import "../../mock/params.js";
import { useParams } from "react-router-dom";
import { getInvoice } from "../data";
import axios from "axios";
import { Table, Tag, Space } from 'antd';
export default function Invoice() {
  console.log('1111')
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
  // useEffect(() => {
  //   let xhr = new XMLHttpRequest();
  //   // let url = new URL("/hbb/education/getIndexByWeb");
  //   // url.searchParams.set("q", "testxxxx");
  //   xhr.open("GET", `/hbb/education/getIndexByWeb?t=ss`);
  //   xhr.send();
  //   xhr.onload = function () {
  //     console.log(xhr.response, "........");
  //   };
  // }, []);
  useEffect(()=>{
    // console.log(chalk.green.bold(':percent'),'chalk.bold.red;')
      axios.post('/hbb/education/getIndexByWeb',{
        firstName: 'Fred',
        lastName: 'Flintstone'
      }) //这列的'/mock'与mock.js文件里的地址一致
      .then(res => {
          // console.log(res.data)
      })
  },[])

  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));
  return (
    <main>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
      <Table columns={columns} dataSource={data} />
    </main>
  );
}
