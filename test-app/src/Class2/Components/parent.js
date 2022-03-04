import Child from "./child";
import Button from "./Button";
function Parent() {
  return (
    <div>
      Parent Components
      <div>
        <Child></Child>
      </div>
      <Button title="HTML Tags"></Button>
    </div>
  );
}
export default Parent;
