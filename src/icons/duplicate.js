import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Duplicate = forwardRef(({ color = 'currentColor', size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20.405 16.48H8.32499C7.88499 16.48 7.52499 16.12 7.52499 15.68V3.59999C7.52499 3.15999 7.88499 2.79999 8.32499 2.79999H20.405C20.845 2.79999 21.205 3.15999 21.205 3.59999V15.66C21.205 16.12 20.845 16.48 20.405 16.48ZM9.12499 14.86H19.585V4.39999H9.12499V14.86ZM16.085 20.24V18.1C16.085 17.76 15.805 17.5 15.485 17.5C15.145 17.5 14.885 17.78 14.885 18.1V19.98H4.02499V9.11998H5.885C6.225 9.11998 6.485 8.83998 6.485 8.51998C6.485 8.19998 6.205 7.91998 5.885 7.91998H3.765C3.245 7.91998 2.80499 8.33999 2.80499 8.87999V20.26C2.80499 20.78 3.225 21.22 3.765 21.22H15.145C15.665 21.2 16.085 20.78 16.085 20.24Z" />
  </svg>
));

Duplicate.displayName = 'Duplicate';

Duplicate.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Duplicate;
