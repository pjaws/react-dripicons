import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const MediaStop = forwardRef(({ color = 'currentColor', size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M19.6051 5.10001C19.6051 4.60001 19.2051 4.20001 18.7051 4.20001H5.10511C4.60511 4.20001 4.20511 4.60001 4.20511 5.10001V18.7C4.20511 19.2 4.60511 19.6 5.10511 19.6H18.7051C19.2051 19.6 19.6051 19.2 19.6051 18.7V5.10001ZM17.8051 17.8H6.00511V6.00001H17.8051V17.8Z" />
  </svg>
));

MediaStop.displayName = 'MediaStop';

MediaStop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default MediaStop;
