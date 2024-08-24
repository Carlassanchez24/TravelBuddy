import PropTypes from 'prop-types';

const Button = ({ children, onClick, type = 'button', className = '' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-primaryBlue text-secondaryWhite w-[354px] h-[50px] rounded-full text-16 font-bold hover:bg-primaryBlue/90 ${className}`}
    >
      {children}
    </button>
  );
};

// Validación de props
Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
};

export default Button;