import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Photo = forwardRef(({ color = 'currentColor', size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M21.205 5.8C21.205 5.36 20.845 5 20.405 5H3.60499C3.16499 5 2.80499 5.36 2.80499 5.8V18.2C2.80499 18.64 3.16499 19 3.60499 19H20.405C20.845 19 21.205 18.64 21.205 18.2V5.8ZM19.605 6.6V13.3L18.265 12.18C17.965 11.94 17.545 11.94 17.245 12.18L15.085 13.98L10.065 9.62002C9.765 9.36002 9.34498 9.36 9.04498 9.6L4.42499 13.34V6.6H19.605ZM4.40499 17.4V15.4L9.52499 11.26L14.545 15.62C14.845 15.88 15.285 15.88 15.585 15.64L17.745 13.84L19.605 15.4V17.4H4.40499ZM13.225 9.32002C13.225 8.52002 13.885 7.86001 14.705 7.86001C15.525 7.86001 16.185 8.52002 16.185 9.32002C16.185 10.12 15.525 10.78 14.705 10.78C13.885 10.78 13.225 10.12 13.225 9.32002Z" />
  </svg>
));

Photo.displayName = 'Photo';

Photo.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Photo;
