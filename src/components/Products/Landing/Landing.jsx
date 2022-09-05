import { Wrapper, H1, Paragraph } from './LandingStyled';

function Landing() {
  const TITLE = 'FRUITTE';
  const PARAGRAPH_1 =
    '친환경 농가의 맛있고 바른 먹거리를 만났을때 게릴라로 열리는 프루떼의 반짝스토어';
  const PARAGRAPH_2 =
    '가장 알맞게 익었을때 농장에서 바로! 수확해서 배송해드립니다.';

  return (
    <Wrapper>
      <H1>{TITLE}</H1>
      <Paragraph>{PARAGRAPH_1}</Paragraph>
      <Paragraph>{PARAGRAPH_2}</Paragraph>
    </Wrapper>
  );
}

export default Landing;
