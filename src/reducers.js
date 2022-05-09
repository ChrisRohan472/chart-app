import { createStore,combineReducers} from 'redux';
const auth=(state={status:false},action)=>
{
    if(action.type==="LOGIN")
    return {...state,status:true};
    else if(action.type==="LOGOUT")
    return {...state,status:false}
    else return state;
}
const reducer = (state = 0, action) => {
  if (action.type === 'INCREMENT') {
    return action.payload;
  } else  {
    return state ;
  }

 
};
const reducer1=(state=100,action)=>
{
  if(action.type==='ADD')
  {
    return state+action.payload;
  }
  else 
  {
    return state;
  }

}
export const store = createStore(combineReducers({reducer,reducer1,auth}));