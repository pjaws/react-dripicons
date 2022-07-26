import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Network3 = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M19.405 16.92V12.6C19.405 11.38 18.545 10.4 17.325 10.4H12.805V7.1V7.07998C13.585 6.75998 14.125 6.00002 14.125 5.12002C14.125 3.96002 13.165 3 12.005 3C10.825 3 9.88501 3.96002 9.88501 5.12002C9.88501 6.00002 10.445 6.75998 11.205 7.07998V7.1V10.4H6.685C5.465 10.4 4.60501 11.4 4.60501 12.6V16.92C3.80501 17.24 3.22501 18 3.22501 18.88C3.22501 20.04 4.14501 21 5.32501 21C6.50501 21 7.485 20.04 7.485 18.88C7.485 18 6.80501 17.24 6.20501 16.92V12.6C6.20501 12.26 6.365 12 6.685 12H11.205V16.92C10.405 17.24 9.88501 18 9.88501 18.88C9.88501 20.04 10.845 21 12.005 21C13.185 21 14.125 20.04 14.125 18.88C14.125 18 13.605 17.24 12.805 16.92V12H17.325C17.665 12 17.805 12.28 17.805 12.6V16.92C17.205 17.24 16.545 18 16.545 18.88C16.545 20.04 17.525 21 18.705 21C19.885 21 20.785 20.04 20.785 18.88C20.785 18 20.205 17.24 19.405 16.92ZM12.005 4.2C12.505 4.2 12.925 4.62002 12.925 5.12002C12.925 5.62002 12.505 6.03999 12.005 6.03999C11.505 6.03999 11.085 5.62002 11.085 5.12002C11.085 4.62002 11.505 4.2 12.005 4.2ZM5.285 19.8C4.785 19.8 4.365 19.38 4.365 18.88C4.365 18.38 4.785 17.96 5.285 17.96C5.785 17.96 6.20501 18.38 6.20501 18.88C6.20501 19.38 5.785 19.8 5.285 19.8ZM12.005 19.8C11.505 19.8 11.085 19.38 11.085 18.88C11.085 18.38 11.505 17.96 12.005 17.96C12.505 17.96 12.925 18.38 12.925 18.88C12.925 19.38 12.505 19.8 12.005 19.8ZM18.725 19.8C18.225 19.8 17.805 19.38 17.805 18.88C17.805 18.38 18.225 17.96 18.725 17.96C19.225 17.96 19.645 18.38 19.645 18.88C19.645 19.38 19.225 19.8 18.725 19.8Z" />
  </svg>
));

Network3.displayName = 'Network3';

Network3.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Network3.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default Network3;
