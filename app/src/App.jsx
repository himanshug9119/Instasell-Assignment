import {BrowserRouter} from 'react-router-dom';
import Header from './components/header';
import Page1 from './components/page1';
import Page2 from './components/page2';
import Page3 from './components/page3';
export default function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Header />
        <Page1/>
        <Page2/>
        <Page3/>
      </div>
    </BrowserRouter>
  );
}
