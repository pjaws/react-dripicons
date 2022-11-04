import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Clipboard = forwardRef(({ color = 'currentColor', size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M18.205 4.6H16.605H16.405H15.225L14.905 3.76001C14.685 3.18001 14.125 2.8 13.505 2.8H10.665C10.045 2.8 9.48502 3.18001 9.26502 3.76001L8.945 4.6H7.58501H7.38501H5.78501C5.34501 4.6 4.98501 4.99999 4.98501 5.43999V20.4C4.98501 20.84 5.34501 21.2 5.78501 21.2H18.185C18.625 21.2 18.985 20.84 18.985 20.4V5.43999C19.005 4.99999 18.645 4.6 18.205 4.6ZM9.525 6.2C9.865 6.2 10.165 6 10.285 5.7L10.765 4.4H13.445L13.925 5.7C14.045 6.02 14.345 6.2 14.685 6.2H15.325L14.745 7.33999C14.645 7.49999 14.465 7.6 14.265 7.6H9.925C9.745 7.6 9.56502 7.52001 9.46502 7.36001L8.80501 6.2H9.525ZM17.405 19.6H6.60501V6.2H6.945L8.06502 8.2C8.06502 8.22 8.08501 8.20002 8.08501 8.22002C8.48501 8.84002 9.16501 9.2 9.90501 9.2H14.245C15.005 9.2 15.725 8.81999 16.105 8.13999C16.105 8.11999 16.125 8.1 16.125 8.1L17.085 6.2H17.385V19.6H17.405Z" />
  </svg>
));

Clipboard.displayName = 'Clipboard';

Clipboard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Clipboard;
