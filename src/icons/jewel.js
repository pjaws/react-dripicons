import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Jewel = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20.9849 9.03997L17.6049 5.43997C17.4449 5.27997 17.2449 5.17998 17.0249 5.17998H6.98495C6.76495 5.17998 6.54494 5.27997 6.40494 5.43997L3.02494 9.03997C2.72494 9.35997 2.74494 9.83999 3.04494 10.16L11.4449 18.56C11.6049 18.72 11.8049 18.8 12.0049 18.8C12.2249 18.8 12.4249 18.72 12.5649 18.56L20.9649 10.16C21.2849 9.85999 21.2849 9.35997 20.9849 9.03997ZM8.28495 10.2L9.76494 14.52L5.44494 10.2H8.28495ZM12.6849 6.79998L13.9649 8.79998H10.0249L11.3049 6.79998H12.6849ZM12.0049 16.86V16.82L9.76494 10.2H14.2449L12.0049 16.82V16.86ZM15.7249 10.2H18.5849L14.2649 14.52L15.7249 10.2ZM18.6449 8.79998H15.6049L14.3249 6.79998H16.6649L18.6449 8.79998ZM7.32494 6.79998H9.66494L8.38495 8.79998H5.34494L7.32494 6.79998Z" />
  </svg>
));

Jewel.displayName = 'Jewel';

Jewel.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Jewel.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default Jewel;
