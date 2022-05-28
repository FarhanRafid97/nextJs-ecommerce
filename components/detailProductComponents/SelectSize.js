import React from 'react';
import { Select } from '@chakra-ui/react';
const SelectSize = () => {
  return (
    <Select marginTop="15px">
      <option value="option1" disabled defaultValue>
        --Select Size--
      </option>
      <option value="option1">Size XL</option>
      <option value="option2">Size L</option>
      <option value="option3">Size M</option>
      <option value="option3">Size S</option>
    </Select>
  );
};

export default SelectSize;
