import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    commentsList: [],
    name: '',
    comment: '',
    count: 0,
  }

  removeComment = (id, commentDetails) => {
    console.log(commentDetails)
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(
        eachComment => eachComment.id !== id,
      ),
      count: prevState.count - 1,
    }))
    // const comments = commentsList.filter(eachComment => ea)
    console.log(commentDetails)
  }

  toggleIsLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLike: !eachComment.isLike}
        }
        return eachComment
      }),
    }))
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLike: false,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
      count: prevState.count + 1,
    }))
  }

  onChangeName = event => {
    console.log(event.target.value)
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    console.log(event.target.value)
    this.setState({comment: event.target.value})
  }

  render() {
    const {commentsList, name, comment, count} = this.state
    return (
      <div className="app-container">
        <div className="comments-container">
          <h1 className="app-heading">Comments</h1>
          <div className="comments-inputs">
            <form className="form" onSubmit={this.onAddComment}>
              <p className="form-description">
                Say something about 4.0 Technologies
              </p>
              <input
                type="text"
                className="name-input"
                value={name}
                onChange={this.onChangeName}
                placeholder="Your Name"
              />
              <textarea
                className="comment-input"
                value={comment}
                onChange={this.onChangeComment}
                placeholder="Your Comment"
                rows="6"
              />
              <button type="submit" className="add-button">
                Add Comment
              </button>
            </form>
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
          <hr className="line" />
          <p className="heading">
            <span className="comments-count">{count}</span>
            Comments
          </p>
          <ul className="comments-list">
            {commentsList.map(eachComment => (
              <CommentItem
                commentDetails={eachComment}
                key={eachComment.id}
                toggleIsLike={this.toggleIsLike}
                removeComment={this.removeComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
