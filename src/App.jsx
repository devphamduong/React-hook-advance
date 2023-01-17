import { useState } from 'react';
import './App.css';
import NavBar from './components/Header/NavBar';
import Content from './components/Main/Content';
import Lesson3 from './lessons/Lesson3/Lesson3';
import Footer from './components/Footer/Footer';
import Lesson4 from './lessons/Lesson4/Lesson4';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <NavBar />
      {/* <Content
        count={count}
        setCount={setCount}
      /> */}
      {/* <Lesson3 /> */}
      <Lesson4 />
      <Footer />
    </div>
  );
};

export default App;
