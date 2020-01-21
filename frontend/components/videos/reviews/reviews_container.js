import { fetchReviews } from '../../../actions/review_actions';
import { connect } from "react-redux";
import Review from "./reviews"

const mapStateToProps = (state, ownProps) => {
    const user = state.entities.users[state.session.id];
    debugger;
    return ({
        user: user,
        user_id: state.session.id,
        video_id: ownProps.video_id,
        reviews: state.entities.reviews
    })
};

const mapDispatchToProps = dispatch => ({
    requestAllReviews: () => dispatch(fetchReviews())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Review);