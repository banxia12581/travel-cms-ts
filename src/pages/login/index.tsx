/**
 * @description 登录页
 */
import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Tabs, Form, Input, Button, Checkbox, message } from 'antd';
import './index.less';
import loginShow from '@/assets/images/login-show.png';
import { util } from '@/utils';

interface formItemInter {
  btnName: string;
}

interface formInter {
  login: formItemInter;
  register: formItemInter;
}

export default function Login() {
  const { TabPane } = Tabs;
  const [tabActiveKey, setTabActiveKey] = useState<string>('login');
  const [checked, setChecked] = useState<boolean>(false);
  const formRef = useRef<any>();
  const history = useHistory();

  useEffect(() => {
    // 获取缓存数据
    const info = util.getCookie();
    if (!!info) {
      formRef.current.setFieldsValue({
        mobile: info.mobile,
        password: info.password,
      });
    }
  }, []);

  // 提交
  const onFinish = (values: any) => {
    if (tabActiveKey === 'login') {
      // =>true: 记住我复选框是否被勾选，设置7天缓存
      if (checked) {
        util.setCookie(values.mobile, values.password, 7);
      } else {
        // 清空Cookie
        util.setCookie(0, 0, -1);
      }
      // 登录成功，缓存用户信息，跳转首页
      util.saveUserInfo(values);
      console.log(111);
      history.push('/');
    } else {
      if (values.password !== values.password2) {
        message.error('两次密码不一致');
        return false;
      }
      // 注册成功，缓存用户信息，跳转首页
      util.saveUserInfo(values);
      console.log(222);
      history.push('/');
    }
  };

  // 忘记密码提示
  const forgetPwd = () => {
    message.info('忘记密码，请联系客服');
  };

  // 是否勾选记住密码
  const checkChange = (e: any) => {
    const val = e.target.checked;
    setChecked(val);
  };

  // 获取当前类型表单项的值
  const getFormTypeItem = (type: string) => {
    const formObj: formInter = {
      login: {
        btnName: '立即登录',
      },
      register: {
        btnName: '立即注册',
      },
    };
    let formItem = formObj[type as keyof typeof formObj];
    return formItem;
  };

  // 表单展示内容
  const formContent = (type: string) => {
    const formItem = getFormTypeItem(type);
    return (
      <Form labelAlign='left' ref={formRef} initialValues={{ remember: true }} onFinish={onFinish} autoComplete='off'>
        <Form.Item
          name='mobile'
          rules={[
            () => ({
              validator(rule, value) {
                if (!value || !value.trim()) {
                  return Promise.reject('请输入手机');
                } else if (value && !util.isPhoneNumber(value)) {
                  return Promise.reject('请输入正确的手机号');
                }
                return Promise.resolve();
              },
            }),
          ]}
        >
          <Input placeholder='请输入手机号' />
        </Form.Item>

        <Form.Item name='password' rules={[{ required: true, message: '请输入密码' }]}>
          <Input.Password placeholder='请输入密码' />
        </Form.Item>
        {type === 'register' ? (
          <Form.Item name='password2' rules={[{ required: true, message: '请再次确认密码' }]}>
            <Input.Password placeholder='请再次确认密码' />
          </Form.Item>
        ) : null}

        <Form.Item>
          <Button type='primary' htmlType='submit' block size='large' shape='round'>
            {formItem.btnName}
          </Button>
        </Form.Item>

        {type === 'login' ? (
          <div className='form-forget'>
            <Checkbox className='forget-remember' checked={checked} onChange={checkChange}>
              <span className='checked'>记住我</span>
            </Checkbox>
            <Button type='text' onClick={forgetPwd}>
              忘记密码?
            </Button>
          </div>
        ) : null}
      </Form>
    );
  };

  // 切换面板的回调
  const tabChange = (activeKey: string) => {
    setTabActiveKey(activeKey);
    if (activeKey) {
      // 重置表单项的值
      formRef.current.resetFields();
    }
  };

  return (
    <div className='login'>
      <div className='flex'>
        <div className='login-left'>
          <img src={loginShow} className='login-img' alt='left' />
        </div>
        <div className='login-right'>
          <div className='login-form'>
            <div className='login-title'>文章管理系统</div>
            <Tabs defaultActiveKey='login' onChange={tabChange}>
              <TabPane tab='登录' key='login'>
                <>{tabActiveKey === 'login' ? formContent('login') : null}</>
              </TabPane>
              <TabPane tab='注册' key='register'>
                <>{tabActiveKey === 'register' ? formContent('register') : null}</>
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
