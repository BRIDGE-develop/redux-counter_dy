import CounterList from '../components/CounterList';
import * as actions from '../actions';
import { connect } from 'react-redux';
import getRandomColor from '../lib/getRandomColor';

const mapStateToProps = (state) => ({ counters: state.counters });

const mapDispathchToProps = (dispatch) => ({
    onIncrement: (index) => dispatch(actions.increment(index)),
    onDecrement: (index) => dispatch(actions.decrement(index)),
    onSetColor: (index) => {
        const color = getRandomColor();
        dispatch(actions.setColor({ index, color }))
    }
})

const CounterListContainer = connect(mapStateToProps, mapDispathchToProps)(CounterList);

export default CounterListContainer;