import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Exit = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M14.805 14.94V18.6C14.805 19.04 14.485 19.4 14.045 19.4H3.60498C3.16498 19.4 2.80498 19.04 2.80498 18.6V5.4C2.80498 4.96 3.16498 4.6 3.60498 4.6H14.045C14.485 4.6 14.805 4.96 14.805 5.4V9.06001C14.805 9.50001 14.445 9.86001 14.005 9.86001C13.565 9.86001 13.205 9.50001 13.205 9.06001V6.2H4.40498V17.8H13.205V14.94C13.205 14.5 13.565 14.14 14.005 14.14C14.445 14.14 14.805 14.5 14.805 14.94ZM20.965 11.4L17.825 8.23999C17.505 7.91999 17.005 7.91999 16.685 8.23999C16.365 8.55999 16.365 9.05998 16.685 9.37998L18.465 11.18L8.76499 11.2C8.32499 11.2 7.96499 11.56 7.96499 12C7.96499 12.44 8.32499 12.8 8.76499 12.8L18.465 12.78L16.685 14.58C16.365 14.9 16.385 15.4 16.685 15.72C16.845 15.88 17.045 15.96 17.245 15.96C17.445 15.96 17.665 15.88 17.805 15.72L20.945 12.56C21.285 12.22 21.285 11.72 20.965 11.4Z" />
  </svg>
));

Exit.displayName = 'Exit';

Exit.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Exit.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default Exit;
