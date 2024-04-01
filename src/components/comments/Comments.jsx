/* eslint-disable*/

const Comments = () => {
    const users = [
      {
          name: '겨울이',
          img: 'https://assets.chatgpt4google.com/assets/promo/43.gif',
      },
      {
          name: '가을이',
          img: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
      },
  ]

    const commentData = [{
        user: users[0],
        text: '난 예민해. 아무거나 먹지 않아.',
        date: '2024.03.31',
    },
    {
        user:users[1],
        text: '난 사료를 좋아해. 많이 많이 먹어.',
        date: '2024.05.05',
    }
    ]

return (
    <div>
        <h2>Comments</h2>
        {commentData.map((item, index) => (
              // index = 0, 1
              // item = comments[0], comments[1] 순서대로 배열의 요소를 꺼낸다.
              <Comment key={index} data={item} />
          ))}
    </div>
)
}

const Comment = ({data}) => {
    return(
    <div>
        <User user={data.user}/>
        <p>{data.text}</p>
        <time>{data.date}</time>
    </div>
    )
}

const User = ({user}) => {
    return (
        <div>
            <img src={user.img} alt="겨울이"></img>
            <p>{user.name}</p>
        </div>
    )
}

export default Comments