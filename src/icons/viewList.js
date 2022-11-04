import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ViewList = forwardRef(({ color = 'currentColor', size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M7.72498 5.60001C7.72498 5.04001 8.16498 4.60001 8.72498 4.60001H19.805C20.365 4.60001 20.805 5.04001 20.805 5.60001C20.805 6.16001 20.365 6.60001 19.805 6.60001H8.72498C8.16498 6.60001 7.72498 6.16001 7.72498 5.60001ZM19.805 11H8.72498C8.16498 11 7.72498 11.44 7.72498 12C7.72498 12.56 8.16498 13 8.72498 13H19.805C20.365 13 20.805 12.56 20.805 12C20.805 11.44 20.365 11 19.805 11ZM19.805 17.4H8.72498C8.16498 17.4 7.72498 17.84 7.72498 18.4C7.72498 18.96 8.16498 19.4 8.72498 19.4H19.805C20.365 19.4 20.805 18.96 20.805 18.4C20.805 17.84 20.365 17.4 19.805 17.4ZM4.40498 10.68C3.62498 10.68 3.00498 11.32 3.00498 12.1C3.00498 12.88 3.62498 13.52 4.40498 13.52C5.18498 13.52 5.80498 12.88 5.80498 12.1C5.80498 11.32 5.16498 10.68 4.40498 10.68ZM4.40498 4.20001C3.62498 4.20001 3.00498 4.84001 3.00498 5.62001C3.00498 6.40001 3.62498 7.04 4.40498 7.04C5.18498 7.04 5.80498 6.40001 5.80498 5.62001C5.80498 4.84001 5.16498 4.20001 4.40498 4.20001ZM4.40498 16.96C3.62498 16.96 3.00498 17.6 3.00498 18.38C3.00498 19.16 3.62498 19.8 4.40498 19.8C5.18498 19.8 5.80498 19.16 5.80498 18.38C5.80498 17.6 5.16498 16.96 4.40498 16.96Z" />
  </svg>
));

ViewList.displayName = 'ViewList';

ViewList.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ViewList;
