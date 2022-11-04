import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const DocumentEdit = forwardRef(
  ({ color = 'currentColor', size = 24, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M19.8251 4.43998L18.3851 2.97999C18.2651 2.85999 18.1251 2.79999 17.9651 2.79999C17.8051 2.79999 17.6451 2.85999 17.5451 2.97999L9.16511 11.48C9.10511 11.54 9.06509 11.6 9.02509 11.68L8.0851 14.06C8.0051 14.28 8.04509 14.54 8.22509 14.7C8.34509 14.82 8.48509 14.88 8.64509 14.88C8.72509 14.88 8.78511 14.86 8.86511 14.84L11.2251 13.9C11.3051 13.86 11.3651 13.82 11.4251 13.76L19.8051 5.26C20.0651 5.04 20.0651 4.65998 19.8251 4.43998ZM10.6851 12.84L9.72509 13.22L10.1051 12.24L17.9651 4.26L18.5651 4.86L10.6851 12.84ZM16.8051 12.12V20.2C16.8051 20.64 16.4051 21 15.9651 21H4.6051C4.1651 21 3.8051 20.64 3.8051 20.2V4.96C3.8051 4.52 4.1651 4.19999 4.6051 4.19999H12.9251C13.3651 4.19999 13.7251 4.55999 13.7251 4.99999C13.7251 5.43999 13.3651 5.79999 12.9251 5.79999H5.4051V19.4H15.2051V12.12C15.2051 11.68 15.5651 11.32 16.0051 11.32C16.4451 11.32 16.8051 11.68 16.8051 12.12Z" />
    </svg>
  )
);

DocumentEdit.displayName = 'DocumentEdit';

DocumentEdit.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default DocumentEdit;
