import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Enter = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20.6051 5.4V18.6C20.6051 19.04 20.2451 19.4 19.8051 19.4H9.38509C8.94509 19.4 8.60509 19.04 8.60509 18.6V14.94C8.60509 14.5 8.96509 14.14 9.40509 14.14C9.84509 14.14 10.2051 14.5 10.2051 14.94V17.8H19.0051V6.2H10.2051V9.06001C10.2051 9.50001 9.84509 9.86001 9.40509 9.86001C8.96509 9.86001 8.60509 9.50001 8.60509 9.06001V5.4C8.60509 4.96 8.94509 4.6 9.38509 4.6H19.8051C20.2451 4.6 20.6051 4.96 20.6051 5.4ZM12.1051 14.58C11.7851 14.9 11.8051 15.4 12.1051 15.72C12.2651 15.88 12.4651 15.96 12.6651 15.96C12.8651 15.96 13.0851 15.88 13.2251 15.72L16.3651 12.56C16.6651 12.24 16.6651 11.74 16.3651 11.44L13.2251 8.27998C12.9051 7.95998 12.4051 7.95998 12.0851 8.27998C11.7651 8.59998 11.7651 9.10002 12.0851 9.42002L13.8651 11.22L4.20509 11.2C3.76509 11.2 3.40509 11.56 3.40509 12C3.40509 12.44 3.76509 12.8 4.20509 12.8L13.8851 12.78L12.1051 14.58Z" />
  </svg>
));

Enter.displayName = 'Enter';

Enter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Enter.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default Enter;