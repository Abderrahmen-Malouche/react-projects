import { useContext,createContext } from "react";
export const TodoContext=createContext(
{
    todos:[{
        id:1,
        todo:"Learn React",
        completed:false
    }],
    addtodoItem:()=>{},
    removetodoItem:()=>{},
    edittodoItem:()=>{},
    toggleComplete:()=>{},
}
);
export const TodoProvider=TodoContext.Provider;
export const useTodo=()=>{return useContext(TodoContext)};