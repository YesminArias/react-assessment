import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from './componentes/Details/Details';
import Home from './componentes/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <div>
          <Routes>
             <Route exact path='/' element= {<Home/>}/>
             <Route exact path='/detail/:id' element= {<Detail/>}/>
          </Routes>
        </div>
       </BrowserRouter>
  );
}

export default App;
