const intialState = {
    carts:[]
}
let intialCount = {
    count:1
}
const initialTotal = {
    total: null
}

export const addReducer = (state = intialState, action)=>{
    switch (action.type) {
        case "Add_Cart":
            
            return {
                ...state,
                carts : [...state.carts, action.payload]
            }

        case "Sub_Cart":
        const updatedArray = state.carts.filter((i) => i.id !== action.payload)    
        return {
                ...state,
                carts: updatedArray
                
            }
    
        default:
            return state
            
    }
    
}
export const addCountReducer = (state = intialCount, action)=>{
    
    
    
    
    switch (action.type) {
        case "Add_Count":
            return{
                ...state,
                count: state.count + 1
            }    
            case "Sub_Count":
                if (state.count <= 0) {
                    return {
                        ...state,
                        count : 0
                    }
                }
                else{
                    return{
                        ...state,
                        count: state.count - 1
                    }   
                }  
        
                
        default:
            return state
            
        }
        
    }

export const CalTotal = (state = initialTotal, action) =>{
    
    switch(action.type){
        case "Cal_Total":
            return{
                ...state,
                total:  action.payload
            }
            default:
                return state
    }
}