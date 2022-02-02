import PropTypes from 'prop-types';

const Message = ({ children }) => (
  <div>{children}</div>
);

Message.defaultProps = {
  children: [],
};

Message.propTypes = {
  children: PropTypes.node,
};

export default Message;