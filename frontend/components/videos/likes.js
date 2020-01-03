import React from 'react';

export default class Likes extends React.Component {
    constructor(props) {
        super(props);
        // debugger;
        this.state = {
            likes: this.props.likes || [],
            dislikes: this.props.dislikes || [],
            currentUserId: this.props.currentUserId,
            video: this.props.video
        };
        this.handleLikes = this.handleLikes.bind(this);
        this.handleDislikes = this.handleDislikes.bind(this);
    }
    // componentDidMount() {
        
    //     this.props.update(this.state.video);

    // }
    

    handleLikes(e) {
        e.preventDefault();
        // first if case: if likes array includes the userID
        if (this.state.likes.includes(this.state.currentUserId)) {
            const index_item = this.state.likes.indexOf(this.state.currentUserId);
            const temp = this.state.likes
            // debugger;
            if (this.state.likes.length === 1) {
                this.setState(state => ({
                    likes: []
                }))
                this.props.update(this.state.video);
            } else {
                const temp2 = temp.slice(0, index_item) + temp.slice(index_item + 1, -1);
                this.setState(state => ({
                    likes: temp2
                }));
                this.props.update(this.state.video);
            }
        // second if case: if dislikes includes the userID
        } else if (this.state.dislikes.includes(this.state.currentUserId)){
            const index_item = this.state.dislikes.indexOf(this.state.currentUserId);
            const temp = this.state.dislikes
            
            if (this.state.dislikes.length === 1) {
                this.state.likes.push(this.state.currentUserId);
                this.setState(state => ({
                    dislikes: [],
                    likes: this.state.likes
                }))
                this.props.update(this.state.video);
            } else {
                const temp2 = temp.slice(0, index_item) + temp.slice(index_item + 1, -1);
                this.state.likes.push(this.state.currentUserId);
                this.setState(state => ({
                    dislikes: temp2,
                    likes: this.state.likes
                }));
                this.props.update(this.state.video);
            }

        //last case: if none includes the userID
        } else {
            

            this.state.likes.push(this.state.currentUserId);
            
           
            this.setState((state, props) => ({
                likes: this.state.likes
            }))
            this.props.update(this.state.video);
            // this.state.video.likes.push(this.state.currentUserId);
            // debugger;
            // this.props.update(this.state.video).then(this.setState((state, props) => ({
            //     likes: this.state.likes
            // })))
            
        }
    }

    handleDislikes(e) {
        e.preventDefault();
        debugger;
        // first if case: if dislikes array includes the userID
        if (this.state.dislikes.includes(this.state.currentUserId)) {
            const index_item = this.state.dislikes.indexOf(this.state.currentUserId);
            const temp = this.state.dislikes

            if (this.state.dislikes.length === 1) {
                this.setState(state => ({
                    dislikes: []
                }))
                this.props.update(this.state.video);
            } else {
                const temp2 = temp.slice(0, index_item) + temp.slice(index_item + 1, -1);
                this.setState(state => ({
                    dislikes: temp2
                }));
                this.props.update(this.state.video);
            }

        } else if (this.state.likes.includes(this.state.currentUserId)) {
            const index_item = this.state.likes.indexOf(this.state.currentUserId);
            const temp = this.state.likes

            if (this.state.likes.length === 1) {
                this.state.dislikes.push(this.state.currentUserId);
                this.setState(state => ({
                    likes: [],
                    dislikes: this.state.dislikes
                }))
                this.props.update(this.state.video);
            } else {
                const temp2 = temp.slice(0, index_item) + temp.slice(index_item + 1, -1);
                this.state.dislikes.push(this.state.currentUserId);
                this.setState(state => ({
                    likes: temp2,
                    dislikes: this.state.likes
                }));
                this.props.update(this.state.video);
            }

        //last case: if none includes the userID
        } else {


            this.state.dislikes.push(this.state.currentUserId);


            this.setState((state, props) => ({
                dislikes: this.state.dislikes
            }))
            this.props.update(this.state.video);


        }
    }
    render(){
        return (
    <div className="like-container">
        {/* <i class="far fa-thumbs-up" onClick={this.handleLikes}>&nbsp;{this.state.likes.length}</i>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <i class="far fa-thumbs-down"  onClick={this.handleDislikes}>&nbsp;{this.state.dislikes.length}</i> */}
        <div className="like-parent" onClick={this.handleLikes}>
            <div className="icon-container">
            <i class={this.state.likes.includes(this.state.currentUserId) ? "fas fa-thumbs-up" : "far fa-thumbs-up"} ></i>
            </div>
            &nbsp; 
            <div className="likes-number">{this.state.likes.length}</div>
        </div>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
        <div className="dislike-parent" onClick={this.handleDislikes}>
            <div className="icon-container">
            </div>
            <i class={this.state.dislikes.includes(this.state.currentUserId) ? "fas fa-thumbs-down" : "far fa-thumbs-down"}></i>
            &nbsp; 
            <div className="dislikes-number">{this.state.dislikes.length}</div>
        </div>
        

        {/* <div className="show-likes" onClick={this.handleLikes}>Likes: {this.state.likes.length}</div> */}
        {/* <div className="show-dislikes" onClick={this.handleDislikes}>Dislikes: {this.state.dislikes.length}</div> */}
    </div>
        )
    }

}