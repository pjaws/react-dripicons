import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Power = forwardRef(({ color = 'currentColor', size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12.025 12.3C11.585 12.3 11.225 11.94 11.225 11.5V4.59999C11.225 4.15999 11.585 3.79999 12.025 3.79999C12.465 3.79999 12.825 4.15999 12.825 4.59999V11.5C12.825 11.94 12.465 12.3 12.025 12.3ZM19.605 12.56C19.605 9.64 17.985 7.01998 15.385 5.71998C14.985 5.51998 14.505 5.67999 14.305 6.07999C14.105 6.47999 14.265 6.96 14.665 7.16C16.725 8.18 18.005 10.26 18.005 12.58C18.005 15.9 15.305 18.62 12.005 18.62C8.70498 18.62 6.00498 15.92 6.00498 12.58C6.00498 10.26 7.28497 8.2 9.34497 7.16C9.74497 6.96 9.90498 6.47999 9.70498 6.07999C9.50498 5.67999 9.02498 5.51998 8.62498 5.71998C6.02498 7.01998 4.40498 9.64 4.40498 12.56C4.40498 16.78 7.80498 20.2 12.005 20.2C16.205 20.2 19.605 16.78 19.605 12.56Z" />
  </svg>
));

Power.displayName = 'Power';

Power.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Power;
