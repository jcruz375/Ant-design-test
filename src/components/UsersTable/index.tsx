import { Table, Tag, Space, Button } from 'antd';

import './usersTable.scss'

const { Column } = Table;

const data = [
  {
    key: '1',
    firstName: 'John',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    firstName: 'Jim',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    firstName: 'Joe',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];



export function UsersTable() {
  return (
    <Table className="usersTable" dataSource={data}>
      <Column title="First Name" dataIndex="firstName" key="firstName" />
      <Column title="Age" dataIndex="age" key="age" responsive={['md']} />
      <Column title="Address" dataIndex="address" key="address" />
      <Column
        title="Tags"
        dataIndex="tags"
        responsive={['md']}
        key="tags"
        render={tags => (
          <>
            {tags.map((tag: any) => (
              <Tag color="blue" key={tag}>
                {tag}
              </Tag>
            ))}
          </>
        )}
      />
      <Column
        title="Action"
        key="action"
        render={(text, record) => (
          <Space size={['small', 'large']}>
            <Button type="primary">Editar</Button>
            <Button type="primary" danger>Deletar</Button>
          </Space>
        )}
      />
    </Table>
  );
};