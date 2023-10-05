// Write your code here
import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {commentDetails, toggleIsLike, removeComment} = props
  const {name, comment, isLike, id} = commentDetails

  const onClickLike = () => {
    toggleIsLike(id)
  }

  const onClickDelete = () => {
    // console.log('Remove Button Clicked')
    removeComment(id, commentDetails)
  }

  const likeTextClassName = isLike ? 'button active' : 'button'

  const likeImg = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const time = formatDistanceToNow(new Date())
  return (
    <li className="comment-item">
      <div className="comment-container">
        <div>
          <div className="username-time-container">
            <h1 className="username">{name}</h1>
            <p className="time">{time}</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="buttons-container">
        <div className="like-container">
          <img src={likeImg} alt="like" className="like-image" />
          <button
            type="button"
            onClick={onClickLike}
            className={likeTextClassName}
          >
            Like
          </button>
        </div>
        <button
          className="button"
          type="button"
          data-testid="delete"
          onClick={onClickDelete}
        >
          <img
            className="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr className="comment-line" />
    </li>
  )
}

export default CommentItem
