import React, { useState } from 'react';
import { Select } from '@chakra-ui/react';
const SelectSize = ({ size, setSize }) => {
  return (
    <Select
      marginTop="15px"
      value={size}
      onChange={(e) => setSize(e.target.value)}
      required
    >
      <option value="XL">Size XL</option>
      <option value="L">Size L</option>
      <option value="M">Size M</option>
      <option value="S">Size S</option>
    </Select>
  );
};

export default SelectSize;
