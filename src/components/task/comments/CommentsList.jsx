import { useFetchTaskCommentsQuery } from '../../../redux/slices/tasksSliceApi';

import Comment from '../comments/Comment';

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
            commentId={item.id}
            userId={item.commentator.id}
            userName={item.commentator.username}
            date={item.created_at}>
            <p>{item.content}</p>
          </Comment>
        ))
      )}
    </div>
  );
};

export default CommentsList;
