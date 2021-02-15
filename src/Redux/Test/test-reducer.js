
import TestRedux from './test.types'

const INITIAL_STATE = {

    hidden:true

};


const testReducer = ( state = INITIAL_STATE, action ) => {

    switch (action.type) {
        case 'TEST':
        return {
            ...state,
            hidden:!state.hidden
        }
    
        default:
            return state
            
    }


}

export default testReducer;