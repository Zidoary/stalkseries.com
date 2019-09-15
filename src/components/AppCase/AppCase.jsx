import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import style from './index.less';
import { Card, Col, Row,Avatar } from 'antd';
export default () => (
  <div style={{padding:'24px',backgroundColor:'white'}}>
    <Row gutter={24}>
      <Col stlye={style.ColMargin} span={12}>
        <Card className={style.customCard}>
          <h1>Our APP</h1>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
          
        </Card>
      </Col>
      <Col  span={12}>
        <Card  className={style.customCard} >
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"  style={{width:'180px',height:'180px'}} />
        </Card>
      </Col>
    </Row>
  </div>
);
