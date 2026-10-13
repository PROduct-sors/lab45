import React from 'react';
import AppRecoil from './recoil/TodoAppRecoil';
import AppRedux from './redux/TodoAppRedux';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
      <div style={{ width: '45%', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <AppRecoil />
      </div>
      <div style={{ width: '45%', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <AppRedux />
      </div>
    </div>
  );
}

export default App;
