import {FcLike} from 'react-icons/fc'
import {BsHeart} from 'react-icons/bs'
import {FaRegComment} from 'react-icons/fa'
import {BiShareAlt} from 'react-icons/bi'
// eslint-disable-next-line
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import {Component} from 'react'
import Comment from '../Comment'
import './index.css'

class PostItem extends Component {
  state = {isClicked: false}

  toggleLikeFont = async () => {
    // eslint-disable-next-line
    const {each, userLikedDetails} = this.props
    // eslint-disable-next-line
    const {postId} = each
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
    // const {isClicked} = this.state
    // // console.log(isClicked)

    // const toggledAns = isClicked ? 'un_like' : 'like'
    // userLikedDetails(toggledAns, postId)
    // const {isClicked} = this.state
    // const toggledAns = isClicked ? 'un_like' : 'like'
    // const jwtToken = Cookies.get('jwt_token')
    // const apiUrl = `https://apis.ccbp.in/insta-share/posts/${postId}/like`
    // const options = {
    //   method: 'POST',
    //   headers: {
    //     Authorization: `Bearer ${jwtToken}`,
    // //   },
    // }
    // const response = await fetch(apiUrl, options)
    // const data = await response.json()
    // console.log(data)
  }

  render() {
    const {isClicked} = this.state
    const {each} = this.props
    const {
      comments,
      createdAt,
      likesCount,
      postDetailsCaption,
      postDetailsImageUrl,
      // eslint-disable-next-line
      postId,
      profilePic,
      userId,
      userName,
    } = each

    return (
      <li className="post-container">
        <Link to={`/users/${userId}`} className="profile-name-container">
          <img
            className="profile-pic-icon"
            src={profilePic}
            alt="post author profile"
          />
          <p className="profile-name">{userName}</p>
        </Link>
        <img className="posted-image" src={postDetailsImageUrl} alt="post" />
        <div className="icon-container">
          <button
            className="like-button"
            onClick={this.toggleLikeFont}
            type="button"
          >
            {isClicked ? (
              <FcLike testid="unLikeIcon" />
            ) : (
              <BsHeart testid="likeIcon" />
            )}
          </button>
          <FaRegComment className="message-icon" />
          <BiShareAlt className="share-icon" />
        </div>
        <div>
          <p>{likesCount} likes</p>
        </div>
        <div>
          <p>{postDetailsCaption}</p>
        </div>
        <ul>
          {comments.map(each2 => (
            <Comment each={each2} key={each2.userId} />
          ))}
        </ul>
        <p>{createdAt}</p>
      </li>
    )
  }
}

export default PostItem
