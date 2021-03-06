import './App.css';
import Header from './components/Header';
import SearchInput from './components/SearchInput';
import LeftComponent from './components/LeftComponent';
import RightComponent from './components/RightComponent';
import AdsBanner from './components/AdsBanner';

function App() {
  return (
    <>
      <Header />
      <SearchInput />
      <section className='main-block'>
        <LeftComponent />
        <RightComponent />
        <AdsBanner />
      </section>
    </>
  );
}

export default App;
