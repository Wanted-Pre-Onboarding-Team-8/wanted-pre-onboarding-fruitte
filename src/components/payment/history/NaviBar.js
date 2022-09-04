import styled from 'styled-components';

const NaviBar = () => {
  return (
    <Wrapper>
      <Navi>
        <ul>
          <li>주문 조회</li>
          <li>위시 리스트</li>
          <li>취소/교환/반품</li>
          <li>쿠폰</li>
          <li>1:1 문의</li>
          <li>정보 수정</li>
          <li>회원탈퇴</li>
        </ul>
      </Navi>
    </Wrapper>
  );
};

export default NaviBar;

const Wrapper = styled.div`
  max-width: 250px;
  width: 100%;
  height: 100vh;
  background-color: #eee;
`;

const Navi = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  li {
    padding: 10px;
    cursor: pointer;
    :hover {
      color: #4c9c2e;
    }
  }
`;
