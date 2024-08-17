// import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App.js';

// import { FaBacon } from "react-icons/fa";
// import Header from './components/Header.js';
// import './components/header.css';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// const websiteStyle={
//   color:"green",
//   backgroundColor:"lightblue",
// textAlign:"center",
// }
// function  Welcome(){
//   // <div class="header">

//   // </div>
//   return(
 
 
//   <div class="div" >
  
//     <Header/>
//     <br></br>
//     <marquee>Welcome**</marquee>
//     <h1>Welcome to My Website</h1>
//     <p>This is my first React App</p>
//     <p>This is a demo text</p>

//   <table>
//     <tr>
//       <th>Name</th>
//       <th>Age</th>
//     </tr>
//     <tr>
//       <td>John Doe</td>
//       <td>25</td>
//     </tr>
//     <tr>
//       <td>Jane Doe</td>
//       <td>30</td>
//     </tr>
//     <tr>
//       <td>Alice Johnson</td>
//       <td>28</td>
//     </tr>
//   </table>
//   </div>
//    );
// }

// ReactDOM.render(<div><Welcome/><App/></div>,document.getElementById('root'));

//REact state and use state
// class Reactstate extends React.Component{
//   //step 01
//   constructor(){
//     super();
//       this.state={Mywebsite:"Welcome",Mycontent:"Home"}
//     }
//     ChangeContent=()=>{
//       this.setState({Mycontent:"Welcome",Mywebsite:"Home"});
//     }
//     //step 02
//  render(){
//     return<div><h1>{this.state.Mywebsite}{this.state.Mycontent}!</h1>
//     <button type="button" onClick={this.ChangeContent}> Change the Content</button> </div>
    
//   }
//   }
// //step 03
// ReactDOM.render(<Reactstate/>,document.getElementById('root'));
//PROPS

// class Reactprops extends React.Component{
//   render(){
//     return <h1>welcome {this.props.Mywebsite}</h1>
//   }
// }
// ReactDOM.render(<Reactprops Mywebsite="Home"/>,document.getElementById('root'));

//React list
// const myWebsite=["HOme","PrOduct","COntactUs"];
// const websitemenu=myWebsite.map((myWebsite) =>{
//     return <h1>{myWebsite}</h1>
// });
// ReactDOM.render(<ul>{websitemenu}</ul>,document.getElementById('root'));

//Reactevent handling
// class ReactEventHandling extends React.Component{
//     constructor(){
//         super();
//         this.state={content:"I am Anand"}
//     }
//     changeContent=()=>{
//         this.setState({content:"Film director"});
//     }
  
//     render(){
//         return <div>
//             <h1>{this.state.content}</h1>
//             <button onClick={this.changeContent}>Click Here</button>
//         </div>
//     }
// }
// ReactDOM.render(<ReactEventHandling/>,document.getElementById('root'));

//react state


// class ReactState extends React.Component{
//     constructor(){
//         super();
//         this.state={content:"hello"};
//     }
//     change=()=>{
//         this.setState({content:"Everyone"});
//     }
//     render(){
//         return <div><h1>{this.state.content}</h1>
//         <button onClick={this.change}>Touch Me!</button>
//         <select class="form-select" aria-label="Default select example">
//   <option selected>Open this select menu</option>
//   <option value="1">One</option>
//   <option value="2">Two</option>
//   <option value="3">Three</option>
// </select>
//        </div>
//     }
    
// }
// ReactDOM.render(<ReactState/>,document.getElementById('root'));
//hooks usestste

// import React, { useState } from 'react';
// // import ReactDOM from 'react-dom';

// function Welcome() {
//     const [count, setCount] = useState(0);

//     return (
//         <div>
//             <p>Clicked {count} times</p>
//             <button onClick={() => setCount(count + 1)}class="btn">count up</button>
//             <button onClick={()=> setCount(count-1)} class="btn">count down</button>
//         </div>
//     );
// }

// ReactDOM.render(<Welcome />, document.getElementById('root'));

//useEffects
// import React,{useState,useEffect} from 'react';
// //step 01
// function Examplerender(){
//     const[count,setCount]=useState(0);
// //step 03
// useEffect(() =>{
//     setTimeout(() =>{
//         setCount(count =>count+1)},1000)
//     },[]//here we give empty array the count will increase  only one time
//    );
// //step 02
// return(
//     <h1>website {count} time count</h1>
// )
// }
// ReactDOM.render(<Examplerender />, document.getElementById('root'));



// import React,{useState,useEffect} from 'react';
// function Examplerender(){
// const[count,setCount]=useState(0);
//  useEffect(()=>{
//     if(count<100){
//  setTimeout(()=>{
//         setCount(count=>count+1)},100)
      
//     }
//  });


// return(
//     <h1>website {
//     count}</h1>
// )
// }
// ReactDOM.render(<Examplerender/>,document.getElementById('root'));

// import React, { useState, useEffect } from 'react';


// function Examplerender() {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         if (count < 10) {
//             const timer = setTimeout(() => {
//                 setCount(count => count + 1);
//             }, 500);

//             return () => clearTimeout(timer); // Cleanup the timer on component unmount or before the next effect
//         }
//     }, [count]);

//     return (
//         <h1>website {count}</h1>
//     );
// }

// ReactDOM.render(<Examplerender />, document.getElementById('root'));

//by using API fetch data
import React,{ useState, useEffect } from 'react';
function Userdemo(){
    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(true);

useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data =>{
      setUsers(data);
      setLoading(false);
      })
    .catch (error =>{
        console.error("if it is not loading will be error message");

        setLoading(false);
    });
},[]);
    if(loading){
        return <p>Loading.....</p>;
    }

    return(
        <div>
        <h1>List out the Users in API</h1>
        <ol>
            {users.map(user => (
                <li key={user.id}>{user.name}--{user.phone}</li>
            ))}

        </ol>
      
        </div>
    );
}
ReactDOM.render(<Userdemo />,document.getElementById("root")) ;