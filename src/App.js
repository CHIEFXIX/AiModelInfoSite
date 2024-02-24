import './App.css';
import BottomCard from './components/BottomCard';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import ModelContainer from './components/ModelContainer';

function App() {
  const scrollToComponent = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
    <div className="app">
        <Homepage scrollToComponent={scrollToComponent}></Homepage>
        <ModelContainer></ModelContainer>
        <BottomCard></BottomCard>
        <Footer></Footer>
    </div>
    </>
  );
}

export default App;
