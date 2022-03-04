import House from "../Assets/House.jpg";
function Image() {
  return (
    <div>
      <img style={{ width: 400 }} src={House} alt="my_house" srcset="" />
    </div>
  );
}
export default Image;
