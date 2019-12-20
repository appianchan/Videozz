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
        const empty = [];
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
            <form onSubmit={this.handleSubmit}>
              {/* <input type="review"
                    // value="Write a review here"
                    // onChange={this.handleInput('review')}
                    className="review"
                /> */}
              <textarea
                value={this.state.review}
                onChange={this.update("review")}
              />
              <input className="review-submit" type="submit" value="comment" />
            </form>
            <div>{this.state.reviews}</div>
          </div>
        );
        
    }

}