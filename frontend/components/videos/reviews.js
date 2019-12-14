import React from 'react';

export default class Reviews extends React.Component {
    constructor(props) {
        super(props);
        // debugger;
        this.state = {
            reviews: this.props.reviews || [],
            review: "",
            currentUserId: this.props.currentUserId,
            video: this.props.video,
            edit: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // componentDidMount() {

    //     this.props.update(this.state.video);

    // }

    handleSubmit(e) {
        e.preventDefault();
        
    }
    

    render() {
       
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="review"
                    // value="Write a review here"
                    // onChange={this.handleInput('review')}
                    className="review"
                />
                <input className="review-submit" type="submit" value="comment" />
           </form>

        );
        
    }

}