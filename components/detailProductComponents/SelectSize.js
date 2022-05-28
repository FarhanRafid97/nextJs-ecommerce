import React from 'react';
import { Select } from '@chakra-ui/react';
const SelectSize = () => {
  return (
    <Select marginTop="15px">
      <option value="option1" disabled>
        --Select Size--
      </option>
      <option value="option1">XL</option>
      <option value="option2">L</option>
      <option value="option3">M</option>
      <option value="option3">S</option>
    </Select>
  );
};

export default SelectSize;
