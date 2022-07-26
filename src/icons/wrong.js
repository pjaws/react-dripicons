import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Wrong = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M18.505 5.5C14.925 1.92 9.08499 1.92 5.48499 5.5C1.90499 9.08 1.90499 14.92 5.48499 18.52C7.28499 20.32 9.64499 21.22 11.985 21.22C14.345 21.22 16.705 20.32 18.485 18.52C22.105 14.92 22.105 9.08 18.505 5.5ZM6.62499 17.38C3.84499 14.6 3.66499 10.2 6.08499 7.22L16.785 17.92C13.805 20.32 9.40499 20.16 6.62499 17.38ZM17.925 16.78L7.22499 6.08001C8.60499 4.96001 10.305 4.4 12.005 4.4C13.945 4.4 15.905 5.14 17.385 6.62C20.165 9.4 20.325 13.8 17.925 16.78Z" />
  </svg>
));

Wrong.displayName = 'Wrong';

Wrong.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Wrong.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default Wrong;
