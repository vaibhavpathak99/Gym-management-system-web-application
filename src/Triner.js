import React from 'react';
import gymImage from './gymImage/add.jpg';

function Triner() {
  return (
    <div
      style={{
        backgroundImage: `url(${gymImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh', // Adjust the height as necessary
        width: '100vw',
        position: 'relative',
      }}
    >
      <h1 style={{ color: 'white', textAlign: 'center', paddingTop: '20px' }}>
        Personal Training Coach!
      </h1>
      <table
        className="table table-striped"
        style={{
          width: '80%', // Make the table medium size
          margin: 'auto', // Center the table
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          borderCollapse: 'collapse', // Collapse table borders
          textAlign: 'center', // Center text in cells
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                padding: '10px',
                border: '2px solid #ddd',
                fontSize: '18px',
              }}
            >
              T-Name
            </th>
            <th
              style={{
                padding: '10px',
                border: '2px solid #ddd',
                fontSize: '18px',
              }}
            >
              T-phone
            </th>
            <th
              style={{
                padding: '10px',
                border: '2px solid #ddd',
                fontSize: '18px',
              }}
            >
              T-exp
            </th>
            <th
              style={{
                padding: '10px',
                border: '2px solid #ddd',
                fontSize: '18px',
              }}
            >
              T-price
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '10px', border: '2px solid #ddd' }}>
              Varun sir
            </td>
            <td style={{ padding: '10px', border: '2px solid #ddd' }}>
              123-456-7890
            </td>
            <td style={{ padding: '10px', border: '2px solid #ddd' }}>
              5 years
            </td>
            <td style={{ padding: '10px', border: '2px solid #ddd' }}>$50</td>
          </tr>
          <tr>
            <td style={{ padding: '10px', border: '2px solid #ddd' }}>
              Vaibhav sir
            </td>
            <td style={{ padding: '10px', border: '2px solid #ddd' }}>
              123-456-7890
            </td>
            <td style={{ padding: '10px', border: '2px solid #ddd' }}>
              5 years
            </td>
            <td style={{ padding: '10px', border: '2px solid #ddd' }}>$50</td>
          </tr>
          <tr>
            <td style={{ padding: '10px', border: '2px solid #ddd' }}>
              Nidhi mam
            </td>
            <td style={{ padding: '10px', border: '2px solid #ddd' }}>
              123-456-8865
            </td>
            <td style={{ padding: '10px', border: '2px solid #ddd' }}>
              6 years
            </td>
            <td style={{ padding: '10px', border: '2px solid #ddd' }}>$60</td>
          </tr>
          <tr>
            <td style={{ padding: '10px', border: '2px solid #ddd' }}>
              Omkar sir
            </td>
            <td style={{ padding: '10px', border: '2px solid #ddd' }}>
              123-5556-7890
            </td>
            <td style={{ padding: '10px', border: '2px solid #ddd' }}>
              4 years
            </td>
            <td style={{ padding: '10px', border: '2px solid #ddd' }}>$30</td>
          </tr>
          <tr>
            <td style={{ padding: '10px', border: '2px solid #ddd' }}>
              Nikita mam
            </td>
            <td style={{ padding: '10px', border: '2px solid #ddd' }}>
              987-456-7890
            </td>
            <td style={{ padding: '10px', border: '2px solid #ddd' }}>
              5 years
            </td>
            <td style={{ padding: '10px', border: '2px solid #ddd' }}>$50</td>
          </tr>
            
          <tr>
            <td style={{ padding: '10px', border: '2px solid #ddd' }}>
              Rahul sir
            </td>
            <td style={{ padding: '10px', border: '2px solid #ddd' }}>
              987-456-7836
            </td>
            <td style={{ padding: '10px', border: '2px solid #ddd' }}>
               10 years
            </td>
            <td style={{ padding: '10px', border: '2px solid #ddd' }}>$80</td>
          </tr>
          
        </tbody>
      </table>
    </div>
  );
}

export default Triner;
