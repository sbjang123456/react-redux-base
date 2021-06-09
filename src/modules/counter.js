const PLUS = 'main/PLUS';
const MINUS = 'main/MINUS';

export const plusCounter = (count) => ({ type: PLUS, count });
export const minusCounter = (count) => ({ type: MINUS, count });

const initialState = 0;

const counter = (state = initialState, action) => {
    switch (action.type) {
        case PLUS:
            if (action.count) {
                return state + action.count;
            } else {
                return state + 1;
            }
        case MINUS:
            if (action.count) {
                return state - action.count;
            } else {
                return state - 1;
            }
        default:
            return state;
    }
};

export default counter;