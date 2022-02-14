import PropTypes from 'prop-types';
import { Button1, ButtonWrapper } from './Button.style';

const Button = ({ onClick }) => (
  <ButtonWrapper>
    <Button1 type="button" onClick={onClick}>
      Load more
    </Button1>
  </ButtonWrapper>
);

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;