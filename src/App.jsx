import { React } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './components/Main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Main />
          }
        />
        <Route path="/experimental" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
