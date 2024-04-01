/* eslint-disable*/
function Hello(){
  console.log('Hello,world');
  return(
    <>
    <div>
      <h2>컴포넌트 만들기</h2>
    </div>
    <div>
      <p>Lorem,</p>
    </div>
    </>
  )
}

export function World() {
  return <h3>나의 세상!!</h3>
}

export function World2() {
  return <h3>나의 세상2!!</h3>
}

export default Hello
// export {World}