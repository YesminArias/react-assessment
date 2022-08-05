import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { getQuestions, postComment } from "../../Redux/action";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./CardVideo.css";

export default function Card({ key, video, questionId, comments }) {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const questions = useSelector((e) => e.questions);
  const aplicationsList = useSelector((e) => e.Applications);

  function handleSubmit(e, id) {
    aplicationsList["videos"] = aplicationsList.videos.map((video) => {
      if (video.questionId === id) {
        video = {
          ...video,
          comments: input,
        };
      }
      return video;
    });
    dispatch(postComment(aplicationsList));
  }

  function handelChange(e) {
    console.log("handel");
    setInput(e.target.value);
  }

  useEffect(() => {
    dispatch(getQuestions(questionId));
  }, [dispatch, questionId]);

  return (
    <div className="containerCard">
      <div className="video">
        <ReactPlayer
          key={questionId}
          url={video}
          controls
          width="100%"
          height="100%"
        />
      </div>
      <div className="text">
        <div>{questions.question}</div>
        <div>
          {comments === "" ? (
            <div>
              <form className="text">
                <TextField
                  id="filled-multiline-flexible"
                  label="Insert your comment"
                  multiline
                  maxRows={4}
                  value={input}
                  onChange={handelChange}
                  variant="filled"
                  color="secondary"
                />
                <div className="btn">
                  <Button
                    type="submit"
                    color="secondary"
                    onClick={(e) => handleSubmit(e, questionId)}
                  >
                    Send
                  </Button>
                </div>
              </form>
            </div>
          ) : (
            <div className="comment"> {comments}</div>
          )}
        </div>
      </div>
    </div>
  );
}
