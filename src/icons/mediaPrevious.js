import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const MediaPrevious = forwardRef(
  ({ color = 'currentColor', size = 24, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M18.74 4.68286C18.46 4.54286 18.14 4.58286 17.9 4.78286L9.6 11.3829C9.4 11.5429 9.3 11.7629 9.3 12.0029C9.3 12.2429 9.42 12.4829 9.6 12.6229L17.9 19.2229C18.04 19.3429 18.22 19.4029 18.4 19.4029C18.52 19.4029 18.64 19.3829 18.74 19.3229C19.02 19.1829 19.2 18.9029 19.2 18.6029V5.40286C19.2 5.10286 19.02 4.82286 18.74 4.68286ZM17.6 16.9429L11.38 12.0029L17.6 7.06286V16.9429ZM6.8 5.72286V18.4229C6.8 18.9229 6.4 19.3229 5.9 19.3229C5.4 19.3229 5 18.9229 5 18.4229V5.72286C5 5.22286 5.4 4.82286 5.9 4.82286C6.4 4.82286 6.8 5.22286 6.8 5.72286Z" />
    </svg>
  )
);

MediaPrevious.displayName = 'MediaPrevious';

MediaPrevious.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default MediaPrevious;
