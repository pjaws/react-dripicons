import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Headset = forwardRef(({ color = 'currentColor', size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20.605 11.36L20.585 16.42C20.585 16.86 20.225 17.2 19.785 17.2C19.345 17.2 18.985 16.86 18.985 16.42L19.005 11.36C19.005 9.49999 18.285 7.75999 16.965 6.43999C15.645 5.11999 13.885 4.39999 12.025 4.39999H12.005C8.16497 4.39999 5.02497 7.49999 5.00497 11.32V16.4C5.00497 16.84 4.64497 17.2 4.20497 17.2C3.76497 17.2 3.40497 16.84 3.40497 16.4L3.42496 11.32C3.44496 6.61999 7.28496 2.79999 12.025 2.79999H12.045C14.345 2.79999 16.505 3.69999 18.105 5.31999C19.725 6.93999 20.605 9.07999 20.605 11.36ZM10.125 11.78C10.265 11.92 10.325 12.06 10.325 12.24L10.305 20.34C10.305 20.72 9.98497 21 9.60497 21C6.96497 21 6.10497 19.48 6.00497 18.64C6.00497 18.62 6.00497 18.64 6.00497 18.6L6.02496 14.04C6.02496 14.02 6.02496 14 6.02496 13.96C6.12496 13.14 7.00496 11.58 9.62496 11.58H9.64496C9.80496 11.6 9.98496 11.64 10.125 11.78ZM8.92496 13.02C7.66496 13.22 7.44497 13.96 7.40497 14.1L7.38497 18.56C7.42497 18.72 7.64497 19.44 8.90497 19.64L8.92496 13.02ZM18.025 14.04L18.045 18.58C18.045 18.6 18.045 18.62 18.045 18.64C17.945 19.46 17.085 21 14.445 21C14.065 21 13.745 20.74 13.745 20.34L13.725 12.28C13.725 12.1 13.805 11.92 13.925 11.8C14.065 11.66 14.225 11.6 14.425 11.6H14.445C17.065 11.6 17.945 13.14 18.045 13.98C18.025 14 18.025 14 18.025 14.04ZM16.645 18.56L16.625 14.1C16.585 13.94 16.365 13.22 15.105 13.02L15.125 19.64C16.405 19.42 16.605 18.7 16.645 18.56Z" />
  </svg>
));

Headset.displayName = 'Headset';

Headset.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Headset;
