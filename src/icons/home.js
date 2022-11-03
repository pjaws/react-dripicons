import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Home = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20.405 12.6C20.205 12.6 20.005 12.52 19.845 12.38L12.005 4.72001L4.16499 12.38C3.84499 12.68 3.34498 12.68 3.02498 12.36C2.72498 12.04 2.72499 11.54 3.04499 11.22L11.445 3.02001C11.765 2.72001 12.245 2.72001 12.565 3.02001L20.965 11.22C21.285 11.52 21.285 12.04 20.985 12.36C20.825 12.52 20.605 12.6 20.405 12.6ZM18.645 20.4V12.58C18.645 12.14 18.285 11.78 17.845 11.78C17.405 11.78 17.045 12.14 17.045 12.58V19.6H14.545V15.32C14.545 14.74 14.065 14.26 13.485 14.26H10.505C9.92499 14.26 9.44499 14.74 9.44499 15.32V19.6H6.94499V12.58C6.94499 12.14 6.58499 11.78 6.14499 11.78C5.70499 11.78 5.34499 12.14 5.34499 12.58V20.4C5.34499 20.84 5.70499 21.2 6.14499 21.2H10.245C10.685 21.2 11.045 20.84 11.045 20.4V15.86H12.945V20.4C12.945 20.84 13.305 21.2 13.745 21.2H17.845C18.305 21.2 18.645 20.84 18.645 20.4Z" />
  </svg>
));

Home.displayName = 'Home';

Home.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Home.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default Home;