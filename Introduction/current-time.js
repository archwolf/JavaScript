
    var datetime = new Date();
    var hour = datetime.getHours();
    var min = datetime.getMinutes();
    if (min<10) {
        console.log(hour + ":" + "0" + min);
    }
    else {
        console.log(hour + ":" + min);
    }
    
