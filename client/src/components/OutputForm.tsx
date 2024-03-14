import { Row, Col, Statistic, ConfigProvider } from 'antd';

interface OutputProps {
  loading: boolean;
  result: number;
  executeTime: number;
}

const OutputForm: React.FC<OutputProps> = ({
  loading,
  result,
  executeTime,
}) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorTextHeading: '#f0f0f0',
          fontSize: 18,
        },
        components: {
          Statistic: { titleFontSize: 16, colorTextDescription: '#bfbfbf' },
        },
      }}
    >
      <Row gutter={16}>
        <Col span={12}>
          <Statistic
            style={{ width: 250 }}
            title="Tiempo de ejecución:"
            value={`${executeTime} ms`}
            loading={loading}
          />
        </Col>
        <Col span={12}>
          <Statistic
            style={{ width: 250 }}
            title="Resultado obtenido:"
            value={result}
            loading={loading}
          />
        </Col>
      </Row>
    </ConfigProvider>
  );
};

export default OutputForm;
