import { Button, Col, DatePicker, Form, Grid, Input, message, Row, Switch } from 'antd';
import './NewClient.scss'

interface UserDataType {
  name: string;
  isClientlocked: boolean;
  cpf: string;
  rg: string;
  birthday: any;
}

export function NewClientForm() {
  const handleCreateUser = (userData: UserDataType) => {
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
            label="cpf"
            name="cpf"
          >
            <Input placeholder="Insira o CPF do cliente" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="rg"
            name="rg"
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