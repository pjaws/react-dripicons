import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Tag = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20.405 6.79999H8.60499C8.40499 6.79999 8.225 6.87999 8.085 6.99999L3.085 11.4C2.905 11.56 2.80499 11.78 2.80499 12C2.80499 12.24 2.905 12.44 3.085 12.6L8.085 17C8.225 17.12 8.42499 17.2 8.60499 17.2H20.405C20.845 17.2 21.205 16.84 21.205 16.4V7.59999C21.205 7.15999 20.845 6.79999 20.405 6.79999ZM19.605 15.6H8.90499L4.80499 12L8.90499 8.39999H19.605V15.6ZM8.24498 11.08C8.48498 10.84 8.825 10.7 9.165 10.7C9.505 10.7 9.845 10.84 10.085 11.08C10.325 11.32 10.465 11.66 10.465 12C10.465 12.34 10.325 12.68 10.085 12.92C9.845 13.16 9.505 13.3 9.165 13.3C8.825 13.3 8.48498 13.16 8.24498 12.92C8.00498 12.68 7.865 12.34 7.865 12C7.865 11.66 8.00498 11.32 8.24498 11.08Z" />
  </svg>
));

Tag.displayName = 'Tag';

Tag.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Tag.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default Tag;
