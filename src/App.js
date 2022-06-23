import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Edit from './components/edit';
import Input from './components/input';
import Table from './components/table';
import Header from './header';

function App() {
  return (
    <div>
      <Header />
      <div className='mainbody'>
        <Routes>
          <Route path='/' element={<Table />} />
          <Route path='/addinput' element={<Input />} />
          <Route path='/edit/:id' element={<Edit />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;