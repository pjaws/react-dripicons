import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Tags = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M17.8451 13.12C17.8451 12.9 17.7651 12.7 17.6051 12.56L10.1451 5.20001C10.0051 5.06001 9.82511 4.98001 9.62511 4.98001L3.66511 4.60001C3.42511 4.58001 3.20511 4.68 3.04511 4.84C2.88511 5 2.80511 5.22002 2.80511 5.46002L3.18511 11.32C3.20511 11.52 3.28511 11.7 3.42511 11.84L10.9051 19.18C11.0651 19.34 11.2651 19.42 11.4651 19.42C11.6651 19.42 11.8651 19.34 12.0251 19.18L17.6051 13.7C17.7651 13.54 17.8451 13.34 17.8451 13.12ZM11.4651 17.48L4.76511 10.9L4.46511 6.26002L9.22511 6.56002L15.9051 13.12L11.4651 17.48ZM8.00512 8.04C8.22511 8.26 8.36511 8.58001 8.36511 8.88001C8.36511 9.20001 8.24511 9.5 8.00512 9.72C7.78511 9.94 7.46512 10.08 7.14511 10.08C6.82511 10.08 6.52511 9.96 6.28511 9.72C6.06511 9.5 5.92511 9.18001 5.92511 8.88001C5.92511 8.56001 6.04511 8.26 6.28511 8.04C6.50511 7.82 6.82511 7.68001 7.14511 7.68001C7.46512 7.68001 7.78511 7.82 8.00512 8.04ZM21.2051 13.12C21.2051 13.3 21.1251 13.48 21.0051 13.62L15.4251 19.1C15.2851 19.24 15.1051 19.3 14.9251 19.3C14.7451 19.3 14.5651 19.24 14.4251 19.1C14.1451 18.82 14.1451 18.38 14.4251 18.12L19.5051 13.14L12.5451 6.30001C12.2651 6.02001 12.2651 5.58 12.5451 5.32C12.8251 5.04 13.2651 5.04 13.5451 5.32L21.0251 12.66C21.1251 12.76 21.2051 12.94 21.2051 13.12Z" />
  </svg>
));

Tags.displayName = 'Tags';

Tags.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Tags.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default Tags;