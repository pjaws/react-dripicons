import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Blog = forwardRef(({ color = 'currentColor', size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M18.8051 4C18.8051 3.56 18.4451 3.2 18.0051 3.2H6.00508C5.56508 3.2 5.20508 3.56 5.20508 4V20C5.20508 20.44 5.56508 20.8 6.00508 20.8H18.0051C18.4451 20.8 18.8051 20.44 18.8051 20V4ZM17.2051 19.2H6.80508V4.8H17.2051V19.2ZM8.50508 15.8C8.50508 15.36 8.86508 15 9.30508 15H14.7051C15.1451 15 15.5051 15.36 15.5051 15.8C15.5051 16.24 15.1451 16.6 14.7051 16.6H9.30508C8.86508 16.6 8.50508 16.24 8.50508 15.8ZM8.62508 12C8.62508 11.56 8.98508 11.2 9.42508 11.2H14.6851C15.1251 11.2 15.4851 11.56 15.4851 12C15.4851 12.44 15.1251 12.8 14.6851 12.8H9.42508C8.98508 12.8 8.62508 12.44 8.62508 12ZM8.62508 8.2C8.62508 7.76 8.98508 7.4 9.42508 7.4H14.6851C15.1251 7.4 15.4851 7.76 15.4851 8.2C15.4851 8.64 15.1251 9 14.6851 9H9.42508C8.98508 9 8.62508 8.64 8.62508 8.2Z" />
  </svg>
));

Blog.displayName = 'Blog';

Blog.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Blog;
