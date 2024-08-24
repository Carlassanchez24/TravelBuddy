import PropTypes from 'prop-types';

const Button = ({ children, onClick, type = 'button', className = '' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-[334px] h-[50px] rounded-full text-16 font-bold bg-primaryBlue text-secondaryWhite hover:bg-primaryBlue/90 focus:outline-none focus:ring-2 focus:ring-primaryBlue focus:ring-opacity-50 max-w-[334px] mx-auto ${className}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
};

export default Button;