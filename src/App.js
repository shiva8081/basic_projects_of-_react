
import './App.css';
import { Color } from './components/Color';
import { Star } from './components/Star';

function App() {
  return (
    <div className='App items-center'>

    {/* {color changing app} */}
    {/* <Color/> */}

    {/* star rating app   */}
    <Star no_ofstar={10}/>
    </div>
  );
}

export default App;
