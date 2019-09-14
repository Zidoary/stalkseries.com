import React from 'react';
import { Card, Typography, Alert } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import Banner from '@/components/Banner/Banner';

export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Banner />
        {/* <div style={{height:'3770px',width:'3373px',background:'url(https://zos.alipayobjects.com/rmsportal/hzPBTkqtFpLlWCi.jpg)'}}></div> */}
      </React.Fragment>
    );
  }
}
