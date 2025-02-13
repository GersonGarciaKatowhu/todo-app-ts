import { useState } from 'react'
import './App.css'
import {Todos} from './components/Todos'
import { type TodoId, type Todo as TodoType } from './types.d'

const mockTodos = [
  {
    id: '1',
    title:'todo 1',
    completed: false
  },
  {
    id: '2',
    title:'todo 2',
    completed: false
  },
  {
    id: '3',
    title:'todo 3',
    completed: true
  },
]

const App: React.FC = () => {
  const [todos, setTodos] = useState(mockTodos)
  const handleRemove = ({id}: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }
  const handleCompleted = ({id, completed}: Pick<TodoType, 'id' | 'completed'>) => {
    const newTodos = todos.map(todo => {
      if (todo.id == id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }
  return (
    <div className="todoapp">
      <Todos todos={todos} onRemoveTodo={handleRemove} onToggleCompleteTodo={handleCompleted} />
    </div>
  )
}

export default App
