import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Pencil = forwardRef(({ color = 'currentColor', size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20.6249 4.02002L19.9849 3.37998C19.6049 2.99998 19.1049 2.8 18.5849 2.8C18.0449 2.8 17.5649 2.99998 17.1849 3.37998L4.5449 16.04C4.4649 16.12 4.4049 16.2 4.3649 16.32L2.8649 20.1C2.7449 20.4 2.8249 20.74 3.0449 20.96C3.2049 21.12 3.4049 21.2 3.6049 21.2C3.7049 21.2 3.8049 21.18 3.9049 21.14L7.7049 19.66C7.8049 19.62 7.9049 19.56 7.9849 19.48L20.6449 6.82002C21.4049 6.06002 21.4049 4.80002 20.6249 4.02002ZM5.7649 17.14L6.8849 18.26L5.0249 18.98L5.7649 17.14ZM19.4849 5.7L8.4449 16.74L7.2849 15.58L18.3249 4.52002C18.4249 4.42002 18.5449 4.4 18.6049 4.4C18.6649 4.4 18.7849 4.42002 18.8849 4.52002L19.5249 5.16001C19.6449 5.30001 19.6449 5.54 19.4849 5.7Z" />
  </svg>
));

Pencil.displayName = 'Pencil';

Pencil.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Pencil;
