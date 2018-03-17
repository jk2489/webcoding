import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
//import './index.css';

const data = [
  {
    "name": "구운 연어",
    "ingredients": [
      { "name": "연어", "amount": 500, "measurement": "그램" },
      { "name": "잣", "amount": 1, "measurement": "컵" },
      { "name": "버터상추", "amount": 2, "measurement": "컵" },
      { "name": "올리브오일", "amount": 0.5, "measurement": "컵" },
      { "name": "마늘", "amount": 3, "measurement": "쪽" }
    ],
    "steps": [
      "오븐을 350도로 예열한다",
      "연어, 마늘, 잣을 그릇에 담는다",
      "오븐에서 15분간 익힌다",
      "그릇을 꺼내어 15분간 식힌 후 상추를 곁들여 내놓는다"
    ]
  },
]

const Recipe = ({ name, ingredients, steps }) =>
  <section id={name.toLowerCase().replace(/ /g, "-")}>
    <h1>{name}</h1>
    <ul className="ingredients">
      {ingredients.map((ingredient, i) =>
        <li key={i}>{ingredient.name}</li>
      )}
    </ul>
    <section className="instructions">
      <h2>조리절차</h2>
      {steps.map((step, i) =>
        <p key={i}>{i + 1}: {step}</p>
      )}
    </section>
  </section>

const Menu = ({ title, recipes }) =>
  <article>
    <header>
      <h1>{title}</h1>
    </header>
    <div className="recipes">
      {recipes.map((recipe, i) =>
        <Recipe key={i} {...recipe} />
      )}
    </div>
  </article>
/*
const Summary = createClass({
  displayName: "Summary",
  propTypes: {
    ingredients: PropTypes.array,
    steps: PropTypes.array,
    title: PropTypes.string
  },

  render() {
    const {ingredients, steps, title} = this.props

    return(
      <div className="summary">
        <h1>{title}</h1>
        <p>
          <span>재료 {ingredients.length} 종류 | </span>
          <span>총 {steps.length} 단계 </span>
        </p>
      </div>
    )
  }
})
*/
ReactDOM.render(
  <Menu recipes={data}
    title="조리법" />,
  document.getElementById('root')
);
