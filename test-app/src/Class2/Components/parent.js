import Child from "./child";
import Button from "./Button";
let someValue = "data";
function Parent() {
  return (
    <div>
      Parent Components
      <div>
        <Child></Child>
      </div>
      <Button data={someValue} color="red" title="HTML Tags"></Button>
    </div>
  );
}
export default Parent;

// props
// if we want to share any data from parent components to child components we need to use concepts name props
