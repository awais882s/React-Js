import ThirdChild from "./thirdChild";
function SecondChild() {
  return (
    <div>
      SecondChild Components
      <div>
       <ThirdChild></ThirdChild>
      </div>
    </div>
  );
}
export default SecondChild;
