import { Row, Col, Card, Typography, Tag, Space, Divider, List, Avatar, Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const { Title, Paragraph } = Typography;

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
      <Col span={7}>
        <Card>
          <Space direction='horizontal' style={{ marginBottom: '1em' }}>
            <Link to='/'>
              <Button type='primary' icon={<ArrowLeftOutlined />} size='large' />
            </Link>
            <Title level={3} style={{ margin: 0 }}>
              {team.name}
            </Title>
          </Space>
          <Paragraph>{team.objective}</Paragraph>
          <Divider />
          <Paragraph>
            <Title level={5}>Members:</Title> {team.members}
          </Paragraph>
          <Paragraph>
            <Title level={5}>Skills:</Title>
            {team.skills?.map(s => (
              <Tag key={s}>{s}</Tag>
            ))}
          </Paragraph>
          <Divider />
          <Paragraph>
            <Title level={5}>Building:</Title>
            {team.building}
          </Paragraph>
          <Paragraph>
            <Title level={5}>Management Hierarchy:</Title>
            <Space direction='horizontal' split={<Divider type='vertical' />}>
              {team.lvl1} {team.lvl2} {team.lvl3} {team.lvl4} {team.lvl5} {team.lvl6}
            </Space>
          </Paragraph>
        </Card>
      </Col>
      <Col span={17}>
        <Card>
          <List
            itemLayout='vertical'
            dataSource={team.teamMembers}
            renderItem={item => (
              <List.Item
                key={item.id}
                actions={item.skills?.map(s => (
                  <Tag key={s}>{s}</Tag>
                ))}>
                <List.Item.Meta
                  avatar={<Avatar src={item.photoUrl} size={64} />}
                  title={`${item.name} ${item.lastName}`}
                  description={item.role}
                />
                {item.bio}
              </List.Item>
            )}
          />
        </Card>
      </Col>
    </Row>
  );
};
export default Team;
