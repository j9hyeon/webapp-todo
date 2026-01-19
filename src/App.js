import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      id: Date.now(),
      text: 'abcd',
      complete: false, 
    },
    {
      id: Date.now() + 1,
      text: 'efgh',
      complete: false,
    },
    {
      id: Date.now() + 2,
      text: 'ijkl',
      complete: false,
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => { setInputValue(e.target.value); };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;
    const newTodo = {
      id: Date.now(),
      text: inputValue,
      complete: false,
    };
    
    setTodos([...todos, newTodo]); // 기존 할 일 목록 뒤에 새 목록 추가
    setInputValue('');

    console.log(todos);
  };

  const deleteItem = id => {
    const filtered = todos.filter(todo => todo.id !== id);
    setTodos(filtered);
  }

  const toggleTodo = id => {
    const updated = todos.map(
      todo => todo.id === id ? {...todo, complete: !todo.complete } : todo  
    )
    setTodos(updated);
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <div className="inputArea">
        <input value={inputValue} onChange={handleChange} />
        <button onClick={handleSubmit}>확인</button>
      </div>  
      <ul>
        {
          todos.map(
            todo => 
            <li key={todo.id}>
              <input type='checkbox' checked={todo.complete} onChange={() => toggleTodo(todo.id)} />
              <span style={{textDecoration: todo.complete ? 'line-through' : 'none'}}>{todo.text}</span>
              <button onClick= {() => deleteItem(todo.id)}>삭제</button>
            </li>
          )
        }
      </ul>
    </div>
  );
}

export default App;
