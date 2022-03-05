import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import axios from 'axios';
class HelloMessage extends React.Component {
        render() {
          return (
            <div>
              Hello {this.props.name}
            </div>
          );
        }
      }
      
      ReactDOM.render(
        <HelloMessage name="Taylor" />,
        document.getElementById('gg')
      );
class Stud extends React.Component{
        render()
        {
                return(
                        <div class="col">
     <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <th scope="row">1</th>
      <td>{this.props.id}</td>
      <td>{this.props.name}</td>
      <td>{this.props.email}</td>
    </tr>
    <tr>
    <th scope="row">2</th>
    <td>{this.props.id}</td>
      <td>{this.props.name}</td>
      <td>{this.props.email}</td>
    </tr>
  </tbody>
</table>
    </div>
                );
        }
}
ReactDOM.render(<Stud id="1" name="Chris Rohan" email="chrisrohan@gmail.com" />,document.getElementById("gg"));
const EMPLOYEE_API_BASE_URL = "https://demo-react-axios.herokuapp.com/student";
axios.get(EMPLOYEE_API_BASE_URL).then((res) => {
       const el =res.data;
       console.log(el.length);
       console.log(el[0].id);
       console.log(el[0].name);
       console.log(el[0].email);
       ReactDOM.render(<Stud id={el[2].id} name={el[2].name} email={el[2].email} />,document.getElementById("gg"));
       ReactDOM.render(
        el[0].id,
   document.getElementById('i')
 );
 ReactDOM.render(
        el[2].name,
   document.getElementById('n')
 );
       ReactDOM.render(
        el[1].email,
   document.getElementById('e')
 );
        });

        
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
