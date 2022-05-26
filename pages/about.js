import React, { useState } from 'react';

const about = () => {
  const [data, setData] = useState(1);
  return (
    <div>
      <h3>{data}</h3>
      <button onClick={() => setData(data + 1)}>Tambah</button>
    </div>
  );
};

export default about;
