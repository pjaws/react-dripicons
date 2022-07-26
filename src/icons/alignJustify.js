import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const AlignJustify = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M19.2051 6.39999H4.8051C4.3651 6.39999 4.0051 6.03999 4.0051 5.59999C4.0051 5.15999 4.3651 4.79999 4.8051 4.79999H19.2051C19.6451 4.79999 20.0051 5.15999 20.0051 5.59999C20.0051 6.03999 19.6451 6.39999 19.2051 6.39999ZM20.0051 9.87999C20.0051 9.43999 19.6451 9.07999 19.2051 9.07999H4.8051C4.3651 9.07999 4.0051 9.43999 4.0051 9.87999C4.0051 10.32 4.3651 10.68 4.8051 10.68H19.2051C19.6451 10.68 20.0051 10.32 20.0051 9.87999ZM20.0051 14.14C20.0051 13.7 19.6451 13.34 19.2051 13.34H4.8051C4.3651 13.34 4.0051 13.7 4.0051 14.14C4.0051 14.58 4.3651 14.94 4.8051 14.94H19.2051C19.6451 14.94 20.0051 14.58 20.0051 14.14ZM12.8051 18.4C12.8051 17.96 12.4451 17.6 12.0051 17.6H4.86511C4.42511 17.6 4.06511 17.96 4.06511 18.4C4.06511 18.84 4.42511 19.2 4.86511 19.2H12.0051C12.4451 19.2 12.8051 18.84 12.8051 18.4Z" />
  </svg>
));

AlignJustify.displayName = 'AlignJustify';

AlignJustify.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

AlignJustify.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default AlignJustify;
