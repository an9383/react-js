import Nav from "./Nav"

//기명함수
function Header({ title, nav }) {
  // 구조분해 할당을 사용하여 props를 분리한다.
  // const { title, nav } = props;
  return (
      <header>
          <h1>{title}</h1>
          <Nav nav={nav} />
      </header>
  )
}

// function Header(props) {
// return (
//   // props.nav = navArr
//   <header>
//       <h1>{props.title}</h1>
//       <Nav nav={props.nav} />
//   </header>
// )
// }

//JSX처리방식임.
export default Header;
