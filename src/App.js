// eslint-disable-next-line

import React from 'react';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Home from './components/views/Home/Home';
//import Cat from "./Cat";
import Event from './grammar/Event';
import State from './grammar/State';
import News from './views/news/News';

// function App() {
//   //  const navArr = [{title:'Home'}, {title:'About'}, {title:'SignIn'},]
//   return (
//       <div className="App">
//         <Event />
//         <Cat name="여름이" age="2"/>
//         <Cat name="가을이" age="3"/>
//         <Cat name="겨울이" age="4"/>
//         {/* <Header title="Dashboard" nav={navArr} /> */}
//         {/* <Header title="Dashboard" /> */}
//         <Home title="Home" desc="홈화면"/>
//         <Home title="About" desc="소개화면"/>
//         <Home title="SignIn" desc="로그인화면"/>
//         {/* <Footer /> */}
//     </div>
//   );
// }

const App = () => {
  const navArr = [{title:'Home'}, {title:'About'}, {title:'SignIn'},]
  return (
      <div className="App">
        {/* <Cat name="여름이" age="2"/>
        <Cat name="가을이" age="3"/>
        <Cat name="겨울이" age="4"/> */}
        <News />
        <State />
        <Event />
        <Header title="Dashboard" nav={navArr} />
        <Home title="Home" desc="홈화면"/>
        <Home title="About" desc="소개화면"/>
        <Home title="SignIn" desc="로그인화면"/>
        <Footer />
      </div>
  )
}

export default App; //컴포넌트로 출력하게 만듬.index.js에서 사용
