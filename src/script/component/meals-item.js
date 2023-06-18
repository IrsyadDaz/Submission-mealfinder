class MealsItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }
  set meals(meals) {
    this._meals = meals;
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
          margin-bottom: 20px;
          box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
          border-radius: 10px;
          overflow: hidden;
        }

        .item {
          background-color:white;
        }
      
        .meals {
          width: 100%;
          max-height: 300px;
          object-fit: cover;
          object-position: center;
          color: red;
        }
      
        .meals-info {
          padding: 24px;
        }
      
        .meals-info > h1 {
          font-weight: bold;
          color: black;
          text-align:center
        }
      
        .meals-info > p {
          margin-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 10; /* number of lines to show */
        }
      </style>

      <div class="item">
        <img class="meals" src="${this._meals.strMealThumb}" alt="Meal Thumnail">
        <div class="meals-info">
          <h1>${this._meals.strMeal}</h1>
          <h4>Category : ${this._meals.strCategory}</h4>
          <h4>Country : ${this._meals.strArea}</h4>
          <p>Instruction :</p>
          <p>${this._meals.strInstructions}</p>
        </div>
      </div>
    `;
  }
}
customElements.define("meals-item", MealsItem);
