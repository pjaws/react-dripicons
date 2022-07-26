import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const AlignRight = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M19.2051 6.39999H4.8051C4.3651 6.39999 4.0051 6.03999 4.0051 5.59999C4.0051 5.15999 4.3651 4.79999 4.8051 4.79999H19.2051C19.6451 4.79999 20.0051 5.15999 20.0051 5.59999C20.0051 6.03999 19.6451 6.39999 19.2051 6.39999ZM20.0051 9.87999C20.0051 9.43999 19.6451 9.07999 19.2051 9.07999H10.9251C10.4851 9.07999 10.1251 9.43999 10.1251 9.87999C10.1251 10.32 10.4851 10.68 10.9251 10.68H19.2051C19.6451 10.68 20.0051 10.32 20.0051 9.87999ZM20.0051 14.14C20.0051 13.7 19.6451 13.34 19.2051 13.34H8.4851C8.0451 13.34 7.6851 13.7 7.6851 14.14C7.6851 14.58 8.0451 14.94 8.4851 14.94H19.2051C19.6451 14.94 20.0051 14.58 20.0051 14.14ZM19.9451 18.4C19.9451 17.96 19.5851 17.6 19.1451 17.6H5.52509C5.08509 17.6 4.72509 17.96 4.72509 18.4C4.72509 18.84 5.08509 19.2 5.52509 19.2H19.1451C19.5851 19.2 19.9451 18.84 19.9451 18.4Z" />
  </svg>
));

AlignRight.displayName = 'AlignRight';

AlignRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

AlignRight.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default AlignRight;
