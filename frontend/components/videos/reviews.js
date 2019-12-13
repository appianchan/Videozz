import React from 'react';

export default class Reviews extends React.Component {
    constructor(props) {
        super(props);
        // debugger;
        this.state = {
            reviews: this.props.reviews || [],
            currentUserId: this.props.currentUserId,
            video: this.props.video,
            edit: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    // componentDidMount() {

    //     this.props.update(this.state.video);

    // }


    handleSubmit(e) {
        <input type="review"
            value={this.state.password}
            onChange={this.handleInput('review')}
            className="review"
        />
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
                    value="Write a review here"
                    onChange={this.addReview()}
                    className="review"
                />
           </form>

        );
        
    }

}