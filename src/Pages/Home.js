import React, { useState, useEffect } from "react";

import {
  Button,
  Card,
  Badge,
  CardBody,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { RiDeleteBin5Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { deleteTodo } from "../Features/todos/todoSlice";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  return (
    <div>
      <div className="top-bar">
        <Card className="top-bar-card">
          <CardBody className="top-bar-cardBody">
            <Text fontSize={"4xl"}>Todo List</Text>
            <Button
            size='lg'
            colorScheme='teal'
              onClick={() => {
                navigate("/todo");
              }}
            >
            + Add Todo
            </Button>
          </CardBody>
        </Card>
      </div>
      <hr />
      <div className="todo-card-div">
        {todos.length > 0 ? (
          todos.map((todo) => (
            <Card className="todo-card">
              <CardBody className="todo-body">
                <div className="content-list">
                  <Text fontSize={"lg"}>{todo.title}</Text>
                  <Badge
                    textAlign={"center"}
                    mt={5}
                    colorScheme={
                      todo.status === "Completed"
                        ? "green"
                        : todo.status === "Pending"
                        ? "orange"
                        : "blue"
                    }
                  >
                    {todo.status}
                  </Badge>
                </div>
                <div className="actions-list">
                  <IconButton
                    colorScheme="red"
                    onClick={() => {
                      dispatch(deleteTodo(todo.id));
                    }}
                    aria-label="Delete Todo"
                    icon={<RiDeleteBin5Line />}
                  />
                  <IconButton
                    ml={3}
                    onClick={() => {
                      navigate(`/todo/${todo.id}`);
                    }}
                    colorScheme="blue"
                    aria-label="Search database"
                    icon={<CiEdit />}
                  />
                </div>
              </CardBody>
            </Card>
          ))
        ) : (
          <div className="no-todo-div">
            {" "}
            <Text fontSize={"2xl"}>No Todos</Text>{" "}
          </div>
        )}
      </div>
    </div>
  );
}
