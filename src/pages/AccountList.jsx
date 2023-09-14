import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AccountCard from '../components/AccountCard';

const AccountList = () => {
  const [accountList, setAccountList] = useState([]);

  useEffect(() => {
    getAccountList();
  }, []);

  const getAccountList = () => {
    const ACCESS_TOKEN = localStorage.getItem('accessToken');
    const USER_SEQ_NO = localStorage.getItem('userSeqNo');

    let requestOption = {
      url: "/v2.0/user/me",
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        Authorization:
          `Bearer ${ACCESS_TOKEN}`,
      },
      params: {
        user_seq_no: USER_SEQ_NO,
      },
    };

    axios(requestOption).then((res) => {
      console.log(res);
      setAccountList(res.data.res_list);
    });
  };

  return (
    <div>
      {
        accountList?.map((account) => {
          return (
            <AccountCard
              key={account.fintech_use_num}
              bankName={account.bank_name}
              fintechUseNo={account.fintech_use_num}
            />
          )
        })
      }

    </div>
  )
}

export default AccountList