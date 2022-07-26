import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Stopwatch = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M19.065 6.71998C19.225 6.85998 19.405 6.91998 19.605 6.91998C19.825 6.91998 20.045 6.83997 20.205 6.65997C20.505 6.33997 20.485 5.81998 20.145 5.51998L19.105 4.57994L18.065 3.63995C17.745 3.33995 17.225 3.35996 16.945 3.69996C16.665 4.03996 16.665 4.53995 17.005 4.83995L17.445 5.23995L16.645 6.13995C15.725 5.45995 14.665 4.95996 13.505 4.69996C13.485 4.43996 13.385 4.15996 13.185 3.89996C12.985 3.61996 12.565 3.29997 11.805 3.25997C11.785 3.25997 11.785 3.25997 11.765 3.25997C11.065 3.25997 10.665 3.55998 10.445 3.81998C10.205 4.09998 10.105 4.43996 10.065 4.69996C6.385 5.47996 3.625 8.77995 3.625 12.6799C3.625 17.1799 7.285 20.86 11.785 20.86C16.285 20.86 19.945 17.1999 19.945 12.6799C19.945 10.5799 19.145 8.65997 17.845 7.19996L18.645 6.29996L19.065 6.71998ZM11.765 19.24C8.145 19.24 5.205 16.2999 5.205 12.6799C5.205 9.05995 8.145 6.11998 11.765 6.11998C15.385 6.11998 18.325 9.05995 18.325 12.6799C18.325 16.2999 15.385 19.24 11.765 19.24ZM13.165 12.6799C13.165 13.4399 12.525 14.06 11.785 14.06C11.025 14.06 10.425 13.4399 10.425 12.6799C10.425 12.2199 10.625 11.8 11.025 11.56V8.31998C11.025 7.87998 11.385 7.51998 11.825 7.51998C12.265 7.51998 12.625 7.87998 12.625 8.31998V11.56C13.005 11.8 13.165 12.2199 13.165 12.6799Z" />
  </svg>
));

Stopwatch.displayName = 'Stopwatch';

Stopwatch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Stopwatch.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default Stopwatch;
