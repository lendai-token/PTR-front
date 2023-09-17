const ProgressBar = (props: any) => {
    const { bgcolor, completed } = props;
  
    const containerStyles = {
      height: 6,
      width: '100%',
      backgroundColor: "#3a99ff80",
      borderRadius: 50,
    }
  
    const fillerStyles: any  = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: `${bgcolor}`,
      borderRadius: 'inherit',
      textAlign: 'right',
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;