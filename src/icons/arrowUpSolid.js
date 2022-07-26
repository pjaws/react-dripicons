import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowUpSolid = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M18.585 10.36L12.585 4.24C12.425 4.08 12.225 4 12.005 4C11.785 4 11.585 4.08 11.425 4.24L5.42501 10.36C5.20501 10.58 5.12501 10.98 5.26501 11.26C5.38501 11.56 5.68501 11.78 6.00501 11.78H8.60501V19.18C8.60501 19.62 9.06501 19.98 9.50501 19.98H14.505C14.945 19.98 15.405 19.62 15.405 19.18V11.78H18.005C18.325 11.78 18.625 11.54 18.745 11.26C18.865 10.98 18.805 10.6 18.585 10.36Z" />
  </svg>
));

ArrowUpSolid.displayName = 'ArrowUpSolid';

ArrowUpSolid.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowUpSolid.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default ArrowUpSolid;
