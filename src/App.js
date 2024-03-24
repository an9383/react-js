/* eslint-disable*/
//import logo from './logo.svg';
import "./App.css";
import Header from "./components/layout/Header";
//import Footer from './components/layout/Footer';
import Home from './components/layout/Home';
//import Hello, {World, World2} from './module';

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">about</a>
        </li>
        <li>
          <a href="#">signup</a>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  //일반함수로 만들었음.

  const listArr = [
    { title: "Home", des: "홈화면" },
    { title: "About", des: "소개페이지" },
  ];
  return (
    <>
      <Header />
      <Nav />
      {listArr.map((item, index) => (
        <Home key={index} title={item.title} des={item.des} />
      ))}
    </>
  );
}

export default App; //컴포넌트로 출력하게 만듬.index.js에서 사용
