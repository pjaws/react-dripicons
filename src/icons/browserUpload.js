import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BrowserUpload = forwardRef(
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
      <path d="M12.8051 12.2L12.8251 20.4C12.8251 20.84 12.4651 21.2 12.0251 21.2C11.5851 21.2 11.2251 20.84 11.2251 20.4L11.2051 12.18L8.88512 14.48C8.56512 14.8 8.0651 14.78 7.74511 14.48C7.42511 14.16 7.44511 13.66 7.74511 13.34L11.4251 9.67998C11.7451 9.37998 12.2451 9.37998 12.5451 9.67998L16.2251 13.34C16.5451 13.66 16.5451 14.16 16.2251 14.48C16.0651 14.64 15.8651 14.72 15.6651 14.72C15.4651 14.72 15.2651 14.64 15.1051 14.48L12.8051 12.2ZM21.2051 3.6V16.94C21.2051 17.38 20.8451 17.8 20.4051 17.8H15.4851C15.0451 17.8 14.6851 17.44 14.6851 17C14.6851 16.56 15.0451 16.2 15.4851 16.2H19.6051V7.6H4.40511V16.2H8.58512C9.02512 16.2 9.38512 16.56 9.38512 17C9.38512 17.44 9.02512 17.8 8.58512 17.8H3.60511C3.16511 17.8 2.80511 17.38 2.80511 16.94V3.6C2.80511 3.16 3.16511 2.8 3.60511 2.8H20.4051C20.8451 2.8 21.2051 3.16 21.2051 3.6ZM10.8051 6.2H12.8051V4.4H10.8051V6.2ZM9.60511 4.4H7.60511V6.2H9.60511V4.4ZM4.40511 6.2H6.40511V4.4H4.40511V6.2ZM19.6051 6.2V4.4H14.0051V6.2H19.6051Z" />
    </svg>
  )
);

BrowserUpload.displayName = 'BrowserUpload';

BrowserUpload.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default BrowserUpload;
