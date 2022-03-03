import House from "../Assets/House.jpg";
function Image() {
  return (
    <div>
      <img style={{ width: 200 }} src={House} alt="my_house" srcset="" />
    </div>
  );
}
export default Image;
