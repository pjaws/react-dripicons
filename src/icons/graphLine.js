import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const GraphLine = forwardRef(({ color = 'currentColor', size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M4.0051 19.2C3.8251 19.2 3.6451 19.16 3.4851 19.06C3.0051 18.78 2.86509 18.16 3.14509 17.68L5.5851 13.58C5.7651 13.3 6.0651 13.1 6.4051 13.1C6.7451 13.08 7.06511 13.24 7.26511 13.52L8.3051 14.96L10.5051 11.2C10.6651 10.92 10.9851 10.72 11.3051 10.7C11.6451 10.68 11.9651 10.84 12.1651 11.1L14.0851 13.68L19.1451 5.27999C19.4251 4.79999 20.0451 4.65998 20.5251 4.93998C21.0051 5.21998 21.1451 5.83998 20.8651 6.31998L15.0451 16C14.8651 16.28 14.5651 16.46 14.2451 16.48C13.9051 16.5 13.5851 16.34 13.3851 16.08L11.4651 13.52L9.24509 17.3C9.06509 17.6 8.76509 17.78 8.42509 17.8C8.08509 17.82 7.76511 17.66 7.56511 17.38L6.52509 15.94L4.86511 18.72C4.68511 19.02 4.3451 19.2 4.0051 19.2Z" />
  </svg>
));

GraphLine.displayName = 'GraphLine';

GraphLine.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default GraphLine;
