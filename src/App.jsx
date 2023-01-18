import { useState } from 'react';
import './App.css';
import NavBar from './components/Header/NavBar';
import Content from './components/Main/Content';
import Lesson3 from './lessons/Lesson3/Lesson3';
import Lesson4 from './lessons/Lesson4/Lesson4';
import Lesson5 from './lessons/Lesson5/Lesson5';
import Lesson6 from './lessons/Lesson6/Lesson6';
import Lesson7 from './lessons/Lesson7/Lesson7';
import Lesson8 from './lessons/Lesson8/Lesson8';
import Lesson9 from './lessons/Lesson9/Lesson9';
import Lesson10 from './lessons/Lesson10/Lesson10';
import Footer from './components/Footer/Footer';

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
      {/* <Lesson4 /> */}
      {/* <Lesson5 /> */}
      {/* <Lesson6 /> */}
      {/* <Lesson7 /> */}
      {/* <Lesson8 /> */}
      <Lesson9 />
      <Footer />
    </div>
  );
};

export default App;
