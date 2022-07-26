import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const GraphPie = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M9.54499 10.24H3.52499C3.14499 10.24 2.82499 9.92 2.82499 9.54C2.82499 5.82 5.84499 2.82 9.54499 2.82C9.92499 2.82 10.245 3.14 10.245 3.52V9.54C10.245 9.92 9.92499 10.24 9.54499 10.24ZM4.26501 8.82H8.84499V4.24C6.46499 4.56 4.56501 6.46 4.26501 8.82ZM12.625 21.2C7.88499 21.2 4.04499 17.52 4.04499 12.98C4.04499 12.54 4.40499 12.18 4.84499 12.18H12.185V4.84C12.185 4.4 12.545 4.04 12.985 4.04C17.445 4.04 21.205 7.98 21.205 12.62C21.205 17.34 17.345 21.2 12.625 21.2ZM5.705 13.78C6.125 17.04 9.06499 19.6 12.625 19.6C16.465 19.6 19.605 16.48 19.605 12.62C19.605 9.12 17.025 6.14001 13.785 5.70001V12.98C13.785 13.42 13.425 13.78 12.985 13.78H5.705Z" />
  </svg>
));

GraphPie.displayName = 'GraphPie';

GraphPie.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GraphPie.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default GraphPie;
