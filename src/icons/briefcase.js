import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Briefcase = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20.9651 7.37998C20.8051 7.21998 20.6051 7.2 20.4051 7.2H16.2051V4.8C16.2051 4.36 15.8051 4 15.3651 4H8.6451C8.2051 4 7.80511 4.36 7.80511 4.8V7.2H3.60511C3.16511 7.2 2.80511 7.46 2.80511 7.9V19.2C2.80511 19.64 3.16511 20 3.60511 20H20.4051C20.8451 20 21.2051 19.64 21.2051 19.2V7.93999C21.2051 7.71999 21.1251 7.53998 20.9651 7.37998ZM9.40511 5.6H14.6051V7.2H9.40511V5.6ZM19.6051 8.8V13H14.0051V12.7C14.0051 12.36 13.6851 12.2 13.3451 12.2H10.6451C10.3051 12.2 9.98512 12.38 9.98512 12.7V13H4.38512V8.8H19.6051ZM12.8051 13.4V13.8H11.2051V13.4H12.8051ZM4.40511 18.4V14.2H10.0051V14.4C10.0051 14.74 10.3251 15 10.6651 15H13.3651C13.7051 15 14.0251 14.72 14.0251 14.4V14.2H19.6251V18.4H4.40511Z" />
  </svg>
));

Briefcase.displayName = 'Briefcase';

Briefcase.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Briefcase.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default Briefcase;
