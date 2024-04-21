import React, { useEffect, useState } from 'react'

function News() {
    const [news, setNews] = useState([])
    // 마운트 시에만 실행
    useEffect(() => {
      fetch(`https://newsapi.org/v2/top-headlines?country=kr&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
            .then((response) => response.json())  //json 형태로 변환
            .then((data) =>{
              console.log(data)
              setNews(data.articles)
            })  //fetch함수에서는 then이 두개 들어감.
            .catch((error) => console.error(error))
    }, [])

    return (
        <div>
            <h1>News</h1>
            <ul>{news.map((item,index)=>(
              <li key={index}>
                <a href={item.url} target="_blank" rel="noreferrer">
                  <img src={item.urlToImage} alt={item.title} />
                  {item.title}
                </a>
              </li>
            ))}</ul>
        </div>
    )
}

export default News