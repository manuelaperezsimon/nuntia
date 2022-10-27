import { useNavigate, useParams } from "react-router-dom";
import Form from "../../components/Form/Form";
import { Posts } from "../../interfaces/postsInterface";
import { useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";
import { errorModal } from "../../utils/modals";

const FormPage = (): JSX.Element => {
  const { id } = useParams() as { id: string };
  const navigate = useNavigate();
  const postsList: Posts | [] = useAppSelector(
    (state: RootState) => state.posts
  );

  if (!postsList.length) {
    return <></>;
  }

  const post = postsList.find((post) => post.id === Number(id));

  if (!post) {
    errorModal("Oops, something went wrong :(");
    navigate("/posts");
    return <></>;
  }

  return <Form post={post} />;
};

export default FormPage;
