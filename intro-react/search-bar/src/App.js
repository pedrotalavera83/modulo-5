import "./styles.css";
/*
HTML:

<form>
  <label for="search-input">Search:</label>
  <input id="search-input">
  <button aria-label="Submit" class="submit-btn">
    <img
      alt=""
      src="https://super.so/icon/dark/arrow-right.svg"
    >
  </button>
</form>
*/

export default function App() {
    return (
        <form>
            <label htmlFor="search-input">Search:</label>
            <input id="search-input" />
            <button aria-label="Submit" className="submit-btn">
                <img alt="" src="https://super.so/icon/dark/arrow-right.svg" />
            </button>
        </form>
    );
}
