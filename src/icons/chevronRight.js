import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ChevronRight = forwardRef(
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
      <path d="M15.405 12C15.405 12.22 15.325 12.42 15.165 12.58L9.96502 17.58C9.80502 17.72 9.60501 17.8 9.40501 17.8C9.18501 17.8 8.985 17.72 8.825 17.56C8.525 17.24 8.525 16.74 8.845 16.42L13.445 12L8.845 7.58001C8.525 7.28001 8.525 6.76001 8.825 6.44001C9.125 6.12001 9.64502 6.12001 9.96502 6.42001L15.165 11.42C15.325 11.58 15.405 11.78 15.405 12Z" />
    </svg>
  )
);

ChevronRight.displayName = 'ChevronRight';

ChevronRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ChevronRight;
