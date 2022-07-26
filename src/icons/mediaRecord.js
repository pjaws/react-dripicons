import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const MediaRecord = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12.0051 19.7C7.76511 19.7 4.30511 16.24 4.30511 12C4.30511 7.75999 7.76511 4.29999 12.0051 4.29999C16.2451 4.29999 19.7051 7.75999 19.7051 12C19.7051 16.24 16.2451 19.7 12.0051 19.7ZM12.0051 6.09999C8.74511 6.09999 6.10511 8.73999 6.10511 12C6.10511 15.26 8.74511 17.9 12.0051 17.9C15.2651 17.9 17.9051 15.26 17.9051 12C17.9051 8.73999 15.2651 6.09999 12.0051 6.09999Z" />
  </svg>
));

MediaRecord.displayName = 'MediaRecord';

MediaRecord.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MediaRecord.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default MediaRecord;
