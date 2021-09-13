import { Row, Col, Table, Tag, Pagination } from 'antd';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const columns = [
  {
    title: 'Team name',
    dataIndex: 'name',
    key: 'name',
    render: (text, row) => <Link to={`/team/${row.id}`}>{text}</Link>,
    width: 150
  },
  { title: 'Members', dataIndex: 'members', key: 'members' },
  { title: 'Building', dataIndex: 'building', key: 'building' },
  { title: 'Lvl 1', dataIndex: 'lvl1', key: 'lvl1' },
  { title: 'Lvl 2', dataIndex: 'lvl2', key: 'lvl2' },
  { title: 'Lvl 3', dataIndex: 'lvl3', key: 'lvl3' },
  { title: 'Lvl 4', dataIndex: 'lvl4', key: 'lvl4' },
  { title: 'Lvl 5', dataIndex: 'lvl5', key: 'lvl5' },
  { title: 'Lvl 6', dataIndex: 'lvl6', key: 'lvl6' },
  { title: 'Skills', dataIndex: 'skills', key: 'skills', render: skills => skills.map(s => <Tag key={s}>{s}</Tag>) }
];

const paginationStyle = { padding: '10px 0', float: 'right' };

const Home = () => {
  const [teamsData, setTeamsData] = useState([]);
  const [pagination, setPagination] = useState({ current: 1, pageSize: 10 });

  useEffect(() => {
    fetch(`/api/team?page=${pagination.current}&limit=${pagination.pageSize}`)
      .then(resp => resp.json())
      .then(setTeamsData);
  }, [pagination]);

  return (
    <Row>
      <Col span={24}>
        <Table columns={columns} dataSource={teamsData.data} rowKey='id' size='middle' pagination={false} />
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
