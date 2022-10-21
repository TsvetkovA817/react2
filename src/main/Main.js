import React from 'react';
import './main.css';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count1: 0,
      text1: 'Lorem autem distinctio adipisci'
    }
    this.btnMinus = this.btnMinus.bind(this);
    this.inpText1 = this.inpText1.bind(this);
    this.movMous1 = this.movMous1.bind(this);
  }


  btnPLus = () => {
    let v = this.state.count1 + 1;
    this.setState({ count1: v });
    this.setState({ text1: 'Lorem ipsum dolor ' + v });
  }

  btnMinus() {
    let v = this.state.count1 - 1;
    this.setState({ count1: v });
    this.setState({ text1: 'Lorem ipsum dolor ' + v });
  }

  inpText1(event) {
    this.setState({ count1: Number(event.target.value) });
    console.log(event.target.value);
  }

  movMous1(e) {
    console.log(e.target.value);
    this.setState({ count1: Number(e.target.textContent) });
  }

  render() {
    let ul = this.props.ul1;
    return (
      <div className="container">
        <div className="App">
          <h1>Lorem ipsum dolor 1</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint autem distinctio adipisci impedit est sunt, deserunt tenetur voluptas recusandae, praesentium suscipit explicabo eum incidunt sequi eos accusantium asperiores perferendis? Consectetur!</p>

          <ul>{Object.keys(ul).map(el => {
            return <li key={el}>{ul[el]}</li>
          })}
          </ul>

          <h2>Lorem ipsum dolor 2</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint autem distinctio adipisci impedit est sunt, deserunt tenetur voluptas recusandae, praesentium suscipit explicabo eum incidunt sequi eos accusantium asperiores perferendis? Consectetur!</p>
          <p>{this.state.count1}</p>
          <p>{this.state.text1}</p>
          <button type="button" onClick={this.btnPLus}>+</button>
          <button type="button" onClick={this.btnMinus}>-</button>
          <input defaultValue={this.state.count1} onInput={this.inpText1} />
          <p onMouseMove={this.movMous1}>3</p>
        </div>
      </div >
    );
  }
}
export default Main;
