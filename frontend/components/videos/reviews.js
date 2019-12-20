import React from 'react';

export default class Reviews extends React.Component {
    constructor(props) {
        super(props);
        // debugger;
        this.state = {
            reviews: this.props.reviews || [],
            review: "",
            username: this.props.username,
            currentUserId: this.props.currentUserId,
            video: this.props.video,
            edit: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

    handleSubmit(e) {
        e.preventDefault();
        // debugger;
        const empty = this.state.reviews;
        empty.push(this.state.review);
        this.setState(state => ({
          reviews: empty,
          review: ""
        }));
        debugger;
    }
    

    render() {
       
        return (
          <div>
            <form className="comment-form" onSubmit={this.handleSubmit}>
              {/* <input type="review"
                    // value="Write a review here"
                    // onChange={this.handleInput('review')}
                    className="review"
                /> */}
              <div className="textarea-container">
                <div className="comment-length">{this.state.reviews.length} Comments</div>
                <textarea
                  rows="6"
                  cols="160"
                  className="review-textbox"
                  value={this.state.review}
                  onChange={this.update("review")}
                />
              </div>

              <input className="comment-submit" type="submit" value="comment" />
            </form>
            {/* <div>{this.state.reviews}</div> */}
            <ul className="review-index">
              {this.state.reviews.map((review, i) => (
                <li key={`review-${i}`}>{review}</li>
              ))}
            </ul>
          </div>
        );
        
    }

}