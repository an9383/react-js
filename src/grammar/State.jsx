/* eslint-disable*/

import React, { useState } from 'react'
import switchOn from '../assets/images/switch-on.svg'
import switchOff from '../assets/images/switch-off.svg'

function State() {

    // let name ='김겨울'
    // function changeName(name) {
        
    //     name = name ==='김겨울'?'김가을':'김겨울'
    //     // name = '김가을'
    //     console.log(name)
    //     document.querySelector('.name').innerText = name
    // }

    const [name, setName] = useState('김겨울')

    const [number, setNumber] = useState(0)

    const [isOn, setIsOn] = useState(false)

    const [isOff, setIsOff] = useState(true)

    const [isToggled, setIsToggled] = useState()

    function chageOn() {
        setIsOn(!isOn)
    }

    function changeName() {
        setName(name === '김겨울'?'김가을':'김겨울')
    }
    
    function increase() {
        setNumber(number+1)
    }
    
    function decrease() {
        setNumber(number-1)
    }

    return (
        <>
            <div>
                <h3>가을 겨울 이름 바꾸기</h3>
                <strong className="name">{name}</strong>
                <button onClick={changeName}>이름바꾸기</button>
                {/* <button onClick={() => setName(name === '김겨울'?'김가을':'김겨울')}>Name Change</button> */}
            </div>
            <div>
                <h3>이미지 토글</h3>
                <img src={isOn ? {switchOn} : {switchOff}} alt="switch"/>
                <div>꺼짐</div>
            </div>
            <div>
                <h3>Counter</h3>
                <strong>{number}</strong>
                <button onClick={()=> setNumber(number+1)}>증가</button>
                <button onClick={()=> setNumber(number-1)}>감소</button>
            </div>
        </>
    )
}


export default State