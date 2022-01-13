import { Button, Col, DatePicker, Form, Input, message, Row, Switch } from 'antd';
import './NewClient.scss'

export function NewClientForm() {
  const handleCreateUser = (userData: any) => {
    console.log(userData)
    message.success('cliente cadastrado com sucesso!');
  };

  const onFinishFailed = () => {
    message.error('ocorreu um erro no cadastro!');
  };

  return (
    <Form
      name="basic"
      layout="vertical"
      onFinish={handleCreateUser}
      onFinishFailed={onFinishFailed}
      initialValues={{ remember: true }}
    >
      <Row gutter={20}>
        <Col span={10}>
          <Form.Item
            label="Nome"
            name="name"
          >
            <Input placeholder='Insira o nome do cliente' />
          </Form.Item>
        </Col>
        <Col span={10}>
          <Form.Item
            label="Sobrenome"
            name="Last-name"
          >
            <Input placeholder='Insira o sobrenomenome do cliente' />
          </Form.Item>
        </Col>

        <Col span={4}>
          <Form.Item
            label="Bloqueado"
            name="icClientBlocked"
            valuePropName='checked'
          >
            <Switch
              checked={false}
            />
          </Form.Item>
        </Col>

      </Row>

      <Row gutter={30}>
        <Col span={8}>
          <Form.Item
            label="CPF"
            name="CPF"
          >
            <Input placeholder="Insira o CFP do cliente" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="RG"
            name="RG"
          >
            <Input placeholder="Insira o RG do cliente" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Data de nascimento"
            name="birthday"
          >
            <DatePicker />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Item>
            <Button
              className="submit-button"
              type="primary"
              htmlType="submit"
              size="large"
              shape='round'
            >
              Submit
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}