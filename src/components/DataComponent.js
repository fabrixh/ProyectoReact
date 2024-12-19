// src/components/DataComponent.js
import React from 'react';

const DataComponent = ({ data }) => {
  return (
    <div>
      <h2>Datos Cargados:</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataComponent;
