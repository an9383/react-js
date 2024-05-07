// eslint-disable-next-line

//import React, { useReducer, useContext } from 'react';
import React, { useState, useContext } from 'react'
import Toolbar , {themes} from './grammar/Context'
// import {order} from './grammar/ContextOrder'
// import Footer from './components/layout/Footer';
// import Header from './components/layout/Header';
// import Home from './components/views/Home/Home';
// import Cat from "./Cat";
// import Event from './grammar/Event';
// import State from './grammar/State';
// import News from './views/news/News';
// import UseEffect from './grammar/UseEffect';
// import UseReducer from './grammar/UseReducer';

// createContext 함수를 사용하여 Context 생성
const ThemeContext = React.createContext(themes.light)

function App() {
  const navArr = [{title:'Home'}, {title:'About'}, {title:'SignIn'},]
  return (
    <ThemeContext.Provider value={themes.dark}>
        <Toolbar />
         {/* <UseReducer />
         <UseEffect />
         <News />
         <State />
         <Event />
         <Header title="Dashboard" nav={navArr} />
         <Home title="Home" desc="홈화면"/>
         <Home title="About" desc="소개화면"/>
         <Home title="SignIn" desc="로그인화면"/>
         <Footer /> */}
    </ThemeContext.Provider>
)
}

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

// const App = () => {
//   const navArr = [{title:'Home'}, {title:'About'}, {title:'SignIn'},]

//   return (
//       <div className="App">
//         <UseReducer />
//         <UseEffect />
//         {/* <Cat name="여름이" age="2"/>
//         <Cat name="가을이" age="3"/>
//         <Cat name="겨울이" age="4"/> */}
//         <News />
//         <State />
//         <Event />
//         <Header title="Dashboard" nav={navArr} />
//         <Home title="Home" desc="홈화면"/>
//         <Home title="About" desc="소개화면"/>
//         <Home title="SignIn" desc="로그인화면"/>
//         <Footer />
//       </div>
//   )
// }

export default App; //컴포넌트로 출력하게 만듬.index.js에서 사용
