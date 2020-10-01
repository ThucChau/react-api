import React from 'react';
import AppRoutes from './AppRoutes';
import Loading from './components/Loading';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';


function App() {
  const isLoading = useSelector(state => state.App.isLoading);
  return (
    <div className="app">
      <AppRoutes />
      
      <ToastContainer autoClose={1000}/>
      <Loading isLoading={isLoading} />
    </div>
  );
}

export default App;
