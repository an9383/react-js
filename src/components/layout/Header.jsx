import Nav from './Nav'

function Header({ title, nav }) {
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
