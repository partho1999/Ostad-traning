
function getDayOfWeek(date){
 let obj =new Date(date);
 let dayOfweek= obj.getDay();
 return dayOfweek;
}

console.log("DateOfWeek:",getDayOfWeek("2022-06-18"));

function getCurrentDateDay(){
    let obj =new Date();
    let CurrentdayOfweek= obj.getDay();
    return CurrentdayOfweek;
}

console.log("CurrentDateOfWeek:",getCurrentDateDay());