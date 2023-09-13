import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string';
import axios from 'axios';

const AuthResult = () => {
  // 사용자 인증 코드 가져오기
  const queryParams = useLocation().search;
  const parsed = queryString.parse(queryParams);
  const code = parsed.code;

  const [accessToken, setAccessToken] = useState('');
  const [userSeqNo, setUserSeqNo] = useState('');

  const handleClick = () => {
    let requestOption = {
      // 메뉴얼을 보고 작성
      url: '/oauth/2.0/token',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      data: {
        code: code,
        client_id: 'a14c06cd-a39b-4d4c-a4cf-1682a4d9a9f5',
        client_secret: '3ff5a605-b3ff-4a25-aff6-041b5722a2c5',
        redirect_uri: 'http://localhost:3000/authResult',
        grant_type: 'authorization_code',
      },
    }

    axios(requestOption).then(({ data }) => {
      setAccessToken(data.access_token);
      setUserSeqNo(data.user_seq_no);

      if (data.rsp_code !== 'O0001') {
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('userSeqNo', data.userSeqNo);
        alert('저장 완료!');
      } else { // 인증요청거부라면, (인증시간이 만료되었다면,)
        alert('인증에 실패했습니다. 다시 시도해주세요!')
      }
    });
  };

  return (
    <div>
      <h1>토근 발급 / 인증</h1>
      <p>사용자 인증 코드: {code}</p>
      <button onClick={handleClick}>토근 발급하기</button>
      <p>accessToken: {accessToken}</p>
      <p>userSeqNo: {userSeqNo}</p>
    </div>
  )
}

export default AuthResult