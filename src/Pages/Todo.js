import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  Button,
  Input,
  Card,
  CardBody,
  Select,
  Text,
} from "@chakra-ui/react";
import {useSelector, useDispatch } from "react-redux";
import { addTodo, editTodo } from "../Features/todos/todoSlice";
import { useNavigate } from "react-router-dom";
function Todo() {
  const todos = useSelector((state) => state.todos);
  const [todoId, setTodoId] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const id = window.location.pathname.split("todo/")[1];
    if (id) {
      setTodoId(id);
      const todo = todos.find((todo) => todo.id === parseInt(id));
      if(!todo) return navigate('/todo')
      settodo(todo);
    } 
    console.log(id);

  }
  , []);
  const [todo, settodo] = useState({
    id: Date.now(),
    title: "",
    status: "",
  });

  const handleSubmit = () => {
    if (todoId) {
      dispatch(editTodo(todo));
      navigate("/");
     ;
    } else {
    console.log(todo);
    dispatch(addTodo(todo));
    navigate("/")};
  };
  return (
    <div className="todo-form">
      <Card>
        <CardBody>
          <Text textAlign={'center'} fontSize="3xl">Create Todo</Text>
          <FormControl mt={5}  onSubmit={handleSubmit}>
            <FormLabel requiredIndicator>Title</FormLabel>
            <Input value={todo.title}
                onChange={(e) => {
                  settodo({ ...todo, title: e.target.value });
                }}
                id="disabledTextInput"
                placeholder=""/>

            <Select 
            mt={6   }
                value={todo.status}
                onChange={(e) => {
                  settodo({ ...todo, status: e.target.value });
                }}
                id="disabledSelect"
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </Select>

              <Button onClick={handleSubmit} mt={5}>Submit</Button>
          </FormControl>
        
        </CardBody>
      </Card>
    </div>
  );
}

export default Todo;
