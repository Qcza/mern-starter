import { connect } from 'react-redux';
import HelloWorld from '../components/helloworld';
import { changeColor } from '../actions';

const mapStateToProps = state => {
    return {
        color: state.color
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeColor: color => {
            dispatch(changeColor(color))
        }
    }
};

const ComponentHelloWorld = connect (
    mapStateToProps,
    mapDispatchToProps
)(HelloWorld);

export default ComponentHelloWorld;

