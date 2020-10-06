class utilMethods{

    randomString(length, stringType) {

        var result = '';
    
        var characters = '';
    
        if(stringType==="upperCase"){
            characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        }
        
        else if(stringType==="lowerCase"){
            characters = 'abcdefghijklmnopqrstuvwxyz';
        } 
        
        else if(stringType==="alphaNumeric") {
            characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        } 
        
        else if(stringType==="numeric") {
            characters ='0123456789';
        } 
        else {
            characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        }
     
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    

}

export default utilMethods;