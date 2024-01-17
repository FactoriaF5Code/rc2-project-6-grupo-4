import './Page.css';

import Header from './header/Header';
import { Footer } from './footer/Footer';
import { Cards } from './Cards/Cards';

function Page() {
  return (
    <div className='page'>
      <Header />
      {/*datos hoteles*/}
      <Cards />
      <Footer />
    </div>
  );
}

export default Page;
