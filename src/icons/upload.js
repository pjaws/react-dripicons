import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Upload = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20.605 14.56V20C20.605 20.56 20.165 21 19.605 21H4.40497C3.84497 21 3.40497 20.56 3.40497 20V14.56C3.40497 14 3.84497 13.56 4.40497 13.56C4.96497 13.56 5.40497 14 5.40497 14.56V19H18.605V14.56C18.605 14 19.045 13.56 19.605 13.56C20.165 13.56 20.605 14 20.605 14.56ZM8.72496 8.77998L11.005 6.46001V15.12C11.005 15.68 11.445 16.12 12.005 16.12C12.565 16.12 13.005 15.68 13.005 15.12V6.46001L15.2849 8.77998C15.4849 8.97998 15.745 9.07998 16.005 9.07998C16.265 9.07998 16.505 8.98 16.705 8.8C17.105 8.42 17.105 7.77998 16.725 7.37998L12.745 3.3C12.565 3.1 12.305 3 12.025 3C11.765 3 11.505 3.1 11.305 3.3L7.32496 7.37998C6.94496 7.77998 6.94496 8.4 7.34496 8.8C7.70496 9.18 8.34496 9.15998 8.72496 8.77998Z" />
  </svg>
));

Upload.displayName = 'Upload';

Upload.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Upload.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default Upload;
