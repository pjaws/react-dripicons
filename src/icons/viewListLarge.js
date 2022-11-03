import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ViewListLarge = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20.1251 11.06H11.1851C10.5851 11.06 10.1051 10.58 10.1051 9.98V7.28C10.1051 6.68 10.5851 6.19999 11.1851 6.19999H20.1251C20.7251 6.19999 21.2051 6.68 21.2051 7.28V9.98C21.2051 10.58 20.7251 11.06 20.1251 11.06ZM11.6851 9.46H19.6051V7.79999H11.6851V9.46ZM20.1251 17.8H11.1851C10.5851 17.8 10.1051 17.32 10.1051 16.72V14.02C10.1051 13.42 10.5851 12.94 11.1851 12.94H20.1251C20.7251 12.94 21.2051 13.42 21.2051 14.02V16.72C21.2051 17.32 20.7251 17.8 20.1251 17.8ZM11.6851 16.2H19.6051V14.54H11.6851V16.2ZM7.54511 11.06H3.92512C3.30512 11.06 2.80511 10.56 2.80511 9.93998V7.29999C2.80511 6.67999 3.30512 6.18 3.92512 6.18H7.54511C8.16511 6.18 8.66512 6.67999 8.66512 7.29999V9.93998C8.66512 10.56 8.16511 11.06 7.54511 11.06ZM4.40511 9.46H7.06512V7.79999H4.40511V9.46ZM7.54511 17.8H3.92512C3.30512 17.8 2.80511 17.3 2.80511 16.68V14.04C2.80511 13.42 3.30512 12.92 3.92512 12.92H7.54511C8.16511 12.92 8.66512 13.42 8.66512 14.04V16.68C8.66512 17.3 8.16511 17.8 7.54511 17.8ZM4.40511 16.2H7.06512V14.54H4.40511V16.2Z" />
  </svg>
));

ViewListLarge.displayName = 'ViewListLarge';

ViewListLarge.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ViewListLarge.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default ViewListLarge;