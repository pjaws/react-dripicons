import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const MediaShuffle = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M16.4451 8.79999C15.6051 8.79999 13.5051 10.88 11.9651 12.38C9.64511 14.62 7.44512 16.8 5.68512 16.8H4.60511C4.16511 16.8 3.80511 16.44 3.80511 16C3.80511 15.56 4.16511 15.2 4.60511 15.2H5.68512C6.80512 15.2 9.04512 12.96 10.8451 11.22C13.0451 9.09999 14.9451 7.19999 16.4251 7.19999H17.4651L16.3651 6.13999C16.0451 5.81999 16.0451 5.35999 16.3651 5.03999C16.6851 4.71999 17.1851 4.71999 17.5051 5.03999L19.9651 7.49999C20.1251 7.65999 20.2051 7.85999 20.2051 8.05999C20.2051 8.27999 20.1251 8.47999 19.9651 8.61999L17.5051 11.08C17.3451 11.24 17.1451 11.3 16.9451 11.3C16.7451 11.3 16.5451 11.22 16.3851 11.06C16.0651 10.74 16.0651 10.22 16.3851 9.91999L17.4851 8.79999H16.4451ZM17.5051 12.92C17.1851 12.6 16.6851 12.6 16.3651 12.92C16.0451 13.24 16.0451 13.76 16.3651 14.08L17.4651 15.2H16.4251C15.7651 15.2 14.6651 14.22 13.5851 13.22C13.2651 12.92 12.7651 12.92 12.4451 13.24C12.1451 13.56 12.1651 14.1 12.4851 14.4C14.1451 15.96 15.2651 16.82 16.4251 16.82H17.4651L16.3651 17.88C16.0451 18.2 16.0451 18.68 16.3651 19C16.5251 19.16 16.7251 19.22 16.9251 19.22C17.1251 19.22 17.3251 19.14 17.4851 18.98L19.9451 16.52C20.1051 16.36 20.1851 16.16 20.1851 15.96C20.1851 15.74 20.1051 15.54 19.9451 15.4L17.5051 12.92ZM4.60511 8.79999H5.68512C6.52512 8.79999 7.78512 9.87999 8.78512 10.78C8.94512 10.92 9.12511 11 9.32511 11C9.54511 11 9.76511 10.92 9.92511 10.74C10.2251 10.42 10.2051 9.87999 9.86511 9.57999C8.30511 8.15999 6.98512 7.17999 5.68512 7.17999H4.60511C4.16511 7.17999 3.80511 7.53999 3.80511 7.97999C3.80511 8.41999 4.16511 8.79999 4.60511 8.79999Z" />
  </svg>
));

MediaShuffle.displayName = 'MediaShuffle';

MediaShuffle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MediaShuffle.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default MediaShuffle;
