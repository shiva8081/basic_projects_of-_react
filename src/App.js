
import './App.css';

import { Color } from './components/Color';
import { Star } from './components/Star';
import { Accordian } from './components/accordian/Accordian';
import { Loadmoredata } from './components/loadmore_data/Loadmoredata';
import { Modal } from './components/modal test/Modal';
import { Qr } from './components/qr_generator/Qr';
import { Scroll } from './components/scroll_indicator/Scroll';
import { Slidebar } from './components/slide_bar/Slidebar';
import { Tab } from './components/tab test/Tab';

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
      {/* <Loadmoredata /> */}

      {/* qr code generator */}
      {/* <Qr/> */}

      {/* Scroll indicator */}
      {/* <Scroll url={"https://dummyjson.com/products?limit=100"} /> */}

      {/* tabtest */}
      {/* <Tab/> */}

      {/* modaltest */}
      <Modal/>


    </div>
  );
}

export default App;
