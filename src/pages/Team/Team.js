import { Row, Col, Card, Typography, Tag, Space, Divider } from 'antd';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const { Title, Text } = Typography;

const Team = () => {
  const { id } = useParams();
  const [team, setTeam] = useState({});

  useEffect(() => {
    fetch(`/api/team/${id}`)
      .then(resp => resp.json())
      .then(setTeam);
  }, [id]);

  return (
    <Row gutter={16}>
      <Col span={6}>
        <Card>
          <Title level={2}>{team.name}</Title>
          <Space direction='vertical' split={<Divider />}>
            <Text>{team.objective}</Text>
            <Text>Members: {team.members}</Text>
            <Text>
              Skills:{' '}
              {team.skills?.map(s => (
                <Tag key={s}>{s}</Tag>
              ))}
            </Text>
            <Text>Building:{team.building}</Text>
            <Space direction='horizontal' split={<Divider type='vertical' />}>
              {team.lvl1}
              {team.lvl2}
              {team.lvl3}
              {team.lvl4}
              {team.lvl5}
              {team.lvl6}
            </Space>
            <Link to='/'>Go Back to List</Link>
          </Space>
        </Card>
      </Col>
      <Col span={17}>
        <Card>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Col>
    </Row>
  );
};
export default Team;
