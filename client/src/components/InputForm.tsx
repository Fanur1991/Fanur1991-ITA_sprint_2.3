import { Button, Flex, Input, Tooltip } from 'antd';

interface InputFormProps {
  fetchFibonacciNumber: (value: number) => void;
  setValue: (inputValue: number) => void;
  value: number;
}

const InputForm: React.FC<InputFormProps> = ({
  fetchFibonacciNumber,
  setValue,
  value,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue: number = parseInt(event.target.value);
    setValue(newValue);
  };

  const handleButton = () => {
    if (typeof value === 'number') {
      fetchFibonacciNumber(value);
    }
  };

  return (
    <Flex justify="center" align="start" gap="large">
      <Tooltip
        trigger={['focus']}
        title="Input a number"
        placement="topLeft"
        overlayClassName="numeric-input"
      >
        <Input
          value={value === 0 ? '' : value}
          onChange={handleInputChange}
          style={{ width: 500 }}
          size="large"
          placeholder="Input a number..."
          allowClear
          autoFocus
        />
      </Tooltip>
      <Button
        autoFocus
        onClick={handleButton}
        htmlType="button"
        type="primary"
        size="large"
      >
        Generate
      </Button>
    </Flex>
  );
};

export default InputForm;
