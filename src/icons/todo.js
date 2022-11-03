import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Todo = forwardRef(({ color, size, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M7.8051 6.36001V3.8C7.8051 3.24 8.2451 2.8 8.8051 2.8C9.3651 2.8 9.8051 3.24 9.8051 3.8V6.36001C9.8051 6.92001 9.3651 7.36001 8.8051 7.36001C8.2451 7.36001 7.8051 6.92001 7.8051 6.36001ZM15.2051 7.36001C15.7651 7.36001 16.2051 6.92001 16.2051 6.36001V3.8C16.2051 3.24 15.7651 2.8 15.2051 2.8C14.6451 2.8 14.2051 3.24 14.2051 3.8V6.36001C14.2051 6.92001 14.6451 7.36001 15.2051 7.36001ZM8.4451 10.8H15.5451C15.9851 10.8 16.3451 10.44 16.3451 10C16.3451 9.56 15.9851 9.2 15.5451 9.2H8.4451C8.0051 9.2 7.6451 9.56 7.6451 10C7.6451 10.44 8.0051 10.8 8.4451 10.8ZM19.6051 4.2H17.9451C17.5051 4.2 17.1451 4.56 17.1451 5C17.1451 5.44 17.5051 5.8 17.9451 5.8H18.8051V19.4H5.2051V5.8H6.0651C6.5051 5.8 6.8651 5.44 6.8651 5C6.8651 4.56 6.5051 4.2 6.0651 4.2H4.4051C3.9651 4.2 3.6051 4.63998 3.6051 5.07998V20.2C3.6051 20.64 3.9651 21 4.4051 21H19.6051C20.0451 21 20.4051 20.64 20.4051 20.2V5.07998C20.4051 4.63998 20.0451 4.2 19.6051 4.2ZM11.3451 5.8H12.6651C13.1051 5.8 13.4651 5.44 13.4651 5C13.4651 4.56 13.1051 4.2 12.6651 4.2H11.3451C10.9051 4.2 10.5451 4.56 10.5451 5C10.5451 5.44 10.9051 5.8 11.3451 5.8ZM8.4451 14.4H15.5451C15.9851 14.4 16.3451 14.04 16.3451 13.6C16.3451 13.16 15.9851 12.8 15.5451 12.8H8.4451C8.0051 12.8 7.6451 13.16 7.6451 13.6C7.6451 14.04 8.0051 14.4 8.4451 14.4Z" />
  </svg>
));

Todo.displayName = 'Todo';

Todo.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Todo.defaultProps = {
  color: 'currentColor',
  size: 24,
};

export default Todo;