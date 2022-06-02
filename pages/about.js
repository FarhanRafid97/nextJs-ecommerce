import React, { useState } from 'react';

const About = () => {
  const [data, setData] = useState(1);

  return (
    <div>
      <h3>{data}</h3>
      <button onClick={() => setData(data + 1)}>Tambah</button>
    </div>
  );
};

export default About;
