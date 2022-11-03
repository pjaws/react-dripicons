import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const UserGroup = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M9.8851 13.66C12.2251 13.66 14.1251 11.76 14.1251 9.44001C14.1251 7.10001 12.2251 5.22004 9.8851 5.22004C7.5451 5.22004 5.6451 7.12001 5.6451 9.44001C5.6651 11.76 7.5651 13.66 9.8851 13.66ZM9.8851 6.80002C11.3451 6.80002 12.5251 7.98004 12.5251 9.42004C12.5251 10.86 11.3451 12.04 9.8851 12.04C8.4251 12.04 7.2451 10.86 7.2451 9.42004C7.2651 7.98004 8.4451 6.80002 9.8851 6.80002ZM11.8051 14.04C11.5851 13.98 11.3451 14 11.1451 14.12L9.8851 14.88L8.6251 14.12C8.4251 14 8.1851 13.98 7.9651 14.04C6.7451 14.42 2.8051 15.84 2.8051 18C2.8051 18.44 3.1651 18.8 3.6051 18.8H16.1651C16.6051 18.8 16.9651 18.44 16.9651 18C16.9651 15.86 13.0251 14.44 11.8051 14.04ZM5.0651 17.2C5.7451 16.68 6.8851 16.12 8.1251 15.68L9.4851 16.5C9.7451 16.66 10.0651 16.66 10.3051 16.5L11.6651 15.68C12.9051 16.1 14.0451 16.68 14.7251 17.2H5.0651ZM21.0051 16.6C21.0051 16.94 20.7451 17.2 20.4051 17.2H17.7251C17.3851 17.2 17.1251 16.94 17.1251 16.6C17.1251 16.26 17.3851 16 17.7251 16H19.5051C19.2051 15.6 18.7251 15.28 18.1251 14.96C17.8251 14.8 17.7251 14.44 17.8851 14.16C18.0451 13.86 18.4051 13.76 18.7051 13.92C19.5651 14.38 21.0051 15.36 21.0051 16.6ZM17.6451 11.32C17.6451 10.44 16.9251 9.74001 16.0651 9.74001C15.8451 9.74001 15.6451 9.78003 15.4451 9.86003C15.1451 9.98003 14.7851 9.84001 14.6651 9.54001C14.5451 9.24001 14.6851 8.88003 14.9851 8.76003C15.3251 8.62003 15.6851 8.54001 16.0651 8.54001C17.6051 8.54001 18.8451 9.78004 18.8451 11.32C18.8451 12.86 17.5851 14.1 16.0651 14.1C15.2651 14.1 14.5051 13.76 13.9851 13.16C13.7651 12.92 13.7851 12.54 14.0451 12.32C14.2851 12.1 14.6651 12.12 14.8851 12.38C15.1851 12.72 15.6251 12.92 16.0851 12.92C16.9251 12.9 17.6451 12.18 17.6451 11.32Z" />
  </svg>
));

UserGroup.displayName = 'UserGroup';

UserGroup.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UserGroup.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default UserGroup;