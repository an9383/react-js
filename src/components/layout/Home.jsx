//기명함수
/* eslint-disable*/
function Home() {
  const props = {
    title: "Home",
    des: "홈화면",
  };

  return (
    <article>
      <h2>{title}</h2>
      <p>이 페이지는 {des} 입니다.</p>
    </article>
  );
}

//JSX처리방식임.

export default Home;
