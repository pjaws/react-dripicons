import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Message = forwardRef(({ color = 'currentColor', size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20.405 4H3.60499C3.16499 4 2.80499 4.36 2.80499 4.8V15.02C2.80499 15.46 3.16499 15.8 3.60499 15.8H13.005V19.2C13.005 19.54 13.265 19.84 13.565 19.96C13.665 20 13.765 20 13.865 20C14.105 20 14.325 19.9 14.485 19.72L17.805 15.8H20.405C20.845 15.8 21.205 15.46 21.205 15.02V4.8C21.205 4.36 20.845 4 20.405 4ZM19.605 14.2H17.445C17.205 14.2 16.945 14.32 16.785 14.48L14.605 17V15C14.605 14.56 14.325 14.18 13.885 14.18H4.40499V5.58H19.605V14.2ZM6.52499 8.4C6.52499 7.96 6.88499 7.6 7.32499 7.6H13.125C13.565 7.6 13.925 7.96 13.925 8.4C13.925 8.84 13.565 9.2 13.125 9.2H7.32499C6.88499 9.2 6.52499 8.84 6.52499 8.4ZM15.305 9.02C15.165 8.88 15.065 8.66001 15.065 8.46001C15.065 8.24001 15.145 8.04 15.305 7.9C15.465 7.74 15.665 7.66001 15.865 7.66001C16.085 7.66001 16.285 7.74 16.425 7.9C16.565 8.04 16.665 8.26001 16.665 8.46001C16.665 8.68001 16.585 8.88 16.425 9.02C16.265 9.18 16.065 9.26001 15.865 9.26001C15.665 9.24001 15.465 9.16 15.305 9.02Z" />
  </svg>
));

Message.displayName = 'Message';

Message.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Message;
