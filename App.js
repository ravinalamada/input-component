import React from 'react';
import ReactDOM from 'react-dom';
import InputComponent from "./InputComponent";

function App() {

  return (
    <form>
      <div className="wrapper">
        <span>{`<input />`}</span>
        <InputComponent >
          <label>Label</label>
        </InputComponent>
      </div>
      <div className="wrapper">
        <span>{`<input error />`}</span>
        <InputComponent error>
          <label className="label">Label</label>
        </InputComponent>
      </div>
      <div className="wrapper">
        <span>{`<input disabled />`}</span>
        <InputComponent disabled>
          <label>Label</label>
        </InputComponent>
      </div>
      <div className="container">
        <div className="wrapper">
          <span>{`<input helpertext="Some intersting text" />`}</span>
          <InputComponent >
            <label>Label</label>
          </InputComponent>
          <span helpertext="true">Some intersting text</span>
        </div>
        <div className="wrapper">
          <span>{`<input helpertext="Some intersting text" error />`}</span>
          <InputComponent error>
            <label className="label">Label</label>
          </InputComponent>
          <span helpertext="true">Some intersting text</span>
        </div>
      </div>
      <div className="wrapper">
        <span>{`<input value="Text" />`}</span>
        <InputComponent value="Text">
          <label>Label</label>
        </InputComponent>
      </div>
      <div className="container">
        <div className="wrapper phone">
          <span>{`<input />`}</span>
          <InputComponent startIcon="phone">
            <label>Label</label>
          </InputComponent>
        </div>
        <div className="wrapper lock">
          <span>{`<input />`}</span>
          <InputComponent endIcon="lock">
            <label>Label</label>
          </InputComponent>
        </div>
      </div>
      <div className="wrapper text">
        <span>{`<input fullwidth/>`}</span>
        <InputComponent value="Text">
          <label>Label</label>
        </InputComponent>
      </div>
      <div className="container">
        <div className="wrapper">
          <span>{`<input size="sm" />`}</span>
          <InputComponent size="sm" >
            <label>Label</label>
          </InputComponent>
        </div>
        <div className="wrapper">
          <span>{`<input size="md"/>`}</span>
          <InputComponent size="md">
            <label>Label</label>
          </InputComponent>
        </div>
      </div>
      <div className="wrapper textarea">
        <span>{`<input multilines />`}</span>
        <InputComponent>
          <label>Label</label>
        </InputComponent>
      </div>
    </form>
  )
}

export default App;
