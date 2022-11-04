import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Basket = forwardRef(({ color = 'currentColor', size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20.405 8.60001H18.205C18.205 8.60001 18.185 8.54003 18.185 8.52003L14.405 3.90001C14.125 3.56001 13.625 3.5 13.285 3.78C12.945 4.06 12.885 4.6 13.165 4.94L16.145 8.60001H7.88502L10.865 4.94C11.145 4.6 11.105 4.08001 10.745 3.80001C10.405 3.52001 9.90501 3.56001 9.62501 3.90001L5.84501 8.54C5.84501 8.56 5.82501 8.60001 5.82501 8.60001H3.62501C3.18501 8.60001 2.82501 8.88003 2.82501 9.32003V12.32C2.82501 12.76 3.18501 13.2 3.62501 13.2H3.88502L5.38502 19.28C5.54502 19.98 6.16502 20.4 6.88502 20.4H17.165C17.885 20.4 18.485 19.96 18.665 19.28L20.165 13.2H20.425C20.865 13.2 21.225 12.76 21.225 12.32V9.32003C21.205 8.88003 20.845 8.60001 20.405 8.60001ZM4.40501 10.2H19.605V11.6H19.525H4.48502H4.40501V10.2ZM17.105 18.8H6.90501L5.50501 13.2H18.505L17.105 18.8Z" />
  </svg>
));

Basket.displayName = 'Basket';

Basket.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Basket;
