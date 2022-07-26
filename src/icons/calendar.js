import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Calendar = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M7.20511 7.16002V4.60001C7.20511 4.04001 7.64511 3.60001 8.20511 3.60001C8.76511 3.60001 9.20511 4.04001 9.20511 4.60001V7.16002C9.20511 7.72002 8.76511 8.16002 8.20511 8.16002C7.64511 8.16002 7.20511 7.72002 7.20511 7.16002ZM15.8051 8.16002C16.3651 8.16002 16.8051 7.72002 16.8051 7.16002V4.60001C16.8051 4.04001 16.3651 3.60001 15.8051 3.60001C15.2451 3.60001 14.8051 4.04001 14.8051 4.60001V7.16002C14.8051 7.72002 15.2451 8.16002 15.8051 8.16002ZM21.2051 5.87999V19.4C21.2051 19.84 20.8451 20.2 20.4051 20.2H3.60511C3.16511 20.2 2.80511 19.84 2.80511 19.4V5.87999C2.80511 5.43999 3.16511 5.00001 3.60511 5.00001H5.46512C5.90512 5.00001 6.26512 5.36001 6.26512 5.80001C6.26512 6.24001 5.90512 6.60001 5.46512 6.60001H4.38512V10H19.5851V6.60001H18.5251C18.0851 6.60001 17.7251 6.24001 17.7251 5.80001C17.7251 5.36001 18.0851 5.00001 18.5251 5.00001H20.3851C20.8451 5.00001 21.2051 5.43999 21.2051 5.87999ZM19.6051 18.6V11.4H4.40511V18.6H19.6051ZM10.7451 6.60001H13.2651C13.7051 6.60001 14.0651 6.24001 14.0651 5.80001C14.0651 5.36001 13.7051 5.00001 13.2651 5.00001H10.7451C10.3051 5.00001 9.94511 5.36001 9.94511 5.80001C9.94511 6.24001 10.3051 6.60001 10.7451 6.60001Z" />
  </svg>
));

Calendar.displayName = 'Calendar';

Calendar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Calendar.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default Calendar;
