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

       const numbers = el;
       const listItems = numbers.map((number) =>
  
    <tr>
      <th>#</th>
      <td >{number.id}</td>
      <td >{number.name}</td>
      <td >{number.email}</td>
    </tr>
   
  
);
     
       ReactDOM.render(<table class="table">
       <thead class="table-dark">
       <tr>
      <th scope="col">#</th>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
    </tr>
       </thead>
       <tbody>
         {listItems}
       </tbody>
     </table>,document.getElementById("gg"));
      
        });
       
        
        const Form = () => {
          // a local state to store the currently selected file.
          const [selectedFile, setSelectedFile] = React.useState(null);
        
          const handleSubmit = (event) => {
            event.preventDefault()
            const formData = new FormData();
            formData.append("selectedFile", selectedFile);
            try {
               axios({
                method: "post",
                url: "https://demo-react-axios.herokuapp.com/file",
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
              });
            } catch(error) {
              console.log(error)
            }
          }
        
          const handleFileSelect = (event) => {
            setSelectedFile(event.target.files[0])
          }
        
          return (
            <form onSubmit={handleSubmit}>
              <input type="file" onChange={handleFileSelect}/>
              <input type="submit" value="Upload File" />
            </form>
          )
        };

  ReactDOM.render(<Form/>,document.getElementById("tt"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
