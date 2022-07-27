
var keylog = {
    //PROPERTIES
    cache:[], //TEMP ARRAY TO STORE KEY STROKES


//INITIALIZE

    init: function(){
        window.addEventListener("keyDown", function(evt){
            keylog.cache.push(evt.key);
            console.log(keylog.cache);
        });
    }
};

window.addEventListener("DOMContentLoaded", keylog.init);