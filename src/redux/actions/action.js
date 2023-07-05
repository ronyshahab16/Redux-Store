export const Add = (item) =>{
    return {
        type: "Add_Cart",
        payload:item
    }
}
export const Sub = (item) =>{
    return{
        type: "Sub_Cart",
        payload:item
    }
}

export const addCount= () =>{
    return {
        type:"Add_Count",
        
    
    }
}
export const subCount= () =>{
    return {
        type:"Sub_Count",
        
    
    }
}

export const cal_total = (total) =>{
    return {
        type:"Cal_Total",
        payload : total
    }
}


