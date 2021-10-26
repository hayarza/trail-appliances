import { Box } from "@mui/material";
import SuperSpecialInput from "./super-special-input.component";
import Question from "./question.component";
import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "../actions/questions.actions";

const Interviewer = (props) => {
  const baseStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const questions = useSelector((state) => state.appState.questions);
  const dispatch = useDispatch();

  const addQuestion = (question) => {
    dispatch(add(question));
  };

  const removeQuestion = (question) => {
    dispatch(remove(question));
  };

  return (
    <Box sx={{ ...baseStyles }}>
      <SuperSpecialInput onAdd={addQuestion} />
      <Box sx={{ ...baseStyles, padding: 4 }}>
        {questions.map((question) => (
          <Question question={question} removeQuestion={removeQuestion} />
        ))}
      </Box>
    </Box>
  );
};

export default Interviewer;
