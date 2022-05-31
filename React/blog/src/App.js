import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() { //css에서는 class 하지만 jsx에서는 className

    let post = '강남 고기 맛집'; 
    let posts = '변수'; //{}안에 변수명을 적으면 데이터 바인딩이 된다.
    let fontt = {color : 'blue', fontSize : '30px'}; //이런 방식도 가능하다 
    function 함수(){
      return '함수';
    }


  //사용하려면 import를 해줘야 함   import React, {useState} from 'react';
  //state를 사용하는 이유 : 웹이 APP처럼 동작하게 만들고 싶어서
  //state는 변경되면 HTML이 자동으로 재렌더링이 된다. 즉 새로고침 없이 바귐
  //자주 바뀌는 데이터는 이렇게 저장하자

  // <span onClick = { () => {} } 
  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 고기 맛집','광안리 조개 맛집']);//[state데이터, state데이터 변경 함수]
  let [따봉, 따봉변경 ] = useState(0);

  function 제목바꾸기(){ //데이터를 완전이 갈아치운다
    //복사본을 하나 생성 후 수정
    var newArray = [...글제목]; //DeepCopy를 해야 한다.
    newArray[0] = '여자 코트 추천'; //웬만하면 원본 state는 건들지 않는다. 
    글제목변경( newArray );
  }

  //--------------------제목 정렬기능 추가해보기 -------------------
  
  return ( //return 에 ()를 열고 안에 코드를 짜면 된다.
    <div className="App">
      <div className = "black-nav">  
        <div style ={ fontt }>개발 Blog</div>
      </div>
      <img src= {logo}></img>
      <h4>그냥 변수를 넣어도 되고 함수명을 적어줘도 된다. |{posts} | {함수()}|</h4> 
      <div className = "list">
        <button onClick={ 제목바꾸기}>버튼</button>
        <h3>{글제목[0]} <span onClick={ () => { 따봉변경(따봉+1) } }>👍</span> {따봉} </h3> 
        <p>01월 07일 발행</p>
        <hr/>
      </div>
      <div className = "list">
        <h3>{ 글제목[1] } </h3>
        <p>02월 17일 발행</p>
        <hr/>
      </div>
      <div className = "list">
        <h3>{ 글제목[2] } </h3>
        <p>05월 31일 발행</p>
        <hr/>
      </div>
      
    </div>
  );
}

export default App;
