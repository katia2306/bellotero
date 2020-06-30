import React, { useState, useEffect } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux"
import { Slider } from '@reach/slider';
import { getCalculatorRequest } from "../store/actions";
import { IApp, ICalculator } from "../store/reducer";
import "@reach/slider/styles.css";
import "./style.scss";

interface CalculatorApp {
  getCalculator: () => void;
  calculator: ICalculator;
}

const Calculator = (props: CalculatorApp) => {
  const { getCalculator, calculator } = props;
  const [employees, setEmployees] = useState(1);
  const [ingredients, setIngredients] = useState("10.000");
  const ingredientesNumber = parseFloat(ingredients);
  const maximumEmployees = 10;
  const maximumIngredients = 100;
  const foodCost = (parseFloat(ingredients) * 0.3).toFixed(3);
  const annualSavings = (employees * 1337 + parseFloat(foodCost)).toFixed(3);

  useEffect(() => {
    getCalculator();
  }, [getCalculator]);

  const handleChangeEmployees = (newValue: string) => {
    const value = newValue;
    let employeesNumber = isNaN(parseInt(value)) ? 0 : parseInt(value);
    if (employeesNumber > maximumEmployees) employeesNumber = maximumEmployees;
    setEmployees(employeesNumber);

  };

  const handleChangeIngredients = (newValue: string) => {
    const value = newValue;
    let ingredientsNumber = isNaN(parseFloat(value)) ? 0 : parseFloat(value);
    if (ingredientsNumber > maximumIngredients) ingredientsNumber = maximumIngredients;
    setIngredients(ingredientsNumber.toFixed(3));
  };

  return (
    <>
      <div className="components-container">
        <div className="calculator-container">
          <div className="information">
            <div className="title title-calculator">{calculator.title}</div>
            <div className="description">{calculator.description}</div>
          </div>
          <div className="calculations">
            <div>
              <div className="description-calculator">
                <span className="title-description-calculator">Monthly ingredient spending</span>
                <div className="total total-ingredients">
                  <span>$</span>
                  <div className="total-ingredients-number">
                    <input value={ingredients} onChange={(event) => handleChangeIngredients(event.target.value)} type="string" />
                  </div>
                </div>
              </div>
              <Slider min={10} max={maximumIngredients} step={0.25} value={ingredientesNumber} onChange={(event) => handleChangeIngredients(event.toString())} />
            </div>
            <div>
              <div className="description-calculator">
                <span className="title-description-calculator">Full-time employees that process invoices</span>
                <div className="total total-employees"><input value={employees} onChange={(event) => handleChangeEmployees(event.target.value)} /></div>
              </div>
              <Slider min={1} max={maximumEmployees} step={1} value={employees} onChange={(event) => handleChangeEmployees(event.toString())} />
            </div>
            <div className="calculations-result">
              <div className="calculation-result-left">
                <div className="results"><span>$</span> {foodCost}</div>
                <div className="title-description-calculator description-calculation">Estimated cost food savings</div>
              </div>
              <div className="calculation-result-right">
                <div className="results"><span>$</span> {annualSavings}</div>
                <div className="title-description-calculator description-calculation">Your estimated annual savings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state: IApp) => {
  return {
    calculator: state.calculator,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getCalculator: () => {
      dispatch(getCalculatorRequest())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
