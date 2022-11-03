import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Alarm = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M19.285 8.84002C19.505 8.64002 20.385 7.82003 20.405 6.60003C20.425 5.72003 20.005 4.92003 19.165 4.20003L19.145 4.18001C18.145 3.40001 17.265 3.36004 16.705 3.46004C15.725 3.64004 15.065 4.34005 14.785 4.72005C13.925 4.40005 12.985 4.24002 12.025 4.24002C11.065 4.24002 10.125 4.42005 9.26504 4.72005C8.96504 4.34005 8.32502 3.64004 7.34502 3.46004C6.78502 3.36004 5.90503 3.40001 4.90503 4.18001L4.88503 4.20003C4.04504 4.92003 3.62502 5.74003 3.64502 6.60003C3.66502 7.82003 4.52504 8.64002 4.76504 8.84002C4.26504 9.88002 4.00503 11.04 4.00503 12.28C4.00503 14.3 4.76503 16.16 6.00503 17.58C5.98503 17.6 5.98504 17.6 5.96504 17.6201L4.80503 19.36C4.56503 19.72 4.66503 20.22 5.02503 20.46C5.16503 20.56 5.32504 20.6 5.46504 20.6C5.72504 20.6 5.98503 20.48 6.12503 20.24L7.16504 18.68C8.52504 19.72 10.205 20.34 12.045 20.34C13.885 20.34 15.585 19.72 16.945 18.66L18.005 20.24C18.165 20.48 18.405 20.6 18.665 20.6C18.825 20.6 18.965 20.56 19.105 20.46C19.465 20.22 19.565 19.72 19.325 19.36L18.165 17.6201C18.145 17.6 18.125 17.58 18.105 17.56C19.325 16.14 20.065 14.3 20.065 12.28C20.045 11.04 19.785 9.88002 19.285 8.84002ZM16.985 5.02005C17.325 4.96005 17.705 5.10005 18.125 5.42005C18.585 5.82005 18.805 6.20001 18.805 6.58001C18.805 6.92001 18.605 7.24002 18.425 7.44002C17.825 6.64002 17.085 5.98002 16.245 5.44002C16.445 5.24002 16.705 5.06005 16.985 5.02005ZM5.20503 6.58001C5.20503 6.20001 5.42503 5.82005 5.88504 5.42005C6.30503 5.10005 6.68502 4.96005 7.02502 5.02005C7.30502 5.08005 7.56504 5.26002 7.76504 5.44002C6.92504 5.96002 6.18503 6.64002 5.58503 7.44002C5.42503 7.22002 5.20503 6.92001 5.20503 6.58001ZM12.005 18.74C8.44503 18.74 5.56504 15.84 5.56504 12.28C5.56504 8.72001 8.46503 5.82005 12.005 5.82005C15.565 5.82005 18.445 8.72001 18.445 12.28C18.445 15.84 15.565 18.74 12.005 18.74ZM14.905 14.04C15.225 14.36 15.225 14.86 14.905 15.18C14.745 15.34 14.545 15.4201 14.345 15.4201C14.145 15.4201 13.945 15.34 13.785 15.18L11.445 12.84C11.305 12.68 11.205 12.48 11.205 12.28V7.98001C11.205 7.54001 11.565 7.18001 12.005 7.18001C12.445 7.18001 12.805 7.54001 12.805 7.98001V11.96L14.905 14.04Z" />
  </svg>
));

Alarm.displayName = 'Alarm';

Alarm.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Alarm.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default Alarm;