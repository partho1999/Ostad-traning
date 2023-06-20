function browserNameVersion(){
    var appCodename=navigator.appCodeName;
    var appName=navigator.appName;
    var appVersion=navigator.appVersion;

    return [appCodename,appName,appVersion];
}

console.log(browserNameVersion());

function browserNameVersion1(){
    var appCodename=navigator.appCodeName;
    var appName=navigator.appName;
    var appVersion=navigator.appVersion;

    return document.write(appCodename+"<br>"+appName+"<br>"+appVersion+"<br>");
}

browserNameVersion1();