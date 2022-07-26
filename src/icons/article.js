import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Article = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M18.8051 4.00001C18.8051 3.56001 18.4451 3.20001 18.0051 3.20001H6.00511C5.56511 3.20001 5.20511 3.56001 5.20511 4.00001V20C5.20511 20.44 5.56511 20.8 6.00511 20.8H18.0051C18.4451 20.8 18.8051 20.44 18.8051 20V4.00001ZM17.2051 19.2H6.80511V4.80001H17.2051V19.2ZM8.80511 16.3C8.80511 15.92 9.12511 15.6 9.50511 15.6H14.2651C14.6451 15.6 14.9651 15.92 14.9651 16.3C14.9651 16.68 14.6451 17 14.2651 17H9.50511C9.12511 17 8.80511 16.68 8.80511 16.3ZM8.80511 13.5C8.80511 13.12 9.12511 12.8 9.50511 12.8H14.2651C14.6451 12.8 14.9651 13.12 14.9651 13.5C14.9651 13.88 14.6451 14.2 14.2651 14.2H9.50511C9.12511 14.2 8.80511 13.88 8.80511 13.5ZM15.0051 7.70001C15.0051 7.32001 14.6851 7.00001 14.3051 7.00001H9.50511C9.12511 7.00001 8.80511 7.32001 8.80511 7.70001V10.5C8.80511 10.88 9.12511 11.2 9.50511 11.2H14.3051C14.6851 11.2 15.0051 10.88 15.0051 10.5V7.70001ZM10.2051 8.40001H13.6051V9.80001H10.2051V8.40001Z" />
  </svg>
));

Article.displayName = 'Article';

Article.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Article.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default Article;
