import { Button, Card, IconButton, List, ListItemSuffix, Textarea, Typography, ListItem, } from "@material-tailwind/react";
import { useState } from "react";


function TrashIcon() {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path
        fillRule="evenodd"
        d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  // @ts-ignore
  const handleForm = (e) => {
    e.preventDefault();
    // @ts-ignore
    setTodoList([...todoList, {todoName: todo }]);
    setTodo("");

  };
// @ts-ignore
  const handleDelete = (index) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  console.log(todoList);

  return (


    <div className="ml-64 mt-64">


      <div className="grid grid-cols-2">
        <Typography variant="h2">Todo List</Typography>
        
      </div>

      <form onSubmit={handleForm}>
        <div className="pr-64 pl-2 pt-4 mr-24">
          <Textarea label="List a plan" value={todo} onChange={(e) => setTodo(e.target.value)} />

          <div className="py-4">
            <Button variant="gradient" type="submit">
              Submit
            </Button>
          </div>
        </div>
      </form>


      <Card className="pr-4 pl-2 pt-4 w-3/4">
        <Typography variant="h6"> Lists: </Typography>
        <List color="gray">
          {todoList.map((todoName, index) => (
            <ListItem key={index} ripple={false} className="py-1 pr-1 pl-4">
              {todoName.todoName}
              <ListItemSuffix>
                <IconButton variant="text" color="red" onClick={() => handleDelete(index)}>
                  <TrashIcon />
                </IconButton>
              </ListItemSuffix>
            </ListItem>
          ))}
        </List>
      </Card>
    </div>

  )
}

export default App;