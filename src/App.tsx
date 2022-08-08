import { useEffect, useState } from 'react';
import './App.css';
import Comment, { CommentModel } from './components/Comment';
import commentService from './services/Comment.service';

function App() {
  const [comments, setComments] = useState<CommentModel[]>([]);
  useEffect(() => {
    commentService.get('/comments')
      .then((valor) => {
        setComments(valor.data);
      });
  }, [])
  return (
    <div className="App">
      {comments.map((comment, index) => (
        <Comment comment={comment} key={index} />
      ))}

    </div>
  );
}

export default App;
