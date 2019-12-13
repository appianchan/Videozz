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
    }
    // componentDidMount() {

    //     this.props.update(this.state.video);

    // }
    handleInput(type) {
        return e => {
            this.setState({ [type]: e.target.value });
        };
    }


    handleSubmit(e) {
        
    }
    addReview(){

    }

    render() {
        // if (this.state.edit === false){
            
        // } else {
        //     this.setState(state => ({
        //         edit: true
        //     }));
        //     return (
        //         <div>
        //             <div className="show-likes" onClick={this.handleClick}>Likes: {this.state.likes.length}</div>
        //         </div>
        //     )
        // }
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="review"
                    // value="Write a review here"
                    onChange={this.handleInput('review')}
                    className="review"
                />
                <input className="review-submit" type="submit" value="submit" />
           </form>

        );
        
    }

}