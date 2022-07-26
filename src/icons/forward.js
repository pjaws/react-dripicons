import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Forward = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M5.4051 17.8C5.3451 17.8 5.2651 17.8 5.2051 17.78C4.8451 17.68 4.6051 17.38 4.6051 17C4.6051 16.88 4.6251 13.82 6.9051 11.54C8.3651 10.08 10.3651 9.28001 12.8851 9.14001V7.00001C12.8851 6.68001 13.0851 6.38001 13.3851 6.26001C13.6851 6.14001 14.0251 6.20001 14.2651 6.44001L19.1851 11.44C19.4851 11.76 19.4851 12.26 19.1851 12.56L14.2651 17.56C14.0451 17.8 13.6851 17.86 13.3851 17.74C13.0851 17.62 12.8851 17.32 12.8851 17V14.84C11.2851 14.8 7.4851 14.96 6.1051 17.4C5.9651 17.64 5.6851 17.8 5.4051 17.8ZM12.4451 13.22C13.1851 13.22 13.7051 13.28 13.7651 13.28C14.1651 13.32 14.4851 13.66 14.4851 14.08V15.04L17.4851 12L14.4851 8.96001V9.92001C14.4851 10.36 14.1251 10.72 13.6851 10.72C11.2251 10.72 9.32511 11.38 8.0451 12.68C7.46511 13.26 7.0651 13.92 6.7851 14.54C8.6451 13.42 11.0051 13.22 12.4451 13.22Z" />
  </svg>
));

Forward.displayName = 'Forward';

Forward.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Forward.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default Forward;
