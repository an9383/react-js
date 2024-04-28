import React, { useState, useRef } from 'react'

const UseEffect = () => {
  // const[count,setCount] = useState(0)
  const didMountRef = useRef(false)

  if (!didMountRef.current) {
    //최초 렌더링 시에만 실행
    didMountRef.current=true;
    return
  } else {
    console.log('업데이트 됐을 때')
  }
  const [timer,setTimer] = useState(0)
  const [isShow, setIsShow] = useState(true)
  
  const hideTimer = () => {
    setIsShow(false)
    setTimer(0)
  }

  const showTimer =() =>{
    setIsShow(true)
  }

  useEffect(()=>{
    let interval
    if(isShow){
      interval = setInterval(()=>{
          setTimer(timer+1)
        },1000)
      }
      return () => {
        console.log('타이머가 정리')
        clearInterval(interval)
      }
  },[isShow,timer])


  return (
    <div>
    {/* <strong>{count}</strong>
    <button onClick={()=>setCount(count+1)}>+1</button> */}

      <div>
        {isShow?(
                <div>
                <strong>{timer}</strong>
                <button onClick={hideTimer}>타이머 숨기기</button>
              </div>):(
        <button>타이머 보이기</button>)}

      </div>
    </div>
  )
}

export default UseEffect