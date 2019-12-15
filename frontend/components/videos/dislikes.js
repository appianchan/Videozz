import React from 'react';

export default class Dislikes extends React.Component {
    constructor(props) {
        super(props);
       
        this.state = {
            dislikes: this.props.dislikes || [],
            currentUserId: this.props.currentUserId,
            video: this.props.video
        };
        this.handleClick = this.handleClick.bind(this);
    }
  


    handleClick(e) {
        e.preventDefault();
      
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


        } else {


            this.state.dislikes.push(this.state.currentUserId);


            this.setState((state, props) => ({
                dislikes: this.state.dislikes
            }))
            this.props.update(this.state.video);
            

        }
    }
    render() {
        return (
            <div>
                <div className="show-dislikes" onClick={this.handleClick}>Dislikes: {this.state.dislikes.length}</div>
            </div>
        )
    }

}