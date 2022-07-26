import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Experiment = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20.7249 3.62001C20.5849 3.36001 20.3049 3.20001 20.0249 3.20001H4.00492C3.70492 3.20001 3.44492 3.36001 3.30492 3.62001C3.16492 3.88001 3.22492 4.2 3.38492 4.44L9.62491 13.6V19.66C9.62491 20.28 10.0449 20.8 10.6849 20.8H13.3649C13.9849 20.8 14.4249 20.3 14.4249 19.66V13.6L20.6649 4.44C20.8049 4.2 20.8649 3.88001 20.7249 3.62001ZM12.9849 12.92C12.9049 13.06 12.8049 13.2 12.8049 13.36V19.2H11.2049V13.36C11.2049 13.2 11.1249 13.04 11.0249 12.92L9.12491 10.14C9.52491 10.02 10.0049 9.90001 10.5249 9.92001C11.1449 9.92001 11.5649 10.04 12.0249 10.16C12.5049 10.28 12.9849 10.4 13.6649 10.42C14.0649 10.42 14.4249 10.4 14.7449 10.36L12.9849 12.92ZM15.9049 8.64C15.8849 8.64 15.0449 9.02001 13.6649 9.00001C13.1649 9.00001 12.7849 8.90002 12.3649 8.78002C11.8849 8.66002 11.3249 8.52001 10.5249 8.50001C9.62491 8.50001 8.82492 8.72001 8.28492 8.92001L5.48492 4.78002H18.5049L15.9049 8.64ZM14.2649 7.32001C14.1249 7.18001 14.0249 6.96002 14.0249 6.76002C14.0249 6.54002 14.1049 6.34001 14.2649 6.20001C14.4049 6.06001 14.6249 5.96002 14.8249 5.96002C15.0449 5.96002 15.2449 6.04001 15.3849 6.20001C15.5249 6.36001 15.6249 6.56002 15.6249 6.76002C15.6249 6.98002 15.5449 7.18001 15.3849 7.32001C15.2249 7.46001 15.0249 7.56002 14.8249 7.56002C14.6249 7.56002 14.4049 7.46001 14.2649 7.32001Z" />
  </svg>
));

Experiment.displayName = 'Experiment';

Experiment.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Experiment.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default Experiment;
