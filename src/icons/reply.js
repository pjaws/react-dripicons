import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Reply = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M17.1448 11.54C15.7048 10.08 13.6048 9.28001 11.2048 9.14001V7.00001C11.2048 6.68001 10.9648 6.38001 10.6648 6.26001C10.3648 6.14001 10.0048 6.20001 9.7648 6.44001L4.8448 11.44C4.5448 11.76 4.5248 12.26 4.8448 12.56L9.7648 17.56C9.9848 17.8 10.3648 17.86 10.6648 17.74C10.9648 17.62 11.2048 17.32 11.2048 17V14.84C12.8048 14.8 16.5648 14.96 17.9448 17.4C18.0848 17.66 18.3448 17.8 18.6248 17.8C18.6848 17.8 18.7448 17.8 18.8248 17.78C19.1848 17.68 19.4448 17.38 19.4448 17C19.4248 16.88 19.4248 13.82 17.1448 11.54ZM10.2848 13.28C9.8848 13.32 9.6048 13.66 9.6048 14.08V15.04L6.6048 12L9.6048 8.96001V9.92001C9.6048 10.36 9.9248 10.72 10.3648 10.72C14.6648 10.72 16.4848 12.78 17.2648 14.54C14.4448 12.86 10.4848 13.26 10.2848 13.28Z" />
  </svg>
));

Reply.displayName = 'Reply';

Reply.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Reply.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default Reply;
