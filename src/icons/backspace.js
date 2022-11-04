import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Backspace = forwardRef(({ color = 'currentColor', size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M21.205 11.92V15.46C21.205 15.94 20.905 16.34 20.405 16.34C19.905 16.34 19.605 15.94 19.605 15.46V12.8H5.94499L7.98501 14.82C8.32501 15.16 8.30499 15.72 7.94499 16.08C7.76499 16.26 7.52501 16.34 7.28501 16.34C7.06501 16.34 6.82499 16.26 6.64499 16.08L3.04499 12.54C2.88499 12.38 2.78501 12.14 2.78501 11.92C2.78501 11.68 2.88499 11.46 3.04499 11.3L6.625 7.75999C6.965 7.41999 7.54501 7.41999 7.88501 7.75999C8.22501 8.09999 8.22501 8.66 7.86501 9.02L5.805 11.04H20.245C20.485 11.04 20.745 11.14 20.905 11.3C21.105 11.46 21.205 11.7 21.205 11.92Z" />
  </svg>
));

Backspace.displayName = 'Backspace';

Backspace.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Backspace;
