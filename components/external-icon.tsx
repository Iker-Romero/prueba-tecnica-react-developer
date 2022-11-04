const ExternalIcon = (props: { iconURL: string; externalURL: string; id: string }) => {
  const { iconURL, externalURL, id } = props;

  return (
    <a href={externalURL} target="_blank" rel="noreferrer">
      <img src={iconURL} alt="External link icon" id={id} />
    </a>
  );
};

export default ExternalIcon;
