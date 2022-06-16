/**
 * @description 通用列表组件
 */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';

function List({ ...props }){
  const { columns, autoQuery, http } = props;
  const [list, setList] = useState([]);
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(20);

  const query = (page: number, size: number) => {
    const params = { page, size };
    http(params, (res: any) => {
      setList(res.list);
      setTotal(res.total);
    });
  };

  // 分页、排序、筛选变化时回调函数
  const paginationChange = (pages: number, sizes: number) => {
    setPage(pages);
    setSize(sizes);
    query(pages, sizes);
  };

  useEffect(() => {
    if (autoQuery) {
      query(page, size);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Table
        dataSource={list}
        rowKey={record => record['id']}
        columns={columns}
        scroll={{ x: '100%' }}
        pagination={{
          total,
          current: page,
          pageSize: size,
          onChange: paginationChange,
          showQuickJumper: true,
          showSizeChanger: true,
          showTotal: total => `共 ${total} 条`,
        }}
      />
    </>
  );
}
List.propTypes = {
  http: PropTypes.func.isRequired, // 请求
  columns: PropTypes.array, // 表格项列表
  autoQuery: PropTypes.bool, // 是否第一次加载就进行查询,默认为true
};

List.defaultProps = {
  columns: [],
  autoQuery: true,
};
export default List;
