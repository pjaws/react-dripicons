import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Camcorder = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20.765 7.07997C20.485 6.93997 20.125 6.98 19.885 7.16L16.605 9.57997V7.79999C16.605 7.35999 16.325 6.99999 15.885 6.99999H3.60498C3.16498 6.99999 2.80498 7.35999 2.80498 7.79999V16.2C2.80498 16.64 3.16498 17 3.60498 17H15.885C16.325 17 16.605 16.64 16.605 16.2V14.42L19.885 16.84C20.025 16.94 20.225 17 20.385 17C20.505 17 20.645 16.98 20.745 16.92C21.025 16.78 21.205 16.5 21.205 16.2V7.79999C21.205 7.49999 21.025 7.21997 20.765 7.07997ZM15.005 15.4H4.40498V8.59999H15.005V15.4ZM19.605 14.6L16.805 12.48V11.52L19.605 9.39999V14.6Z" />
  </svg>
));

Camcorder.displayName = 'Camcorder';

Camcorder.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Camcorder.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default Camcorder;
