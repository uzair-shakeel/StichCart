const Logger = {

    recordError: function recordError(error, message, isFatal) {
        //crashlytics().crash();
        console.log(error);   
        if (message) {
            //crashlytics().log(message);    
            console.log(message);    
        }
        //crashlytics().recordError(error);
    },

    log: function log(message) {
        //crashlytics().log(message);
        console.log(message);
    }

}

export default Logger;