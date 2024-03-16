import { useState } from 'react';
import { Flex, Typography, message } from 'antd';
import InputForm from './components/InputForm';
import OutputForm from './components/OutputForm';

import './App.css';

const { Title, Text } = Typography;

const App: React.FC = () => {
  const [result, setResult] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [executeTime, setExecuteTime] = useState<number>(0);

  const fetchFibonacciNumber = async (value: number) => {
    try {
      setLoading(true);
      const response = await fetch(`/api`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ value }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      const { result, executionTime } = data;

      setLoading(false);
      setResult(result);
      setExecuteTime(executionTime);
    } catch (error) {
      console.error(error);
      message.error('An error occurred while fetching the Fibonacci number.');
    }
  };

  return (
    <Flex
      style={{
        margin: '50px auto 0 auto',
        width: 800,
        textAlign: 'center',
      }}
      align="center"
      gap="large"
      vertical
    >
      <Title style={{ color: '#b37feb' }}>Función Memoize</Title>
      <div
        style={{
          padding: 10,
          background: 'rgba(0, 50, 110, 0.8)',
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            fontSize: '18px',
            color: '#ea25b5',
          }}
        >
          El proyecto "Generador de números de Fibonacci utilizando la función
          memoize" es un programa que crea el enésimo número de Fibonacci
          utilizando un enfoque recursivo y un mecanismo de almacenamiento en
          caché de resultados.
        </Text>
      </div>
      <InputForm fetchFibonacciNumber={fetchFibonacciNumber} />
      <OutputForm executeTime={executeTime} loading={loading} result={result} />
    </Flex>
  );
};

export default App;
