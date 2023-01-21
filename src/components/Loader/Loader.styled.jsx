import styled, { keyframes } from 'styled-components';

export const Spinner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 10000;
  top: calc(50% - 32px);
  left: calc(50% - 32px);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  perspective: 800px;
  visibility: visible;
  opacity: 1;
  transition: opacity 600ms ease-in-out, visibility 0s 600ms;
  background-color: opacity 600ms teal, visibility 0s 600ms;
`;

export const Inner = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const rotateOne = keyframes`
  0% {
      transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
    }
`;

export const InnerOne = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  left: 0%;
  top: 0%;
  animation: ${rotateOne} 1s linear infinite;
  border-bottom: 6px solid #ff6b08;
`;

const rotateTwo = keyframes`
  from {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
  to {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
`;

export const InnerTwo = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  right: 0%;
  top: 0%;
  animation: ${rotateTwo} 1s linear infinite;
  border-right: 6px solid #ff6b08;
`;

const rotateThree = keyframes`
  0% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
`;

export const InnerThree = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  right: 0%;
  bottom: 0%;
  animation: ${rotateThree} 1s linear infinite;
  border-top: 6px solid #ff6b08;
`;

export const Text = styled.div`
  font-size: xx-large;
  color: teal;
  display: inline-block;
  margin-bottom: -220px;
`;
