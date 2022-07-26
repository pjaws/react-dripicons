import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Card = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M21.205 7.47998C21.205 6.65998 20.545 6 19.725 6H4.265C3.445 6 2.785 6.65998 2.785 7.47998V16.54C2.785 17.36 3.445 18.02 4.265 18.02H19.725C20.545 18.02 21.205 17.36 21.205 16.54V7.47998ZM19.605 7.6V9H4.405V7.6H19.605ZM4.405 16.4V11.4H19.605V16.4H4.405ZM18.105 13.8C18.105 14.24 17.745 14.6 17.305 14.6H13.505C13.065 14.6 12.705 14.24 12.705 13.8C12.705 13.36 13.065 13 13.505 13H17.305C17.745 13 18.105 13.36 18.105 13.8Z" />
  </svg>
));

Card.displayName = 'Card';

Card.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Card.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default Card;
