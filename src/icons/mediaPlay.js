import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const MediaPlay = forwardRef(({ color = 'currentColor', size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M16.7 11.3686L8.3 4.76857C8.06 4.58857 7.74 4.54857 7.46 4.66857C7.18 4.80857 7 5.08857 7 5.38857V18.5886C7 18.8886 7.18 19.1686 7.46 19.3086C7.58 19.3686 7.7 19.3886 7.8 19.3886C7.98 19.3886 8.16 19.3286 8.3 19.2086L16.7 12.6086C16.9 12.4486 17 12.2286 17 11.9886C17 11.7486 16.88 11.5086 16.7 11.3686ZM8.6 16.9486V7.02857L14.9 11.9886L8.6 16.9486Z" />
  </svg>
));

MediaPlay.displayName = 'MediaPlay';

MediaPlay.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default MediaPlay;
