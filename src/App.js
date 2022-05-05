import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer1 from './Footer1';
import Footer2 from './Footer2';
import Header11 from './Header11';
import Header22 from './Header22';
import Main from './Main';
import New from './New';
function App() {
  return (
    <>
    <div className='page'>
      <Header22 />
      <Header11 />
      <Footer1 />
      <Footer2 />
    </div>
   <Routes>

     <Route path='/Main' element={<Main />}/>
     <Route path='/New' element={<New />}/>

  </Routes> 
</>
  );
}
export default App;
