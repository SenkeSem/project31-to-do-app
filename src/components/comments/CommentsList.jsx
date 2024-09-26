import { useFetchTaskCommentsQuery } from '../../redux/slices/tasksSliceApi';
import Comment from '../shared/Comment';

const CommentsList = ({ taskId }) => {
  const { data, isLoading } = useFetchTaskCommentsQuery(taskId);

  console.log(data);

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        data.data.map((item) => (
          <Comment
            key={item.id}
            userId={item.commentator.id}
            userName={item.commentator.username}
            daysAgo={3}>
            <p>{item.content}</p>
          </Comment>
        ))
      )}
    </div>
  );
};

export default CommentsList;
