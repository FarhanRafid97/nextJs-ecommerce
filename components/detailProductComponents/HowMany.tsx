import { Button, Flex, Input } from '@chakra-ui/react';
import React from 'react';

interface HowMnayProps {
  setValue: React.Dispatch<React.SetStateAction<number>>;
  value: number;
}

const HowMany: React.FC<HowMnayProps> = ({ value, setValue }) => {
  const reductionValue = () => {
    if (value > 0) {
      setValue(value - 1);
    } else {
      setValue(0);
    }
    return;
  };
  const addValue = () => {
    setValue(value + 1);
  };
  return (
    <Flex color="white" paddingLeft="5px">
      <Button
        borderRadius="none"
        borderLeftRadius="5px"
        colorScheme="facebook"
        _focus={{ border: '1px solid white' }}
        border="1px solid white"
        onClick={reductionValue}
      >
        -
      </Button>
      <Input
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
        width="60px"
        type="number"
        textAlign="center"
        borderRadius="none"
      />
      <Button
        colorScheme="facebook"
        _focus={{ border: '1px solid white' }}
        borderRadius="none"
        border="1px solid white"
        borderRightRadius="5px"
        onClick={addValue}
      >
        +
      </Button>
    </Flex>
  );
};

export default HowMany;
