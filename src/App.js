
import './App.css';

import { Color } from './components/Color';
import { Star } from './components/Star';
import { Accordian } from './components/accordian/Accordian';
import { Loadmoredata } from './components/loadmore_data/Loadmoredata';
import { Slidebar } from './components/slide_bar/Slidebar';

function App() {
  return (
    <div className='App items-center'>

      {/* {color changing app} */}
      {/* <Color/> */}

      {/* star rating app   */}
      {/* <Star no_ofstar={10}/> */}

      {/* accordian  */}
      {/* <Accordian/> */}

      {/* slide bar  */}
      {/* <Slidebar url="https://picsum.photos/v2/list" page="1" limit="10" /> */}

      {/* load more data */}
      <Loadmoredata />


    </div>
  );
}

export default App;
