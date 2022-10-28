import axios from "axios";
import { useNavigate } from "react-router-dom";
import User from "../../interfaces/userInterface";
import { isLoadingActionCreator } from "../../store/features/slices/loading/loadingSlice";
import { loginActionCreator } from "../../store/features/slices/users/usersSlice";
import { useAppDispatch } from "../../store/hooks";
import { errorModal } from "../../utils/modals";

const useUsers = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const checkLogin = async (userInfo: User) => {
    const userURL = "https://jsonplaceholder.typicode.com/users/";

    try {
      dispatch(isLoadingActionCreator());
      const { data } = await axios.get(
        `${userURL}?username=${userInfo.userName}`
      );

      if (!data.length) {
        dispatch(isLoadingActionCreator());
        errorModal("Oops, something went wrong :(");

        return;
      }

      dispatch(loginActionCreator(data[0]));
      dispatch(isLoadingActionCreator());
      localStorage.setItem("username", userInfo.userName);
      navigate("/posts");
    } catch (error) {
      errorModal("Oops, something went wrong :(");
    }
  };

  return {
    checkLogin,
  };
};

export default useUsers;
