import React from 'react';
import ReactDOM from 'react-dom';
import ReactTable from 'react-table';
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

const EMPLOYEE_API_BASE_URL = "https://demo-react-axios.herokuapp.com/student";
axios.get(EMPLOYEE_API_BASE_URL).then((res) => {
       const el =res.data;
       for (let index = 0; index < 3; index++) {
        const columns = [{  
          Header: 'Name',  
          accessor: 'name'  
          },{  
          Header: 'Email',  
          accessor: 'email'  
          }]  ;
         
     
       ReactDOM.render(<ReactTable  
        data={el}  
        columns={columns}  
        defaultPageSize = {3}  
        pageSizeOptions = {[2,4, 6]}  
    /> ,document.getElementById("gg"));
      
      }
        });

        
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
