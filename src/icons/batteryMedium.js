import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BatteryMedium = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20.405 9.8H19.805V7.6C19.805 7.16 19.465 6.8 19.005 6.8H3.60499C3.16499 6.8 2.80499 7.16 2.80499 7.6V16.4C2.80499 16.84 3.16499 17.2 3.60499 17.2H19.005C19.445 17.2 19.805 16.84 19.805 16.4V14.2H20.405C20.845 14.2 21.205 13.92 21.205 13.48V10.52C21.205 10.08 20.845 9.8 20.405 9.8ZM18.205 15.6H4.40499V8.4H18.205V10.52V13.48V15.6ZM8.60499 13.6C8.60499 14.04 8.24499 14.4 7.80499 14.4H6.40499C5.96499 14.4 5.60499 14.04 5.60499 13.6V10.4C5.60499 9.96 5.96499 9.6 6.40499 9.6H7.80499C8.24499 9.6 8.60499 9.96 8.60499 10.4V13.6ZM12.805 13.6C12.805 14.04 12.445 14.4 12.005 14.4H10.605C10.165 14.4 9.80499 14.04 9.80499 13.6V10.4C9.80499 9.96 10.165 9.6 10.605 9.6H12.005C12.445 9.6 12.805 9.96 12.805 10.4V13.6Z" />
  </svg>
));

BatteryMedium.displayName = 'BatteryMedium';

BatteryMedium.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BatteryMedium.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default BatteryMedium;
