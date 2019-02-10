export default function(state = {}, action){
    switch(action.type){
        case 'PLAYERS':
            return {...state, players: action.payload};
        default:
            return state;
    }
}