import Child from "./child";
import Button from "./Button";
import Information from "./Informations";
let someValue = "data";
function Parent() {
  return (
    <div>
      Parent Components
      <div>
        <Child></Child>
      </div>
      <Button data={someValue} color="red" title="HTML Tags"></Button>
      <div>
        <Information color="blue" title="AWAIS S"></Information>
        <Information color="IndianRed" title="SOFTWARE ENGINEER"></Information>
      </div>
    </div>
  );
}
export default Parent;

// props
// if we want to share any data from parent components to child components we need to use concepts name props
