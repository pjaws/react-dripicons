import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Network5 = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12.8051 16.92V7.1V7.07998C13.5651 6.75998 14.1051 6.00002 14.1051 5.12002C14.1051 3.96002 13.1651 3 12.0051 3C10.8451 3 9.90511 3.96002 9.90511 5.12002C9.90511 6.00002 10.4451 6.75998 11.2051 7.07998V7.1V16.92C10.4051 17.24 9.90511 18 9.90511 18.88C9.90511 20.04 10.8451 21 12.0051 21C13.1651 21 14.1051 20.04 14.1051 18.88C14.1051 18 13.6051 17.24 12.8051 16.92ZM12.0051 4.2C12.5051 4.2 12.9051 4.62002 12.9051 5.12002C12.9051 5.62002 12.5051 6.03999 12.0051 6.03999C11.5051 6.03999 11.1051 5.62002 11.1051 5.12002C11.1051 4.62002 11.5051 4.2 12.0051 4.2ZM12.0051 19.8C11.5051 19.8 11.1051 19.38 11.1051 18.88C11.1051 18.38 11.5051 17.96 12.0051 17.96C12.5051 17.96 12.9051 18.38 12.9051 18.88C12.9051 19.38 12.5051 19.8 12.0051 19.8Z" />
  </svg>
));

Network5.displayName = 'Network5';

Network5.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Network5.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default Network5;
