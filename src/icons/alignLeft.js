import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const AlignLeft = forwardRef(({ color = 'currentColor', size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M19.2051 6.39999H4.80513C4.36513 6.39999 4.00513 6.03999 4.00513 5.59999C4.00513 5.15999 4.36513 4.79999 4.80513 4.79999H19.2051C19.6451 4.79999 20.0051 5.15999 20.0051 5.59999C20.0051 6.03999 19.6451 6.39999 19.2051 6.39999ZM13.8851 9.87999C13.8851 9.43999 13.5251 9.07999 13.0851 9.07999H4.80513C4.36513 9.07999 4.00513 9.43999 4.00513 9.87999C4.00513 10.32 4.36513 10.68 4.80513 10.68H13.0851C13.5251 10.68 13.8851 10.32 13.8851 9.87999ZM16.3251 14.14C16.3251 13.7 15.9651 13.34 15.5251 13.34H4.80513C4.36513 13.34 4.00513 13.7 4.00513 14.14C4.00513 14.58 4.36513 14.94 4.80513 14.94H15.5251C15.9651 14.94 16.3251 14.58 16.3251 14.14ZM19.2851 18.4C19.2851 17.96 18.9251 17.6 18.4851 17.6H4.86512C4.42512 17.6 4.06512 17.96 4.06512 18.4C4.06512 18.84 4.42512 19.2 4.86512 19.2H18.4851C18.9251 19.2 19.2851 18.84 19.2851 18.4Z" />
  </svg>
));

AlignLeft.displayName = 'AlignLeft';

AlignLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default AlignLeft;
