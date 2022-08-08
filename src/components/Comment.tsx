import '../css/components/Comment.css';
export interface CommentModel {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}
export default function Comment(props: { comment: CommentModel }) {
    return (
        <article className='comment'>
            <div className="comment-header">
                <div className="comment-content__name">
                    Name: {props.comment.name}
                </div>
                <div className="comment-content__email">
                    Email: {props.comment.email}
                </div>
            </div>
            <div className="comment-content">
                <p>Comment: {props.comment.body}</p>
            </div>
        </article>
    )
}