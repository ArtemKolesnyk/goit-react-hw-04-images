import errorImage from '../../images/sadsmail.jpg';
import { ErrImage } from './ErrorBox.styled';

export default function ErrorBox() {
  return (
    <ErrImage role="alert">
      <img src={errorImage} width="240" alt="sadsmail" />
      <p>Sadly, nothing not found</p>
    </ErrImage>
  );
}
