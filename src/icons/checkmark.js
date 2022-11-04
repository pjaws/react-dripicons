import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Checkmark = forwardRef(({ color = 'currentColor', size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M9.68502 17.2C9.44502 17.2 9.225 17.12 9.045 16.94L5.06502 12.96C4.70502 12.6 4.70502 12.04 5.06502 11.68C5.42502 11.32 5.985 11.32 6.345 11.68L9.70501 15.02L17.685 7.05998C18.045 6.69998 18.605 6.69998 18.965 7.05998C19.325 7.41998 19.325 7.97998 18.965 8.33998L10.345 16.94C10.145 17.12 9.92502 17.2 9.68502 17.2Z" />
  </svg>
));

Checkmark.displayName = 'Checkmark';

Checkmark.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Checkmark;
