function Button(props) {
  console.log("props", props);
  return (
    <div>
      <button>{props.title}</button>
    </div>
  );
}
export default Button;
