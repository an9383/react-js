import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [color, setColor] = useState('yellow') // 초기 색상을 'yellow'로 설정

    // 컴포넌트가 마운팅될 때, 업데이트될 때, 언마운팅될 때 실행되는 useEffect

    useEffect(() => {
        // Mounting
        // 페이지가 마운팅될 때 body의 배경색을 'color' 상태의 값으로 설정
        document.body.style.backgroundColor = color
        document.body.id = 'body'
        document.body.classList.add(color)

        // Unmounting
        // 페이지가 언마운팅될 때 body의 배경색을 흰색으로 변경, id 제거, class 제거
        return () => {
            document.body.style.backgroundColor = 'white'
            document.body.id = ''
            document.body.classList.remove(color)
        }
    }, [color]) // 'color' 상태가 변할 때마다 이 useEffect가 실행됩니다.

    // Updating
    useEffect(() => {
        console.log(`색상이 ${color}로 변경되었습니다.`)
    }, [color]) // 'color' 상태가 변할 때마다 이 useEffect가 실행됩니다.

    // 버튼 클릭 시 'color' 상태를 토글하는 함수
    const toggleColor = () => {
        setColor((prevColor) => (prevColor === 'yellow' ? 'blue' : 'yellow'))
    }

    return (
        <div>
            <div>안녕하세요</div>
            <button onClick={toggleColor}>색상 변경</button>
        </div>
    )
}

export default UseEffect