const withShowNotification = (Component) => (props) => {
  console.log(props);
  return (
    <>
      <p>This is HOC - Higher order component</p>
      <Component {...props} />
    </>
  );
};

export default withShowNotification;
