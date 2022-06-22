import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createGoal } from '../features/goal/goalSlice'

function GoalForm() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const submitHanlder = (e) => {
    e.preventDefault();
    dispatch(createGoal({text}))
    setText('')
  };
  return (
    <section className="form">
      <form onSubmit={submitHanlder}>
        <div className="form-group">
          <label htmlFor="text">Goal</label>
          <input
            type="text"
            name="text"
            id="id"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Add Goal
          </button>
        </div>
      </form>
    </section>
  );
}

export default GoalForm;
