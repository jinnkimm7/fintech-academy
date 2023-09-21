# [핀테크 아카데미 (230911 - 230915)](https://www.kisa.or.kr/401/form?postSeq=3171&page=3)

## 강의를 들으며 학습한 내용

<details><summary>핀테크</summary>
<p>은행의 고유 업무: 주업무(수신/여신), 부가적인 업무(환업무/신탁/보관업무)</p>
<p>시간이 지날수록, 전산화가 진행될수록 은행 지점은 바뀔수 밖에 없다.</p>
<p>기술은 금융에 있어서 항상 존재해왔었다. (ex)주판 → ATM → 인터넷뱅킹</p>
<p>
핀테크 vs 빅테크 vs 빅뱅크
<ul>
  <li>
  빅테크: 이미 자체플랫폼을 보유해 갖고 있는 고객기반으로 서비스를 시작, 광범위한 데이터확보가능
  </li>
</ul>
</p>
<p>스타벅스: 뱅킹회사가 아닌데도 예치금액이 어마어마하다.</p>
<p>핀테크는 금융소비를 편리하게 해주는 기술으로, 기술을 활용하여 어떤 서비스를 제공해줄지 고민해보자.</p>

[빅테크-빅뱅크, 핀테크 전쟁 승자는
](https://m.mk.co.kr/luxmen/view.php?sc=&year=2021&no=184601)
</details>

<details><summary>오픈뱅킹</summary>
<p>오픈뱅킹이란? 핀테크기업과 개별은행이 별도의 제휴없이 핀테크 서비스를 소비자에게 원활하게 제공할 수 있도록 조회, 이체 등 핵심 금융 서비스를 표준화된 API 형태로 제공하는 은행권 공동의 개방형 인프라입니다.</p>

</details>

<details><summary>Oauth</summary>
<p>인증은 사용자가, 권한은 서비스 제공자에게 </p>

<p>오픈뱅킹은 사용자인증, 서비스등록확인 시 사용자의 동의를 획득하기 위하여 OAuth 3-legged 절차를 적용하며, 입금이체, 계좌실명조회 등과 같이 사용자가 개입되지 않는 경우에는 OAuth 2-legged 절차를 적용합니다.
</p>
<p>
3-legged
<img src="https://www.openbanking.or.kr/images/img_openapi_openapi_07.jpg">
</p>
<p>
2-legged
<img src="https://www.openbanking.or.kr/images/img_openapi_openapi_08.jpg">
</p>
</details>

<details><summary>API, RESTful</summary>
REST 방식으로 구현된 금융결제원 API 문서를 읽고, Postman을 이용하여 사용자 인증, 사용자 계좌정보, 거래내역 조회, 출금이체 정보를 가져오는 코드를 작성했습니다.
</details>