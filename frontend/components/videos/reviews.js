import React from 'react';

export default class Reviews extends React.Component {
    constructor(props) {
        super(props);
        // debugger;
        this.state = {
            reviews: this.props.reviews || [],
            review: "Add a public comment...",
            username: this.props.username,
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
    this.setState((state, props) => ({
      review: "",
      button: true
    }))
  }

    handleSubmit(e) {
        e.preventDefault();
        // debugger;
        if(this.state.review !== ""){
          const empty = this.state.reviews;
          empty.push(this.state.review);
          this.setState(state => ({
            reviews: empty,
            review: "Add a public comment...",
            button: false
          }));
        }
        
    }

    hideButton(){
      this.setState((state, props) => ({
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
                  <input style={{ display: this.state.button === false ? "none" : "initial" }} className="comment-submit" type="submit" value="COMMENT" />
                </div>
              
              
              
              
              {/* styles={this.state.button === false ? "display: hidden;" : "display: initial;"} */}
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