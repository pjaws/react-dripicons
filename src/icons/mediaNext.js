import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const MediaNext = forwardRef(({ color = 'currentColor', size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M14.7 11.3686L6.3 4.76857C6.06 4.58857 5.74 4.54857 5.46 4.66857C5.18 4.80857 5 5.08857 5 5.38857V18.5886C5 18.8886 5.18 19.1686 5.46 19.3086C5.58 19.3686 5.7 19.3886 5.8 19.3886C5.98 19.3886 6.16 19.3286 6.3 19.2086L14.7 12.6086C14.9 12.4486 15 12.2286 15 11.9886C15 11.7486 14.88 11.5086 14.7 11.3686ZM6.6 16.9486V7.02857L12.9 11.9886L6.6 16.9486ZM19 5.70857V18.4086C19 18.9086 18.6 19.3086 18.1 19.3086C17.6 19.3086 17.2 18.9086 17.2 18.4086V5.70857C17.2 5.20857 17.6 4.80857 18.1 4.80857C18.6 4.80857 19 5.20857 19 5.70857Z" />
  </svg>
));

MediaNext.displayName = 'MediaNext';

MediaNext.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default MediaNext;
