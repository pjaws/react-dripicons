import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const FolderOpen = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M21.045 10.32C20.885 10.12 20.665 10 20.425 10H19.425V7.82002C19.425 7.44002 19.145 7.2 18.765 7.2H11.785L10.885 5.72002C10.765 5.52002 10.525 5.4 10.285 5.4H5.12499C4.74499 5.4 4.44499 5.62 4.44499 6V10H3.64499C3.40499 10 3.16499 10.12 3.02499 10.3C2.86499 10.48 2.80499 10.74 2.86499 10.98L4.34499 17.76C4.42499 18.12 4.74499 18.4 5.12499 18.4H18.785C19.145 18.4 19.465 18.14 19.565 17.8L21.225 11.02C21.245 10.76 21.185 10.52 21.045 10.32ZM5.80499 6.8H9.84499L10.745 8.27998C10.865 8.47998 11.105 8.6 11.345 8.6H18.005V10H5.80499V6.8ZM18.105 16.8H5.72499L4.58498 11.6H19.365L18.105 16.8Z" />
  </svg>
));

FolderOpen.displayName = 'FolderOpen';

FolderOpen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FolderOpen.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default FolderOpen;
