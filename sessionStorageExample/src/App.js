import './App.css';

function App() {

const setData = ()=>{
  // localStorage.setItem("name","Suyog");
  let obj = {'name':'suyog','email':'suyog@gmail.com'};
  //localStorage.setItem('mydata',JSON.stringify(obj));

  sessionStorage.setItem('mySessionStorageData',JSON.stringify(obj));
}


const getData = ()=>{
  // let data = localStorage.getItem("name")
  // console.log(data)

 // let obj = localStorage.getItem('mydata');

 let obj = sessionStorage.getItem('mySessionStorageData');
  obj = JSON.parse(obj);
  console.log(obj);
}

  return (
    <div className='App'>
        <button onClick={()=>{setData()}}>SetData</button>
        <button onClick={()=>{getData()}}>GetData</button>
    </div>
  );
}

export default App;
