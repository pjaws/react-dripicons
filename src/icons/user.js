import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const User = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12.0051 14.22C14.9651 14.22 17.3851 11.8 17.3851 8.82003C17.3851 5.84003 14.9651 3.42003 12.0051 3.42003C9.0451 3.42003 6.6251 5.84003 6.6251 8.82003C6.6251 11.8 9.0451 14.22 12.0051 14.22ZM12.0051 5.00001C14.0851 5.00001 15.7851 6.70001 15.7851 8.80001C15.7851 10.9 14.0851 12.6 12.0051 12.6C9.9251 12.6 8.2251 10.9 8.2251 8.80001C8.2251 6.70001 9.9251 5.00001 12.0051 5.00001ZM14.5051 14.74C14.2451 14.66 13.9451 14.72 13.7451 14.9L12.0051 16.38L10.2651 14.9C10.0451 14.72 9.7651 14.66 9.5051 14.74C8.3851 15.1 2.8051 17.02 2.8051 19.8C2.8051 20.24 3.1651 20.6 3.6051 20.6H20.4051C20.8451 20.6 21.2051 20.24 21.2051 19.8C21.2051 17.02 15.6251 15.1 14.5051 14.74ZM4.8251 19C5.7051 18.06 7.8251 17.02 9.5851 16.42L11.4851 18.04C11.7851 18.3 12.2251 18.3 12.5251 18.04L14.4251 16.42C16.1851 17.04 18.3051 18.08 19.1851 19H4.8251Z" />
  </svg>
));

User.displayName = 'User';

User.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

User.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default User;
