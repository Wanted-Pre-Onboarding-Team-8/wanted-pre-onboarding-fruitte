import styled from 'styled-components';

const Button = styled.button`
  width: ${(props) => (props.width ? `${props.width}` : `100%`)};
  height: 50px;
  background-color: ${(props) =>
    props.theme === 'main' ? '#4CB481' : '#cecece'};
  color: #fff;
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}` : `17px`)};

  :hover {
    transition: all 0.15s ease-in-out;
    background-color: ${(props) =>
      props.theme === 'main' ? '#CF6000' : '#aaaaaa'};
  }
  :disabled {
    cursor: default;
  }
`;

export default function CustomButton(props) {
  return (
    <Button
      theme={props.theme}
      width={props.width}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.name}
    </Button>
  );
}
