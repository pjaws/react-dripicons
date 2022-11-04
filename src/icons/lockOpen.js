import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const LockOpen = forwardRef(({ color = 'currentColor', size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M17.405 9.39998H8.805V8.02C8.805 5.98 10.105 4.59998 11.965 4.59998C13.325 4.59998 14.405 5.29997 14.865 6.53997C15.025 6.95997 15.485 7.15998 15.905 6.99998C16.325 6.83998 16.525 6.37999 16.365 5.95999C15.665 4.09999 13.985 2.97996 11.945 2.97996C9.14501 2.97996 7.18501 5.03998 7.18501 7.99998V9.37996H6.58501C6.14501 9.37996 5.78501 9.73996 5.78501 10.18V20.18C5.78501 20.62 6.14501 20.98 6.58501 20.98H17.385C17.825 20.98 18.185 20.62 18.185 20.18V10.18C18.205 9.75996 17.845 9.39998 17.405 9.39998ZM16.605 19.4H7.405V11H16.605V19.4Z" />
  </svg>
));

LockOpen.displayName = 'LockOpen';

LockOpen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default LockOpen;
