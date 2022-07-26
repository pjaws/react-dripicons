import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Inbox = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M21.205 10.64C21.205 10.62 21.205 10.58 21.205 10.56C21.205 10.54 21.205 10.52 21.185 10.48C21.185 10.46 21.165 10.42 21.165 10.4C21.165 10.38 21.145 10.36 21.145 10.32C21.125 10.3 21.125 10.28 21.105 10.26C21.085 10.24 21.065 10.22 21.065 10.18L21.045 10.16L16.745 4.9C16.585 4.72 16.365 4.6 16.125 4.6H7.94499C7.70499 4.6 7.48499 4.7 7.32499 4.9L3.02499 10.16L3.00499 10.18C2.98499 10.2 2.96499 10.22 2.96499 10.26C2.94499 10.28 2.94499 10.3 2.92499 10.32C2.90499 10.34 2.90499 10.36 2.90499 10.4C2.90499 10.42 2.885 10.44 2.885 10.48C2.885 10.5 2.86499 10.52 2.86499 10.56C2.86499 10.58 2.86499 10.62 2.86499 10.64C2.86499 10.66 2.86499 10.66 2.86499 10.68V17.84C2.86499 18.72 3.58499 19.42 4.46499 19.42H19.605C20.485 19.42 21.205 18.72 21.205 17.84V10.68C21.205 10.66 21.205 10.64 21.205 10.64ZM8.285 6.2H15.705L18.705 9.8H16.045C15.825 9.8 15.605 9.94 15.445 10.1L13.625 12.2H10.365L8.54499 10.1C8.38499 9.92 8.18499 9.8 7.94499 9.8H5.285L8.285 6.2ZM19.605 17.8H4.40499V11.4H7.585L9.32499 13.4C9.52499 13.64 9.82499 13.8 10.145 13.8H13.865C14.185 13.8 14.465 13.62 14.685 13.4L16.425 11.4H19.605V17.8Z" />
  </svg>
));

Inbox.displayName = 'Inbox';

Inbox.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Inbox.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default Inbox;
