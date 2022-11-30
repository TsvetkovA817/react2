import React from 'react';
import './main.css';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count1: 0,
      text1: 'Lorem autem distinctio adipisc1i',
      text2: '',
      text3: 'Lorem autem distinctio adipisc3i',
      text4: '',
      age: 0
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

  inpTextForm = (event) => {
    //console.log(event.target.value);
    console.log(event.target.name);
    //this.setState({ text2: event.target.value });
    this.setState({ [event.target.name]: event.target.value });
  }

  btnSubmit = (event) => {
    event.preventDefault();

  }

  //пропс передаем в стейт 
  static getDerivedStateFromProps(props, state) {
    return ({ text3: props.txtMainProps })
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ text4: 'компонент смонтирован' });
    }, 3000);
  }


  render() {
    let ul = this.props.ul1;

    let mText2 = '';
    if (this.state.text2) {
      mText2 = <p>Введенный текст: {this.state.text2} age: {this.state.age}</p>
    }

    let obj1 = { id: 'inp5', name: 'inp5name', value: 12.00 };
    let arr1 = ['111', '222', '333'];
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
          <form onSubmit={this.btnSubmit}>
            <input onChange={this.inpTextForm} name="text2" />
            <input onChange={this.inpTextForm} type="number" name="age" />
            <input type="text" name="inputCmt" />
            <input type="submit" />
            {mText2}
          </form>

          <br />

          <p>{this.state.text3}</p>
          <p>{this.state.text4}</p>

          <input {...obj1}></input>
          <ul>
            {arr1.map(el => {
              return (<li key={el}>{el}</li>)
            })}
          </ul>
        </div>
      </div >
    );
  }
}
export default Main;
