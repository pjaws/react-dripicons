import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Warning = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20.405 20.2H3.60499C3.32499 20.2 3.06499 20.04 2.90499 19.8C2.76499 19.56 2.76499 19.26 2.90499 19L11.305 4.19999C11.445 3.93999 11.705 3.79999 12.005 3.79999C12.305 3.79999 12.565 3.95999 12.705 4.19999L21.105 19C21.245 19.24 21.245 19.56 21.105 19.8C20.945 20.04 20.685 20.2 20.405 20.2ZM4.98499 18.6H19.045L12.025 6.21998L4.98499 18.6ZM12.805 13.82V10.1C12.805 9.65999 12.445 9.29999 12.005 9.29999C11.565 9.29999 11.205 9.65999 11.205 10.1V13.82C11.205 14.26 11.565 14.62 12.005 14.62C12.445 14.62 12.805 14.26 12.805 13.82ZM12.705 17.14C12.885 16.96 13.005 16.7 13.005 16.44C13.005 16.18 12.905 15.92 12.705 15.74C12.525 15.56 12.265 15.44 12.005 15.44C11.745 15.44 11.485 15.54 11.305 15.74C11.125 15.92 11.005 16.18 11.005 16.44C11.005 16.7 11.105 16.96 11.305 17.14C11.485 17.32 11.745 17.44 12.005 17.44C12.265 17.44 12.525 17.32 12.705 17.14Z" />
  </svg>
));

Warning.displayName = 'Warning';

Warning.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Warning.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default Warning;