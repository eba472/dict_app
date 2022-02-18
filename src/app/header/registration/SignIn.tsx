import React from 'react'
import 'antd/dist/antd.css'
import { Form, Input, Button, Checkbox } from 'antd'
import { Link } from 'react-router-dom'

const wrapperCol = {
  offset: 8,
  span: 16,
}
interface SignInProps {
  setIsUser: (value: boolean) => void
}
const SignIn: React.FC<SignInProps> = ({ setIsUser }) => {
  const onFinish = (values = String) => {
    console.log('Success:', values)
  }

  return (
    <Form
      name='basic'
      wrapperCol={wrapperCol}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      autoComplete='off'
      style={{ alignItems: 'center' }}
    >
      <Form.Item wrapperCol={wrapperCol}>
        <Button
          type='primary'
          htmlType='submit'
          style={{
            border: '1px solid #e76f51',
            backgroundColor: '#fff',
            color: '#e76f51',
            width: '80%',
          }}
        >
          Sign in with Google
        </Button>
      </Form.Item>

      <Form.Item
        label='Email'
        name='email'
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input style={{ border: '1px solid #e76f51' }} />
      </Form.Item>

      <Form.Item
        label='Password'
        name='password'
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password style={{ border: '1px solid #e76f51' }} />
      </Form.Item>

      <Form.Item
        name='remember'
        valuePropName='checked'
        wrapperCol={wrapperCol}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Link to='./forgotPassword' style={{ marginLeft: '36%' }}>
        <Button>Forgot password?</Button>
      </Link>

      <Button onClick={() => setIsUser(false)}>Don't have an account?</Button>
    </Form>
  )
}
export default SignIn
