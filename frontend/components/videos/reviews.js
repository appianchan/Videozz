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


    handleClick(e) {
        
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
            <textarea cols="50" rows="5">
                Write your review here
            </textarea>
        )
        
    }

}