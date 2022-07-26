import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const TagDelete = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20.405 6.79999H8.60499C8.40499 6.79999 8.225 6.87999 8.085 6.99999L3.085 11.4C2.905 11.56 2.80499 11.78 2.80499 12C2.80499 12.24 2.905 12.44 3.085 12.6L8.085 17C8.225 17.12 8.42499 17.2 8.60499 17.2H20.405C20.845 17.2 21.205 16.84 21.205 16.4V7.59999C21.205 7.15999 20.845 6.79999 20.405 6.79999ZM19.605 15.6H8.90499L4.80499 12L8.90499 8.39999H19.605V15.6ZM11.625 13.08L12.705 12L11.625 10.92C11.345 10.64 11.345 10.2 11.625 9.93999C11.905 9.65999 12.345 9.65999 12.605 9.93999L13.685 11.02L14.765 9.93999C15.045 9.65999 15.485 9.65999 15.745 9.93999C16.025 10.22 16.025 10.66 15.745 10.92L14.665 12L15.745 13.08C16.025 13.36 16.025 13.8 15.745 14.06C15.605 14.2 15.425 14.26 15.245 14.26C15.065 14.26 14.885 14.2 14.745 14.06L13.665 12.98L12.585 14.06C12.445 14.2 12.265 14.26 12.085 14.26C11.905 14.26 11.725 14.2 11.585 14.06C11.365 13.8 11.365 13.36 11.625 13.08Z" />
  </svg>
));

TagDelete.displayName = 'TagDelete';

TagDelete.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TagDelete.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default TagDelete;
