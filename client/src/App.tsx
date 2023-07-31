import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Example from './pages/example';
import NovoPost from './pages/create-announcement';
import  Home   from './pages/HomePage';
//import './App.css'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/novo-post' element={<NovoPost />} />
          {/* <Route path='/:id' element={<BlogPost />} /> */}
          {/* <Route path='/:id/editar' element={<EditarPost />} /> */}
          {/* <Route path='/sobre-nos' element={<SobreNos />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
