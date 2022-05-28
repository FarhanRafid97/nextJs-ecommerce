import React, { useState } from 'react';
import { Flex, Button, Input } from '@chakra-ui/react';

const HowMany = () => {
  const [value, setValue] = useState(0);

  const reductionValue = () => {
    if (value > 0) {
      setValue(value - 1);
    } else {
      setValue(0);
    }
  };
  const addValue = () => {
    setValue(value + 1);
  };
  return (
    <Flex color="white" paddingLeft="5px">
      <Button
        bg="orange.400"
        borderRadius="none"
        borderLeftRadius="5px"
        onClick={reductionValue}
      >
        -
      </Button>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        width="60px"
        type="number"
        textAlign="center"
        borderRadius="none"
      />
      <Button
        bg="orange.400"
        borderRadius="none"
        borderRightRadius="5px"
        onClick={addValue}
      >
        +
      </Button>
    </Flex>
  );
};

export default HowMany;
