import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const MediaLoop = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M18.6051 9.26001V17.2C18.6051 17.64 18.2451 18 17.8051 18H6.20509C5.76509 18 5.40509 17.64 5.40509 17.2V9.26001C5.40509 8.82001 5.76509 8.40001 6.20509 8.40001H10.6451L9.5651 7.34001C9.2451 7.02001 9.2651 6.54001 9.5651 6.24001C9.8851 5.92001 10.3851 5.94001 10.7051 6.24001L13.1451 8.70001C13.4451 9.02001 13.4451 9.52001 13.1451 9.82001L10.7051 12.28C10.5451 12.44 10.3451 12.52 10.1451 12.52C9.94508 12.52 9.7451 12.44 9.5851 12.28C9.2651 11.96 9.2651 11.44 9.5851 11.14L10.6651 10.02H7.00509V16.42H17.0051V10.02H15.3251C14.8851 10.02 14.5251 9.66001 14.5251 9.22001C14.5251 8.78001 14.8851 8.42001 15.3251 8.42001H17.8051C18.2451 8.40001 18.6051 8.82001 18.6051 9.26001Z" />
  </svg>
));

MediaLoop.displayName = 'MediaLoop';

MediaLoop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MediaLoop.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default MediaLoop;
