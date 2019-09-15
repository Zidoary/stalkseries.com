import React from 'react';
import { Card, Typography, Alert } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import Banner from '@/components/Banner/Banner';
import AppCase from '@/components/AppCase/AppCase';
import RecycleRow from '@/components/RecycleRow/RecycleRow';
export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Banner />
        <AppCase />
        <RecycleRow />
      </React.Fragment>
    );
  }
}
