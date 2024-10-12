import { useParams } from 'react-router-dom';
import { useFetchTaskCommentsQuery } from '../../../redux/slices/tasksSliceApi';

import Comment from '../comments/Comment';

const CommentsList = () => {
  const { taskId } = useParams();
  const { data, isLoading } = useFetchTaskCommentsQuery(taskId);

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
            content={item.content}
            date={item.created_at}
            attachments={item.attachments}
          />
        ))
      )}
    </div>
  );
};

export default CommentsList;
