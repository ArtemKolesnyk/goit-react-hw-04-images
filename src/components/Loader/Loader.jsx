import {
  Text,
  Spinner,
  Inner,
  InnerOne,
  InnerTwo,
  InnerThree,
} from './Loader.styled';

const Loader = () => {
  return (
    <Spinner>
      <Inner>
        <InnerOne></InnerOne>
        <InnerTwo></InnerTwo>
        <InnerThree></InnerThree>
      </Inner>
      <Text>Loading...</Text>
    </Spinner>
  );
};

export default Loader;
