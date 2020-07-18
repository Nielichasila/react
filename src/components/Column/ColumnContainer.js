import {connect} from 'react-redux';
import Column from './column';
import {getCardsForList, createActionAddCards} from '../../redux/cardRedux';



const mapStateToProps = (state, props) => ({
  cards: getCardsForList(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCards({
    listId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);