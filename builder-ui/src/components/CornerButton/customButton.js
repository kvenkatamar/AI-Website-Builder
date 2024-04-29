import "./customButton.css";

// Button component
function CustomButton({ onClick, icon }) {
  return (
    <button className="pebble-button" onClick={onClick}>
      {icon}
    </button>
  );
}

export default CustomButton;
