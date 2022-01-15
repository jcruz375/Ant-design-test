import { Button, Col, DatePicker, Form, Grid, Input, message, Row, Switch } from 'antd';
import './NewClient.scss';

interface UserDataType {
  name: string;
  isClientlocked: boolean;
  cpf: string;
  rg: string;
  birthday: any;
}

const { useBreakpoint } = Grid;

export function NewClientForm() {
  const screens = useBreakpoint();
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
      <Row>
        <Col span={10}>
          <Form.Item
            label="Nome"
            name="name"
          >
            <Input placeholder='Insira o nome do cliente' />
          </Form.Item>
        </Col>
        <Col xs={{span: 10, offset: 4}}>
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

      <Row gutter={{xs: 10, md: 24, lg: 24, xl: 24, xxl: 24}}>
        <Col xs={6} sm={8} md={8} lg={8} xl={8}>
          <Form.Item
            label="cpf"
            name="cpf"
          >
            <Input placeholder="Insira o CPF do cliente" />
          </Form.Item>
        </Col>
        <Col xs={6} sm={8} md={8} lg={8} xl={8}>
          <Form.Item
            label="rg"
            name="rg"
          >
            <Input placeholder="Insira o RG do cliente" />
          </Form.Item>
        </Col>
        <Col xs={12} sm={8} md={8} lg={8} xl={8}>
          <Form.Item
            label="Data de nascimento"
            name="birthday"
          >
            <DatePicker />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <Form.Item>
            <Button
              className={screens.xs ? 'button-xs' : ''}
              type="primary"
              htmlType="submit"
              size="large"
              shape='round'
            >
              Cadastrar
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}