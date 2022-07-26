import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Retweet = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20.965 14.06L18.445 16.56C18.285 16.72 18.085 16.8 17.885 16.8C17.685 16.8 17.465 16.72 17.325 16.56L14.805 14.06C14.485 13.74 14.485 13.24 14.785 12.94C15.105 12.62 15.585 12.62 15.885 12.94L16.985 14.08V8.80001H9.96501C9.52501 8.80001 9.16501 8.44001 9.16501 8.00001C9.16501 7.56001 9.52501 7.20001 9.96501 7.20001H17.865C18.305 7.20001 18.585 7.54001 18.585 7.98001V14.06L19.785 12.92C20.105 12.6 20.645 12.62 20.965 12.92C21.285 13.24 21.285 13.74 20.965 14.06ZM14.025 15.2H7.005V9.90001L8.105 11.04C8.265 11.2 8.44499 11.28 8.64499 11.28C8.84499 11.28 9.045 11.2 9.205 11.04C9.525 10.72 9.505 10.22 9.205 9.92001L6.68501 7.42001C6.36501 7.12001 5.86499 7.12001 5.54499 7.42001L3.025 9.92001C2.705 10.24 2.705 10.74 3.025 11.04C3.345 11.36 3.885 11.36 4.205 11.04L5.405 9.90001V15.98C5.405 16.42 5.665 16.8 6.125 16.8H14.025C14.465 16.8 14.825 16.44 14.825 16C14.825 15.56 14.465 15.2 14.025 15.2Z" />
  </svg>
));

Retweet.displayName = 'Retweet';

Retweet.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Retweet.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default Retweet;
