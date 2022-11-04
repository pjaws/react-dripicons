import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BatteryEmpty = forwardRef(
  ({ color = 'currentColor', size = 24, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M20.4051 9.8H19.8051V7.6C19.8051 7.16 19.4651 6.8 19.0051 6.8H3.60511C3.16511 6.8 2.80511 7.16 2.80511 7.6V16.4C2.80511 16.84 3.16511 17.2 3.60511 17.2H19.0051C19.4451 17.2 19.8051 16.84 19.8051 16.4V14.2H20.4051C20.8451 14.2 21.2051 13.92 21.2051 13.48V10.52C21.2051 10.08 20.8451 9.8 20.4051 9.8ZM18.2051 15.6H4.40511V8.4H18.2051V10.52V13.48V15.6Z" />
    </svg>
  )
);

BatteryEmpty.displayName = 'BatteryEmpty';

BatteryEmpty.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default BatteryEmpty;
