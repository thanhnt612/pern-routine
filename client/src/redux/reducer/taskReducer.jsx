import { createSlice } from "@reduxjs/toolkit";
import { http } from "../../util/config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  task: [],
  taskDetail: {},
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    getTask: (state, action) => {
      state.task = action.payload;
    },
    getTaskDetail: (state, action) => {
      state.taskDetail = action.payload;
    },
    increaseLike: (state, action) => {
      const { id, vote } = action.payload;
      const item = state.task.find((taskLike) => taskLike.todo_id === id);
      item.vote += vote;
    },
  },
});

export const { increaseLike, getTask, getTaskDetail } = userReducer.actions;

export default userReducer.reducer;

export const createTaskApi = (plan) => {
  return async (dispatch) => {
    let result = await http.post("/task/", plan);
    if (result.status === 200) {
      toast.success("Create Success !!!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    dispatch(getTaskApi());
  };
};

export const getTaskApi = () => {
  return async (dispatch) => {
    let result = await http.get("/task");
    const action = getTask(result.data);
    dispatch(action);
  };
};

export const getTaskDetailApi = (id) => {
  return async (dispatch) => {
    let result = await http.get("/task/" + id);
    const action = getTaskDetail(result.data);
    dispatch(action);
  };
};
export const deleteTaskApi = (id) => {
  return async (dispatch) => {
    let result = await http.delete("/task/" + id);
    if (result.status === 200) {
      toast.error("Plan Deleted !!!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    dispatch(getTaskApi());
  };
};
export const updateTaskApi = (id, title, description) => {
  return async (dispatch) => {
    let result = await http.put("/task/" + id, {
      title: title,
      description: description,
    });
    if (result.status === 200) {
      toast.success("Plan Updated !!!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    dispatch(getTaskApi());
  };
};
