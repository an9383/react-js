/* eslint-disable*/
import React, { useState } from 'react';

const Event = () => {

    function handleClick(event){
        //alert('버튼클릭')
        console.log(event); // 이벤트 객체 (MouseEvent)
        console.log(event.target); // 이벤트가 발생한 DOM 요소 (button)
        console.log(event.type); // 이벤트 타입 (click)
    }
    const handleChange = (event) => {
      document.querySelector(".text-value").innerText = event.target.value;
    }
    const handleOver = (event) => {
        event.target.style.backgroundColor = 'red'
        event.target.style.fontColor = 'white'
    }
    const [state,setState] = useState(0)

    const handleState = () => {
        setState(state +1)
    }

    const [state2,setState2] = useState(0)

    const handleState2 = () => {
        setState2(state2 +1)
    }

    return (
        <div>
            <h2>클릭하여 상태 변경</h2>
            <button onClick={handleState}>{state}</button>
            {state >= 5 ? <p>5이상</p>:<p>5이하</p>}

            <h1>이벤트</h1>
            <button onClick={handleState2}>{state2}</button>

            <h2>입력 이벤트</h2>
            <input onChange={handleChange} type="text" placeholder="문구를 입력해주세요." />
            <div className="text-value"></div>

            <h2>마우스 오버 이벤트</h2>
            <div onMouseOver={handleOver}>마우스 오버</div>

        </div>
    )
}

export default Event