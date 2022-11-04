import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowRight = forwardRef(({ color = 'currentColor', size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M19.765 11.42L13.645 5.42002C13.405 5.20002 13.025 5.12002 12.745 5.26002C12.445 5.38002 12.225 5.68002 12.225 6.00002V8.60002H4.82499C4.38499 8.60002 4.02499 9.06002 4.02499 9.50002V14.5C4.02499 14.94 4.38499 15.4 4.82499 15.4H12.225V18C12.225 18.32 12.465 18.62 12.745 18.74C12.845 18.78 12.965 18.8 13.065 18.8C13.265 18.8 13.485 18.72 13.625 18.58L19.745 12.58C19.905 12.42 19.985 12.22 19.985 12C19.985 11.78 19.925 11.58 19.765 11.42ZM13.805 16.1V14.5C13.805 14.06 13.525 13.8 13.085 13.8H5.60499V10.2H13.085C13.525 10.2 13.805 9.94002 13.805 9.50002V7.90002L17.985 12L13.805 16.1Z" />
  </svg>
));

ArrowRight.displayName = 'ArrowRight';

ArrowRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ArrowRight;
