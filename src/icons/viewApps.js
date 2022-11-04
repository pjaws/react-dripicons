import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ViewApps = forwardRef(({ color = 'currentColor', size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M6.80509 8.4C6.44509 8.4 6.06509 8.23998 5.80509 7.97998C5.54509 7.71998 5.40509 7.36 5.40509 7C5.40509 6.64 5.56509 6.28 5.80509 6C6.06509 5.74 6.42509 5.6 6.80509 5.6C7.16509 5.6 7.52509 5.76 7.78509 6C8.04509 6.26 8.20509 6.62 8.20509 7C8.20509 7.36 8.04509 7.71998 7.78509 7.97998C7.54509 8.25998 7.16509 8.4 6.80509 8.4ZM13.0051 7.97998C13.2651 7.71998 13.4251 7.36 13.4251 7C13.4251 6.64 13.2651 6.28 13.0051 6C12.7451 5.74 12.3851 5.6 12.0251 5.6C11.6651 5.6 11.2851 5.76 11.0251 6C10.7651 6.26 10.6251 6.62 10.6251 7C10.6251 7.36 10.7851 7.71998 11.0251 7.97998C11.2851 8.23998 11.6451 8.4 12.0251 8.4C12.3651 8.4 12.7451 8.25998 13.0051 7.97998ZM18.2051 7.97998C18.4651 7.71998 18.6251 7.36 18.6251 7C18.6251 6.64 18.4651 6.28 18.2051 6C17.9451 5.74 17.5851 5.6 17.2251 5.6C16.8651 5.6 16.4851 5.76 16.2251 6C15.9651 6.26 15.8251 6.62 15.8251 7C15.8251 7.36 15.9851 7.71998 16.2251 7.97998C16.4851 8.23998 16.8451 8.4 17.2251 8.4C17.5651 8.4 17.9451 8.25998 18.2051 7.97998ZM7.80509 12.98C8.06509 12.72 8.22509 12.36 8.22509 12C8.22509 11.64 8.06509 11.28 7.80509 11C7.54509 10.74 7.18509 10.6 6.82509 10.6C6.46509 10.6 6.08509 10.76 5.82509 11C5.56509 11.26 5.42509 11.62 5.42509 12C5.42509 12.36 5.58509 12.72 5.82509 12.98C6.08509 13.24 6.44509 13.4 6.82509 13.4C7.16509 13.4 7.54509 13.26 7.80509 12.98ZM13.0051 12.98C13.2651 12.72 13.4251 12.36 13.4251 12C13.4251 11.64 13.2651 11.28 13.0051 11C12.7451 10.74 12.3851 10.6 12.0251 10.6C11.6651 10.6 11.2851 10.76 11.0251 11C10.7651 11.26 10.6251 11.62 10.6251 12C10.6251 12.36 10.7851 12.72 11.0251 12.98C11.2851 13.24 11.6451 13.4 12.0251 13.4C12.3651 13.4 12.7451 13.26 13.0051 12.98ZM18.2051 12.98C18.4651 12.72 18.6251 12.36 18.6251 12C18.6251 11.64 18.4651 11.28 18.2051 11C17.9451 10.74 17.5851 10.6 17.2251 10.6C16.8651 10.6 16.4851 10.76 16.2251 11C15.9651 11.26 15.8251 11.62 15.8251 12C15.8251 12.36 15.9851 12.72 16.2251 12.98C16.4851 13.24 16.8451 13.4 17.2251 13.4C17.5651 13.4 17.9451 13.26 18.2051 12.98ZM7.80509 17.98C8.06509 17.72 8.22509 17.36 8.22509 17C8.22509 16.64 8.06509 16.28 7.80509 16C7.54509 15.74 7.18509 15.6 6.82509 15.6C6.46509 15.6 6.08509 15.76 5.82509 16C5.56509 16.26 5.42509 16.62 5.42509 17C5.42509 17.36 5.58509 17.72 5.82509 17.98C6.08509 18.24 6.44509 18.4 6.82509 18.4C7.16509 18.4 7.54509 18.26 7.80509 17.98ZM13.0051 17.98C13.2651 17.72 13.4251 17.36 13.4251 17C13.4251 16.64 13.2651 16.28 13.0051 16C12.7451 15.74 12.3851 15.6 12.0251 15.6C11.6651 15.6 11.2851 15.76 11.0251 16C10.7651 16.26 10.6251 16.62 10.6251 17C10.6251 17.36 10.7851 17.72 11.0251 17.98C11.2851 18.24 11.6451 18.4 12.0251 18.4C12.3651 18.4 12.7451 18.26 13.0051 17.98ZM18.2051 17.98C18.4651 17.72 18.6251 17.36 18.6251 17C18.6251 16.64 18.4651 16.28 18.2051 16C17.9451 15.74 17.5851 15.6 17.2251 15.6C16.8651 15.6 16.4851 15.76 16.2251 16C15.9651 16.26 15.8251 16.62 15.8251 17C15.8251 17.36 15.9851 17.72 16.2251 17.98C16.4851 18.24 16.8451 18.4 17.2251 18.4C17.5651 18.4 17.9451 18.26 18.2051 17.98Z" />
  </svg>
));

ViewApps.displayName = 'ViewApps';

ViewApps.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ViewApps;
