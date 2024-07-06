import {
  Paper,
  Typography,
  Checkbox,
  Button,
  Stack,
  TextField,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useState } from "react";

type PropsType = {
  todo: TodoItemType;
  completeHandler: (id: TodoItemType["id"]) => void;
  deleteHandler: (id: TodoItemType["id"]) => void;
  editHandler: (
    id: TodoItemType["id"],
    newTitle: TodoItemType["title"]
  ) => void;
  // children: ReactNode;
  // count?:number
};

// const TodoItem = ({heading}:{heading:string})=>{}

const TodoItem = ({
  todo,
  completeHandler,
  deleteHandler,
  editHandler,
}: // children,
// count=5
PropsType) => {
  const [editActive, setEditActive] = useState<boolean>(false);
  const [textVal, setTextVal] = useState<string>(todo.title);

  return (
    <Paper
      sx={{
        padding: "1rem",
      }}
    >
      <Stack direction={"row"} alignItems={"center"}>
        {editActive ? (
          <TextField
            value={textVal}
            onChange={(e) => setTextVal(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && textVal !== "") {
                editHandler(todo.id, textVal);
                setEditActive(false);
              }
            }}
          />
        ) : (
          <Typography marginRight={"auto"}>{todo.title}</Typography>
        )}
        <Checkbox
          checked={todo.isCompleted}
          onChange={() => completeHandler(todo.id)}
        />
        <Button
          onClick={() => deleteHandler(todo.id)}
          sx={{ opacity: 0.5, color: "black" }}
        >
          <Delete />
        </Button>
        <Button
          sx={{
            fontWeight: "600",
          }}
          onClick={() => setEditActive((prev) => !prev)}
        >
          {editActive ? "Done" : "Edit"}
        </Button>
      </Stack>
      {/* {children} */}
    </Paper>
  );
};

export default TodoItem;
