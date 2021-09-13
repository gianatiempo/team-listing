import { Row, Col, Table } from 'antd';
import { Link } from 'react-router-dom';

const columns = [
  {
    title: 'Team name',
    dataIndex: 'name',
    key: 'name',
    render: (text, row) => <Link to={`/team/${row.id}`}>{text}</Link>,
    width: 150
  },
  { title: 'Members', dataIndex: 'members', key: 'members', width: 110 },
  { title: 'Building', dataIndex: 'building', key: 'address 1' },
  { title: 'Long Column Long Column Long Column', dataIndex: 'building', key: 'address 2' },
  { title: 'Long Column Long Column', dataIndex: 'building', key: 'address 3' },
  { title: 'Long Column', dataIndex: 'building', key: 'address 4' }
];

const data = [
  { id: '1', name: 'John Brown', members: 32, building: 'New York No. 1 Lake Park, New York No. 1 Lake Park' },
  { id: '2', name: 'Jim Green', members: 42, building: 'London No. 2 Lake Park, London No. 2 Lake Park' },
  { id: '3', name: 'Joe Black', members: 32, building: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park' }
];
const Home = () => (
  <Row>
    <Col span={24}>
      <Table columns={columns} dataSource={data} rowKey='id' />
    </Col>
  </Row>
);
export default Home;
