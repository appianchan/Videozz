import React from 'react';
import { Link, withRouter } from "react-router-dom";

class Reviews extends React.Component {
    constructor(props) {
        super(props);
        debugger;

        this.state = {
            // reviews: this.props.reviews || [],
            review: "Add a public comment...",
            reviewcounter: false,
            // user: this.props.user,
            // currentUserId: this.props.currentUserId,
            // video: this.props.video,
            edit: false,
            button: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        
        // this.showButton = this.showButton.bind(this);
    }
    componentDidMount(){
      this.props.requestAllReviews();
    }
    componentDidUpdate(){
      this.props.requestAllReviews();
    }
    
  update(field) {
    
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }
  showButton(){
    // document.getElementsByClassName("comment-submit").style.display="initial";
    var reviewprevious = this.state.review;
    if (this.props.user === undefined){
      this.props.history.push("/login")
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
        // debugger;
        // if(this.state.review !== ""){
        //   const empty = this.state.reviews;
        //   empty.unshift([this.state.user, this.state.review]);
        //   var newvideo = this.props.video;
        //   newvideo.reviews = empty;
        //   // newvideo.reviews = "this is hardd"
          
          // this.setState(state => ({
          //   reviews: empty,
          //   review: "Add a public comment...",
          //   reviewcounter: false,
          //   button: false
          // }));
        // }
        debugger;
        const formData = new FormData();
        formData.append('review[body]', this.state.review);
        formData.append('review[user_id]', this.props.user_id);
        formData.append('review[creator]', this.props.user.username);
        formData.append('review[video_id]', this.props.video_id);
        
        if(this.state.review !== ""){
          // debugger;
          return $.ajax({
            url: '/api/reviews',
            method: 'POST',
            data: formData,
            contentType: false,
            processData: false
          }).then(() => this.setState(state => ({
            review: "Add a public comment...",
            reviewcounter: false,
            button: false
          })))
        }
    }

    hideButton(){
      this.setState((state, props) => ({
        reviewcounter: false,
        button: false,
        review: "Add a public comment..."
      }))
    }
    // redirect(){
    //   if (this.props.user === undefined) {
    //     this.props.history.push("/login")
    //   }
    // }
    

    render() {
       
      const arr = [];
      if(this.props.reviews !== {}){
        for (var key in this.props.reviews) {
          if (this.props.reviews[key].video_id === this.props.video_id) {
            arr.push(this.props.reviews[key])
          }
        }
        debugger;

      }
      

        return (
          <div>
            <form className="comment-form" onSubmit={this.handleSubmit}>
              {/* <input type="review"
                    // value="Write a review here"
                    // onChange={this.handleInput('review')}
                    className="review"
                /> */}
              <div className="textarea-container">
                <div className="comment-length">{arr.length} Comments</div>
                <div className="comment-section">
                  <i class="fas fa-user-circle"></i>
                  <div className="text-input-area">
                    <textarea
                      rows="1"
                      cols="112"
                      onClick={this.showButton.bind(this)}
                      className="review-textbox"
                      value={this.state.review}
                      onChange={this.update("review")}
                      // onClick={this.redirect.bind(this)}
                    />
                    <div className="comment-button-group">
                      <button type="button" onClick={this.hideButton.bind(this)} style={{ display: this.state.button === false ? "none" : "initial" }} className="cancel-submit">CANCEL</button>
                      <input 
                      style={{ display: this.state.button === false ? "none" : "initial"}}
                      // style={{ color: "grey" }}
                      className={this.state.review === "" ? "comment-submit-grey" : "comment-submit-blue"}
                      type="submit" 
                      value="COMMENT" />
                    </div>
                  </div>
                </div>
              </div>

                
              
              
              
              
              {/* styles={this.state.button === false ? "display: hidden;" : "display: initial;"} */}
            </form>
            {/* <div>{this.state.reviews}</div> */}
            <ul className="review-index">
              {arr.reverse().map((review, i) => (
                // <li key={`review-user`}>{review[0]}{review[1]}</li>
                <li className="review-content">
                  <i class="fas fa-user-circle"></i>
                  <div className="review-info">
                    <div className="review-user">{review.creator}</div>
                    <div className="review-body">{review.body}</div>
                  </div>
                  </li>
                // <li className="review-body">{review[1]}</li>
              ))}
            </ul>
          </div>
        );
        
    }

}

export default withRouter(Reviews);