/**
 * @description 首页
 */
import React, { useState, useEffect } from 'react';
import { Statistic, Row, Col, Card } from 'antd';
import './index.less';
import { getHomeData } from '@/api/home';

interface topListInter {
  title: string;
  value: number;
}

export default function Home() {
  const [topList, setTopList] = useState<Array<topListInter>>([]);

  useEffect(() => {
    getHomeData({}, (res: Array<topListInter>) => {
      setTopList(res);
    });
  }, []);

  return (
    <div className='home'>
      <Row gutter={16}>
        {topList.map((item, index) => {
          return (
            <Col span={4} key={index}>
              <Card className='home-card'>
                <Statistic title={item.title} value={item.value} />
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
