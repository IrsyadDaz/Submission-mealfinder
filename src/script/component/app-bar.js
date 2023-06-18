class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        :host {
          display: block;
          position: sticky;
          width: 100%;
          background-color: black;
          color: white;
          box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
        }
        h2 {
          padding: 16px;
        }
      </style>

      <h2>Meal Finder</h2>
    `;
  }
}
customElements.define("app-bar", AppBar);
