import { Row, Col, Table, Tag, Pagination } from 'antd';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const columns = [
  { title: 'Team name', dataIndex: 'name', key: 'name', render: (name, r) => <Link to={`/team/${r.id}`}>{name}</Link> },
  { title: 'Members', dataIndex: 'members', key: 'members', sorter: (a, b) => a - b },
  { title: 'Building', dataIndex: 'building', key: 'building', sorter: (a, b) => a - b },
  { title: 'Lvl 1', dataIndex: 'lvl1', key: 'lvl1', sorter: (a, b) => a - b },
  { title: 'Lvl 2', dataIndex: 'lvl2', key: 'lvl2', sorter: (a, b) => a - b },
  { title: 'Lvl 3', dataIndex: 'lvl3', key: 'lvl3', sorter: (a, b) => a - b },
  { title: 'Lvl 4', dataIndex: 'lvl4', key: 'lvl4', sorter: (a, b) => a - b },
  { title: 'Lvl 5', dataIndex: 'lvl5', key: 'lvl5', sorter: (a, b) => a - b },
  { title: 'Lvl 6', dataIndex: 'lvl6', key: 'lvl6', sorter: (a, b) => a - b },
  { title: 'Skills', dataIndex: 'skills', key: 'skills', render: skills => skills.map(s => <Tag key={s}>{s}</Tag>) }
];

const paginationStyle = { padding: '10px 0', float: 'right' };

const Home = () => {
  const [teamsData, setTeamsData] = useState([]);
  const [pagination, setPagination] = useState({ current: 1, pageSize: 10, sort: 'name', order: 'descend' });
  const [filter, setFilter] = useState({});

  useEffect(() => {
    fetch(
      `/api/team?page=${pagination.current}&limit=${pagination.pageSize}&sort=${pagination.sort}&order=${pagination.order}`
    )
      .then(resp => resp.json())
      .then(setTeamsData);

    fetch(`/api/team/filters`)
      .then(resp => resp.json())
      .then(setFilter);
  }, [pagination]);

  const onChange = (paginationData, filtersData, sorter, extra) => {
    if (extra.action === 'sort') {
      setPagination({ ...pagination, sort: sorter.columnKey, order: sorter.order });
    }
  };

  return (
    <Row>
      <Col span={24}>
        <Table
          columns={columns}
          dataSource={teamsData.data}
          rowKey='id'
          size='middle'
          pagination={false}
          onChange={onChange}
        />
        <Pagination
          style={paginationStyle}
          size='small'
          total={teamsData.total}
          showTotal={(total, range) => `${range[0]}-${range[1]} of ${total}`}
          showSizeChanger
          current={pagination.current}
          pageSize={pagination.pageSize}
          onChange={(current, pageSize) => setPagination({ current, pageSize })}
        />
      </Col>
    </Row>
  );
};
export default Home;
