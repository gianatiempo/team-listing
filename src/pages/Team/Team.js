import { Row, Col, Card } from 'antd';
import { Link } from 'react-router-dom';

const Team = () => (
  <Row gutter={16}>
    <Col span={6}>
      <Card>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </Col>
    <Col span={18}>
      <Card>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
        <p>
          And you can <Link to='/'>Go Back</Link>
        </p>
      </Card>
    </Col>
  </Row>
);
export default Team;
