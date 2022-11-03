import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Flag = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20.165 2.82007C19.785 2.74007 19.405 2.94005 19.265 3.30005C19.045 3.82005 16.925 6.02003 15.105 6.08003C14.065 6.12003 13.105 5.40004 12.085 4.64004C10.785 3.68004 9.305 2.60006 7.425 2.96006C4.645 3.50006 3.36501 5.98005 3.30501 6.10005C3.22501 6.26005 3.205 6.46004 3.245 6.64004L4.045 10.2201L6.38501 20.6C6.46501 20.98 6.80502 21.2201 7.16502 21.2201C7.22502 21.2201 7.285 21.22 7.345 21.2C7.785 21.1 8.045 20.68 7.945 20.24L6.58501 14.18C6.94501 13.62 7.96502 12.24 9.56502 11.88C10.525 11.66 11.285 11.92 12.165 12.2C13.145 12.52 14.265 12.9 15.705 12.58C18.705 11.9 20.765 8.30007 20.825 3.62007C20.805 3.22007 20.545 2.90007 20.165 2.82007ZM15.325 11.0201C14.325 11.2401 13.545 10.98 12.645 10.68C11.665 10.36 10.565 9.98005 9.18501 10.3C7.82501 10.6 6.80501 11.4001 6.10501 12.1601L6.025 11.8L4.845 6.60005C5.185 6.08005 6.12501 4.84004 7.70501 4.54004C8.90501 4.32004 9.92501 5.06004 11.105 5.94004C12.245 6.78004 13.565 7.74003 15.145 7.68003C16.485 7.62003 17.865 6.84006 18.945 5.96006C18.485 8.36006 17.305 10.5601 15.325 11.0201Z" />
  </svg>
));

Flag.displayName = 'Flag';

Flag.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Flag.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default Flag;