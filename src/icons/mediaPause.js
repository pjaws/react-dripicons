import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const MediaPause = forwardRef(({ color = 'currentColor', size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M9.40012 5.40002V18.6C9.40012 19.16 8.96012 19.6 8.40012 19.6C7.84012 19.6 7.40012 19.16 7.40012 18.6V5.40002C7.40012 4.84002 7.84012 4.40002 8.40012 4.40002C8.96012 4.40002 9.40012 4.84002 9.40012 5.40002ZM15.6001 4.40002C15.0401 4.40002 14.6001 4.84002 14.6001 5.40002V18.6C14.6001 19.16 15.0401 19.6 15.6001 19.6C16.1601 19.6 16.6001 19.16 16.6001 18.6V5.40002C16.6001 4.84002 16.1601 4.40002 15.6001 4.40002Z" />
  </svg>
));

MediaPause.displayName = 'MediaPause';

MediaPause.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default MediaPause;
