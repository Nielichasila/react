import shortid from 'shortid';

// selectors
export const getCardsForList = ({cards}, listId) => cards.filter(card => card.listId == listId);

// action name creator
const reducerName = 'cards';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_card = createActionName('ADD_card');

// action creators
export const createActionAddcard = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_card });

// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_card:
      return [...state, action.payload];
    default:
      return state;
  }
}