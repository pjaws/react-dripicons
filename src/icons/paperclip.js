import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Paperclip = forwardRef(({ color = 'currentColor', size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20.0052 10.12C20.2852 10.4 20.2852 10.84 20.0052 11.12L12.0452 19.08C10.7252 20.4 9.20521 21.12 7.78521 21.12C7.42521 21.12 7.06521 21.08 6.70521 20.98C5.30521 20.6 4.2252 19.52 3.8452 18.06C3.3652 16.26 4.0052 14.3 5.6252 12.68L14.4852 3.82003C15.9252 2.38003 17.9252 2.84001 19.0852 4.00001C20.6652 5.58001 20.2252 7.44001 19.1652 8.50001L10.2252 17.44C9.0452 18.62 7.7052 18.54 7.0252 17.84C6.3452 17.14 6.2652 15.84 7.4452 14.64L13.4852 8.60001C13.7652 8.32001 14.2052 8.32001 14.4852 8.60001C14.7652 8.88001 14.7652 9.32001 14.4852 9.60001L8.4452 15.64C7.9252 16.16 7.8452 16.66 8.0252 16.86C8.2252 17.06 8.7252 16.98 9.2452 16.46L18.1852 7.52003C19.0852 6.62003 18.7052 5.60001 18.1052 5.00001C17.4252 4.32001 16.3252 3.98 15.4852 4.84L6.6252 13.7C5.3652 14.96 4.84521 16.42 5.20521 17.72C5.46521 18.68 6.16521 19.4 7.08521 19.64C8.32521 19.98 9.74522 19.42 11.0652 18.1L19.0252 10.14C19.2852 9.86 19.7252 9.86003 20.0052 10.12Z" />
  </svg>
));

Paperclip.displayName = 'Paperclip';

Paperclip.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Paperclip;
