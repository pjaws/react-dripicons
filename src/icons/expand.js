import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Expand = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20.8051 4.00001V8.00001C20.8051 8.44001 20.4451 8.80001 20.0051 8.80001C19.5651 8.80001 19.2051 8.44001 19.2051 8.00001V5.94001L14.5651 10.6C14.4051 10.76 14.2051 10.84 14.0051 10.84C13.8051 10.84 13.6051 10.76 13.4451 10.6C13.1251 10.28 13.1251 9.78001 13.4451 9.46001L18.0851 4.80001H16.0051C15.5651 4.80001 15.2051 4.44001 15.2051 4.00001C15.2051 3.56001 15.5651 3.20001 16.0051 3.20001H20.0051C20.2251 3.20001 20.4251 3.28001 20.5651 3.44001C20.7251 3.58001 20.8051 3.78001 20.8051 4.00001ZM20.0051 15.2C19.5651 15.2 19.2051 15.56 19.2051 16V18.06L14.6451 13.52C14.3251 13.2 13.8051 13.2 13.4851 13.52C13.1651 13.84 13.1651 14.34 13.4651 14.66L17.9851 19.2H15.9251C15.4851 19.2 15.1251 19.56 15.1251 20C15.1251 20.44 15.4851 20.8 15.9251 20.8H19.9251C20.1451 20.8 20.3851 20.72 20.5251 20.56C20.6851 20.4 20.8051 20.2 20.8051 20V16C20.8051 15.56 20.4451 15.2 20.0051 15.2ZM9.3651 13.5L4.8051 18.06V16C4.8051 15.56 4.4451 15.2 4.0051 15.2C3.5651 15.2 3.2051 15.56 3.2051 16V20C3.2051 20.22 3.2851 20.42 3.4451 20.56C3.6051 20.72 3.8051 20.8 4.0051 20.8H8.0051C8.4451 20.8 8.8051 20.44 8.8051 20C8.8051 19.56 8.4451 19.2 8.0051 19.2H5.9451L10.5051 14.64C10.8251 14.32 10.8051 13.82 10.5051 13.5C10.2051 13.18 9.6851 13.18 9.3651 13.5ZM5.9451 4.88002H8.0051C8.4451 4.88002 8.8051 4.52002 8.8051 4.08002C8.8051 3.64002 8.4451 3.28002 8.0051 3.28002H4.0051C3.7851 3.28002 3.5851 3.36001 3.4451 3.52001C3.2851 3.68001 3.2051 3.88002 3.2051 4.08002V8.08002C3.2051 8.52002 3.5651 8.88002 4.0051 8.88002C4.4451 8.88002 4.8051 8.52002 4.8051 8.08002V6.00001L9.4251 10.62C9.5851 10.78 9.78511 10.86 9.98511 10.86C10.1851 10.86 10.3851 10.78 10.5451 10.62C10.8651 10.3 10.8651 9.80002 10.5451 9.48002L5.9451 4.88002Z" />
  </svg>
));

Expand.displayName = 'Expand';

Expand.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Expand.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default Expand;