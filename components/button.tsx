const Button = (props: { id: string; text: string; color: string }) => {
  const { id, text, color } = props;

  const buttonStyles = {
    backgroundColor: color,
  };

  return (
    <button id={id} style={buttonStyles}>
      {text}
    </button>
  );
};

export default Button;
