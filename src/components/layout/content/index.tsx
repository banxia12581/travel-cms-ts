/**
 * @description 公共布局-页面
 */
import React from 'react';
import { BackTop, Spin } from 'antd';
import { ToTopOutlined } from '@ant-design/icons';
import './index.less';

interface ContentProps {
  requestLoading: boolean;
}

class Content extends React.Component<any, ContentProps> {
  content: any;
  constructor(props: any) {
    super(props);
    this.content = React.createRef();
    this.state = {
      requestLoading: props.requestLoading,
    };
  }
  render() {
    let { requestLoading } = this.state;
    return (
      <div className='content' ref={ref => (this.content = ref)}>
        <div className='view'>
          <div className='main-view'>{this.props.children}</div>
          {requestLoading && (
            <div className='loading'>
              <Spin size='large' tip='拼命加载中' />
            </div>
          )}
        </div>
        <BackTop target={() => this.content} visibilityHeight={2}>
          <div className='back-top'>
            <ToTopOutlined style={{ fontSize: '20px' }} />
          </div>
        </BackTop>
      </div>
    );
  }
}
export default Content;
