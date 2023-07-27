import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { HOME } from './path';
import WeatherApp from '../../components/pages/Home/WeatherApp';



const App=()=> {
  return (
       <Routes>
        <Route path={HOME} element={<WeatherApp/>}/>
       </Routes>
  );
}

export default App;
