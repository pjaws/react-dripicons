import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const AlignCenter = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M19.2051 6.39999H4.8051C4.3651 6.39999 4.0051 6.03999 4.0051 5.59999C4.0051 5.15999 4.3651 4.79999 4.8051 4.79999H19.2051C19.6451 4.79999 20.0051 5.15999 20.0051 5.59999C20.0051 6.03999 19.6451 6.39999 19.2051 6.39999ZM16.9451 9.87999C16.9451 9.43999 16.5851 9.07999 16.1451 9.07999H7.86509C7.42509 9.07999 7.06509 9.43999 7.06509 9.87999C7.06509 10.32 7.42509 10.68 7.86509 10.68H16.1451C16.5851 10.68 16.9451 10.32 16.9451 9.87999ZM18.1651 14.14C18.1651 13.7 17.8051 13.34 17.3651 13.34H6.6451C6.2051 13.34 5.8451 13.7 5.8451 14.14C5.8451 14.58 6.2051 14.94 6.6451 14.94H17.3651C17.8051 14.94 18.1651 14.58 18.1651 14.14ZM19.6251 18.4C19.6251 17.96 19.2651 17.6 18.8251 17.6H5.2051C4.7651 17.6 4.4051 17.96 4.4051 18.4C4.4051 18.84 4.7651 19.2 5.2051 19.2H18.8251C19.2651 19.2 19.6251 18.84 19.6251 18.4Z" />
  </svg>
));

AlignCenter.displayName = 'AlignCenter';

AlignCenter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

AlignCenter.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default AlignCenter;
