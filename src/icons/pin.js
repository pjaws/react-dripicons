import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Pin = forwardRef(({ color = 'currentColor', size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20.965 8.07999L15.905 3.01998C15.585 2.69998 15.085 2.69998 14.765 3.01998C14.705 3.07998 13.245 4.57997 13.805 6.53997L11.525 8.81998C10.265 8.43998 7.04501 7.77999 4.66501 10.16C4.34501 10.48 4.34501 10.98 4.66501 11.3L8.105 14.74L3.025 19.82C2.705 20.14 2.705 20.64 3.025 20.96C3.185 21.12 3.38501 21.2 3.58501 21.2C3.78501 21.2 3.98499 21.12 4.14499 20.96L9.225 15.88L12.665 19.32C12.825 19.48 13.025 19.56 13.225 19.56C13.425 19.56 13.625 19.48 13.785 19.32C16.165 16.94 15.505 13.7 15.125 12.46L17.405 10.18C19.365 10.74 20.845 9.27998 20.925 9.21998C21.285 8.89998 21.285 8.39999 20.965 8.07999ZM17.605 8.51998C17.305 8.37998 16.945 8.43999 16.705 8.67999L13.705 11.68C13.485 11.9 13.405 12.26 13.525 12.54C13.525 12.54 13.885 13.44 13.945 14.6C14.005 15.76 13.765 16.74 13.225 17.56L9.825 14.16L6.425 10.76C8.565 9.31999 11.325 10.4 11.445 10.46C11.745 10.58 12.085 10.52 12.325 10.28L15.325 7.27999C15.565 7.03999 15.625 6.67999 15.485 6.37999C15.205 5.77999 15.305 5.23998 15.485 4.81998L19.165 8.49998C18.745 8.69998 18.185 8.79998 17.605 8.51998ZM12.845 12.86C12.865 12.92 13.125 13.5 13.105 14.12C13.085 14.5 12.785 14.8 12.405 14.8H12.385C12.005 14.78 11.685 14.46 11.705 14.08C11.705 13.82 11.605 13.52 11.565 13.42C11.405 13.06 11.565 12.66 11.925 12.5C12.285 12.36 12.705 12.5 12.845 12.86Z" />
  </svg>
));

Pin.displayName = 'Pin';

Pin.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Pin;
