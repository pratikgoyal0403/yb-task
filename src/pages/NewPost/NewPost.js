import { useState } from "react";
import classes from "./NewPost.module.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import TextArea from "../../components/TextArea/TextArea";
import { useDispatch } from "react-redux";
import { addNewPost } from "../../store/actions/actions";

export default function NewPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();
  const submitHandler = () => {
    if (title.trim() === "" || body.trim() === "") {
      return alert("fields cannot be empty");
    }
    dispatch(
      addNewPost({ id: Math.floor(Math.random() * 5000 + 20), title, body })
    );
    setTitle('')
    setBody('')
  };
  return (
    <div className={classes.pageContainer}>
      <h1>Add New Post</h1>
      <div className={classes.inputForm}>
        <Input
          placeholder="title"
          value={title}
          change={(e) => setTitle(e.target.value)}
        />
        <TextArea
          placeholder="body"
          value={body}
          change={(e) => setBody(e.target.value)}
        />
        <Button title="submit" click={submitHandler}/>
      </div>
    </div>
  );
}
