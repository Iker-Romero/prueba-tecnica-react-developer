const Label = (props: { targetID: string; text: string }) => {
  const { targetID, text } = props;

  return <label htmlFor={targetID}>{text}</label>;
};

export default Label;
