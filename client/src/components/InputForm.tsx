import { Button, Input, Form, message } from 'antd';

interface InputFormProps {
  fetchFibonacciNumber: (value: number) => void;
}

const InputForm: React.FC<InputFormProps> = ({ fetchFibonacciNumber }) => {
  const [form] = Form.useForm();

  const handleButton = async () => {
    try {
      const values = await form.validateFields();
      const { value } = values;
      fetchFibonacciNumber(parseInt(value));
    } catch (error: any) {
      if (error.errorFields && error.errorFields.length > 0) {
        const errorMessage = error.errorFields[0].errors[0];
        message.error(errorMessage);
      }
    }
  };

  return (
    <Form form={form} name="input" layout="inline">
      <Form.Item
        name="value"
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please input a number!',
          },
          {
            pattern: /^[0-9]*$/,
            message: '¡Por favor ingrese solo dígitos!',
          },
        ]}
      >
        <Input
          style={{ width: 500 }}
          size="large"
          placeholder="Input a number..."
          allowClear
          autoFocus
        />
      </Form.Item>
      <Form.Item>
        <Button
          onClick={handleButton}
          htmlType="submit"
          type="primary"
          size="large"
        >
          Generar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default InputForm;
