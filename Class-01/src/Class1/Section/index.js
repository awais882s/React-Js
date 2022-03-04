function Footer() {
  return (
    <>
      <h1>JOIN US</h1>
      <form>
        <input type="text" placeholder="Name" width="100%" />
        <input type="text" placeholder="Adress" />
        <input type="text" placeholder="City" />
        <input type="text" placeholder="State" />
        <input type="text" placeholder="ZIP" />
        <select name="newsweek" id="menu">
          <option value="option 1">option 1</option>
          <option value="option 2">option 2</option>
          <option value="option 3">option 3</option>
          <option value="Newsweek" selected>
            Newsweek
          </option>
        </select>
        <br />
        <input type="radio" value="year 1" />
        <label for="year 1"> year 1</label>
        <input type="radio" value="year 2" />
        <label for="year 2"> year 2</label>
        <br />
        <textarea
          name="text area"
          cols="30"
          rows="5"
          placeholder="Comments..."
        ></textarea>
      </form>
    </>
  );
}
export default Footer;
