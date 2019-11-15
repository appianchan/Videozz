import React from 'react';

export default class VideoShow extends React.Component {
    constructor(props) {
        super(props);
        // debugger;
        this.state = {
            likes: this.props.likes || [],
            currentUserId: this.props.currentUserId,
            video: this.props.video
        };
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        
        this.props.update(this.props.video);

    }

    handleClick(e) {
        e.preventDefault();
        // debugger;
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

            
        } else {
            // debugger;
            this.state.likes.push(this.state.currentUserId);
            
            this.setState((state, props) => ({
                likes: this.state.likes
            }))
            this.props.update(this.state.video);
            // this.props.video.likes.push(this.props.currentUserId);
        }
    }
    render(){
        return (
    <div>
        <div className="show-likes" onClick={this.handleClick}>Likes: {this.state.likes.length}</div>
    </div>
        )
    }

}