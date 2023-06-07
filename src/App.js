import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  console.log('data::: ', data);

  useEffect(() => {
    const Hello = async () => {
      fetch('https://dummyjson.com/todos')
        .then(res => res.json())
        .then((todo) => {
          setData(todo.todos);
        })
        .catch(error =>
          console.log('error::: ', error)
        )
    }
    Hello();
  }, []);


  return (
    <>
      <table className="results">
        <thead>
          <tr>
            <th>Id</th>
            <th>UserId</th>
            <th>todo</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            data.slice(0, 10).map((ele, index) => (
              <tr key={ index }>
                <td>{ ele.id }</td>
                <td>{ ele.userId }</td>
                <td>{ ele.todo }</td>
                <td>{
                  ele.completed ?
                    <span className="tag green">Completed</span>
                    :
                    <span className="tag red">Not Completed</span>
                }</td>
              </tr>
            ))
          }
        </tbody>
      </table>

    </>
  );
}

export default App;
