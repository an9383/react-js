/* eslint-disable*/

// const Nav = ({nav}) => {
//     // props.nav = [{title:'Home},{title:'About'},{title:'SignIn'}]


//     //for (let 초기값;조건식;증가){실행문}
//     for(let i =0;i<3;i++){
//         list.push(
//              <li key={nav.length}>
//                  <a href="#">{nav.title}</a>
//              </li>
//             )
//     }

//     return (
//         <nav>
//             <ul>{nav.map((item,index)=>{
//                   <li key={index}>
//                     <a href="#">{item.title}</a>
//                     </li>
//               })}</ul>
//         </nav>
//     )
//   }

// function Nav(props) {
//   // prop로 전달된 nav를 받아서 동적으로 li를 구성한 다음 배열에 담아준다.

//   const list = []
//   // props.nav.length = 3
//   for (let i = 0; i < props.nav.length; i++) {
//       // list 배열에 li를 추가한다.
//       list.push(
//           // li에 key를 추가해 주는 이유는 리액트가 배열의 요소를 추가, 삭제, 수정할 때 효율적으로 처리하기 위해서이다.
//           // props.nav[i].title = Home, About, SignIn
//           <li key={props.nav[i]}>
//               <a href="/">{props.nav[i].title}</a>
//           </li>
//       )
//   }

//   return (
//       // ul 태그 안에 list 배열을 넣어준다.
//       <nav>
//           <ul>{list}</ul>
//       </nav>
//   )
// }

// function Nav(props) {
//   // prop로 전달된 nav를 받아서 동적으로 li를 구성한 다음 배열에 담아준다.
//   // map((item, index) => { return ... }) 형태로 사용한다. item = 배열의 요소, index = 0, 1, 2
//   const list = props.nav.map((item, index) => (
//       // item.title = Home, About, js
//       // index = 0, 1, 2
//       <li key={index}>
//           <a href="/">{item.title}</a>
//       </li>
//   ))

//   return (
//       <nav>
//           <ul>{list}</ul>
//       </nav>
//   )
// }

// function Nav(props) {
//   return (
//       <nav>
//           <ul>
//               {props.nav.map((item, index) => (
//                   <li key={index}>
//                       <a href={'/sub/' + item.title}>{item.title}</a>
//                   </li>
//               ))}
//           </ul>
//       </nav>
//   )
// }

// function Nav(props) {
//   return (
//       <nav>
//           <ul>
//               {props.nav.map((item, index) => (
//                   <li key={index}>
//                       <a href={'/sub/' + item.title}>{item.title}</a>
//                   </li>
//               ))}
//           </ul>
//       </nav>
//   )
// }

const Nav = ({ nav }) => {
  // const { nav } = props

  return (
      <nav>
          <ul>
              {nav.map((item, index) => (
                  // item = { title: 'Home' }
                  <li key={index}>
                      <a href="#">{item.title}</a>
                  </li>
              ))}
          </ul>
      </nav>
  )
}

  export default Nav