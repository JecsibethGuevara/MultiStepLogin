const validateRegisterData = (store: any) => (next: (arg0: any) => any) => (action: { type: string; payload: { step: any; data: any; }; }) => {
    if(action.type === 'SET_STEP_DATA'){
        const {step, data} = action.payload;
        switch(step){
            case 1:
                console.log('On the first form');
                return next(action);
                return;
            case 2: 
                console.log('On the second form');
                return;
        
            case 3: 
                console.log('On the third form');
                return;
        
            case 4: 
                console.log('On the fourth form');
                return;
            default: 
                console.log('how tf you geet heree');
                return;
        }
    }
} 


export default validateRegisterData;