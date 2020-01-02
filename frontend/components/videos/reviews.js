import React from 'react';
import { Link, withRouter } from "react-router-dom";

class Reviews extends React.Component {
    constructor(props) {
        super(props);
        // debugger;
        this.state = {
            reviews: this.props.reviews || [],
            review: "Add a public comment...",
            reviewcounter: false,
            user: this.props.user,
            currentUserId: this.props.currentUserId,
            video: this.props.video,
            edit: false,
            button: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.showButton = this.showButton.bind(this);
    }
    
  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }
  showButton(){
    // document.getElementsByClassName("comment-submit").style.display="initial";
    var reviewprevious = this.state.review;
    if (this.props.user === ""){
      this.props.history.push("/signup")
    }else if (this.state.reviewcounter === false){
      this.setState((state, props) => ({
        reviewcounter: true,
        review: "",
        button: true
      }))
    } else {
      this.setState((state, props) => ({
        review: reviewprevious,
        button: true
      }))
    }
    
  }

    handleSubmit(e) {
        e.preventDefault();
        debugger;
        if(this.state.review !== ""){
          const empty = this.state.reviews;
          empty.unshift([this.state.user, this.state.review]);
          var newvideo = this.props.video;
          newvideo.reviews = empty;
          this.props.update(newvideo).then(
          this.setState(state => ({
            reviews: empty,
            review: "Add a public comment...",
            reviewcounter: false,
            button: false
          })));
        }
        
    }

    hideButton(){
      this.setState((state, props) => ({
        reviewcounter: false,
        button: false,
        review: "Add a public comment..."
      }))
    }
    

    render() {
      //  debugger;
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
                  rows="1"
                  cols="160"
                  onClick={this.showButton.bind(this)}
                  className="review-textbox"
                  value={this.state.review}
                  onChange={this.update("review")}
                />
              </div>

                <div className="comment-button-group">
                  <button type="button" onClick={this.hideButton.bind(this)} style={{ display: this.state.button === false ? "none" : "initial" }} className="cancel-submit">CANCEL</button>
                  <input 
                  style={{ display: this.state.button === false ? "none" : "initial", backgroundColor: this.state.review === "" ? "grey" : "rgba(6, 95, 212)"}}
                  // style={{ color: "grey" }}
                  className="comment-submit" 
                  type="submit" 
                  value="COMMENT" />
                </div>
              
              
              
              
              {/* styles={this.state.button === false ? "display: hidden;" : "display: initial;"} */}
            </form>
            {/* <div>{this.state.reviews}</div> */}
            <ul className="review-index">
              {this.state.reviews.map((review, i) => (
                // <li key={`review-user`}>{review[0]}{review[1]}</li>
                <li className="review-content">
                  <div className="review-user">{review[0]}</div>
                  <div className="review-body">{review[1]}</div>
                  </li>
                // <li className="review-body">{review[1]}</li>
              ))}
            </ul>
          </div>
        );
        
    }

}

export default withRouter(Reviews);