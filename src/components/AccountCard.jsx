import React from 'react'

const AccountCard = ({ bankName, fintechUseNo }) => {
  const handleQrButton = () => {
    console.log("QR 버튼 클릭");
    window.location.href = `/qrcode?fintechUseNo=${fintechUseNo}`;
  };

  const handleBalanceButton = () => {
    console.log("잔액조회 버튼 클릭");
    window.location.href = `/balance?fintechUseNo=${fintechUseNo}`;
  };

  return (
    <div>
      <p>bankName: {bankName}</p>
      <p>fintechUseNo: {fintechUseNo}</p>
      <button onClick={handleQrButton}>QR코드</button>
      <button onClick={handleBalanceButton}>잔액조회</button>
    </div>
  )
}

export default AccountCard