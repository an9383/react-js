// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// function News() {
//     const [news, setNews] = useState([])
//     const [categoryList, setCategory] = useState('all')

//     // 마운트 시에만 실행
//     useEffect(() => {
//       // fetch(`https://newsapi.org/v2/top-headlines?country=kr&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
//       //       .then((response) => response.json())  //json 형태로 변환
//       //       .then((data) =>{
//       //         console.log(data)
//       //         setNews(data.articles)
//       //       })  //fetch함수에서는 then이 두개 들어감.
//       //       .catch((error) => console.error(error))

// function selectCategory(category) {
//   setCategory(category)
// }

//       //async/await
//         const fetchData = async() =>{

//           let response
//           try{
//             if(category ==='all'){
//               response === await axios.get(
//                 `https://newsapi.org/v2/top-headlines?country=kr&category=${category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
//               )
//             } else {
//               response === await axios.get(
//                 `https://newsapi.org/v2/top-headlines?country=kr&category=${category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
//               )
//             }
//              // const response = await fetch(`https://newsapi.org/v2/top-headlines?country=kr&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
//              const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=krapiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
//              //const data = await response.json()
//              //console.log(data)
//               setNews(response.data.articles)
//             } catch(error) {
//              console.error(error)
//             }
//           }
//         fetchData()
//     }, [category])

//     return (
//         <div>
//             <h1>News</h1>
//             <div>
//               {categoryList.map((item,index)=>(
//                 <button key={index} onClick={() => selectCategory(item.value)}>{item.name}</button>
//               ))}
//               <button>전체</button>
//               <button>비즈니스</button>
//               <button>엔터테인먼트</button>
//               <button>건강</button>
//               <button>과학</button>
//               <button>스포츠</button>
//               <button>기술</button>
//             </div>

//             <ul>{news.map((item,index)=>(
//               <li key={index}>
//                 <a href={item.url} target="_blank" rel="noreferrer">
//                   <img src={item.urlToImage} alt={item.title} />
//                   {item.title}
//                 </a>
//               </li>
//             ))}</ul>
//         </div>
//     )
// }

// export default News