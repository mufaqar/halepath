import { useState, useEffect } from "react";

const useRandomNumbers = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    const generateNumbers = () => {
      const randomNum1 = Math.floor(Math.random() * 10);
      const randomNum2 = Math.floor(Math.random() * 10);
      setNum1(randomNum1);
      setNum2(randomNum2);
      setSum(randomNum1 + randomNum2);
    };
    generateNumbers();
  }, []);

  return { num1, num2, sum };
};

export default useRandomNumbers;
