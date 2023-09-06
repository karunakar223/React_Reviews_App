// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {reviewsIndex: 0}

  getProfileDetails = reviewsList => {
    const {reviewsIndex} = this.state
    const {imgUrl, companyName, description, username} = reviewsList[
      reviewsIndex
    ]

    return (
      <div className="profile-details-container">
        <img src={imgUrl} alt={username} className="img-url" />
        <p className="profile-name">{username}</p>
        <p className="company-name">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onDecrementIndex = () => {
    const {reviewsIndex} = this.state

    if (reviewsIndex > 0) {
      this.setState(prevState => ({reviewsIndex: prevState.reviewsIndex - 1}))
    }
  }

  onIncrementIndex = () => {
    const {reviewsList} = this.props
    const {reviewsIndex} = this.state

    if (reviewsIndex < reviewsList.length - 1) {
      this.setState(prevState => ({reviewsIndex: prevState.reviewsIndex + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="main-heading">Reviews</h1>
          <div className="profile-container">
            <button
              type="button"
              onClick={this.onDecrementIndex}
              className="left-btn"
              data-testid="leftArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                className="left-arrow"
              />
            </button>
            {this.getProfileDetails(reviewsList)}
            <button
              type="button"
              onClick={this.onIncrementIndex}
              className="right-btn"
              data-testid="rightArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
                className="right-arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
