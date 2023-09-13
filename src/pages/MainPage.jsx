import React from 'react'

const MainPage = () => {
  const handleClick = () => {
    // 새 창 열기
    const newWindow = window.open("", "_blank");
    const clientId = "a14c06cd-a39b-4d4c-a4cf-1682a4d9a9f5";

    // 주소 설정
    const authorizeUrl = `
    https://testapi.openbanking.or.kr/oauth/2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=http://localhost:3000/authResult&scope=login%20inquiry%20transfer&state=12345678901234567890123456789012&auth_type=0
    `;

    // 새 창의 위치를 지정하지 않으면 기본적으로 중앙에 열립니다.
    // 만약 위치를 지정하려면 다음과 같이 사용할 수 있습니다.
    // const windowOptions = 'width=800,height=600,left=100,top=100';

    // 새 창을 열고 주소로 이동
    newWindow.location.href = authorizeUrl;
  }

  return (
    <button onClick={handleClick}>본인인증하기</button>
  )
}

export default MainPage