import axios from 'axios';
import queryString from 'query-string';
import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import TransactionList from '../components/TransactionList';

const Balance = () => {
  const queryParams = useLocation().search;
  const parsed = queryString.parse(queryParams);
  const fintechNo = parsed.fintechUseNo;

  const [balance, setBalance] = useState("0");
  const [transactions, setTranscations] = useState("0");

  useEffect(() => {
    getBalance();
    getTransaction();
  });

  const getBalance = () => {
    //잔액조회 리퀘스트 작성하기
    const accessToken = localStorage.getItem("accessToken");
    let requestOption = {
      url: "/v2.0/account/balance/fin_num",
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        bank_tran_id: genTrasId(),
        fintech_use_num: fintechNo,
        tran_dtime: "20230914103600",
      },
    };

    axios(requestOption).then((response) => {
      console.log(response);
      setBalance(response.data.balance_amt);
    });
  };

  const getTransaction = () => {
    const accessToken = localStorage.getItem("accessToken");
    let requestOption = {
      url: "/v2.0/account/transaction_list/fin_num",
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        bank_tran_id: genTrasId(),
        fintech_use_num: fintechNo,
        inquiry_type: "A",
        inquiry_base: "D",
        from_date: "20230912",
        to_date: "20230914",
        sort_order: "A",
        tran_dtime: "20230914103600",
      },
    };

    axios(requestOption).then(({ data }) => {
      setTranscations(data.res_list);
    });
  };

  function generateRandom9DigitNumber() {
    const min = 100000000; // Minimum value (smallest 9-digit number)
    const max = 999999999; // Maximum value (largest 9-digit number)

    const random9DigitNumber =
      Math.floor(Math.random() * (max - min + 1)) + min;
    return random9DigitNumber.toString();
  }

  const genTrasId = () => {
    return "M202300440U" + generateRandom9DigitNumber();
  };

  return (
    <div>
      <div>
        {balance}
      </div>

      <div>
        <span>조회기간</span>
        <label for="startDate">
          <input type="date"
            id="startDate"
            max="2019-05-20"
            min="2023-08-14"
            value="2023-08-14" />
        </label>
        <span>-</span>
        <label for="startDate">
          <input type="date"
            id="startDate"
            max="2019-05-20"
            min="2023-09-14"
            value="2023-09-14" />
        </label>
      </div>

      <TransactionList transactionList={transactions} />

    </div>
  );
};

export default Balance;