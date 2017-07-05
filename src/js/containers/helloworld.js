import { connect } from 'react-redux';
import HelloWorld from '../components/helloworld';
import { changeColor, fetchText } from '../actions';

const mapStateToProps = state => {
    return {
        color: state.color,
        text: state.text
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeColor: color => {
            dispatch(changeColor(color))
        },
        fetchText: () => {
            dispatch(fetchText())
        }
    }
};

const ComponentHelloWorld = connect (
    mapStateToProps,
    mapDispatchToProps
)(HelloWorld);

export default ComponentHelloWorld;

