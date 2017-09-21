module.exports.GetJSON = (file) => {
    return new Promise(resolve =>{
        var obj;
        readTextFile(file).then((text) =>{
            obj = JSON.parse(text);
            // console.log("JSON OBJ FROM JSONHANDLER\n" + obj);
            resolve(obj);
        });
    });
};

function readTextFile(file) {
    return new Promise(resolve => {
        console.log("file name: " + file);
        var rawFile = new XMLHttpRequest();
        rawFile.overrideMimeType("application/json");
        rawFile.open("GET", file, true);
        rawFile.onreadystatechange = function() {
            if (rawFile.readyState === 4 && rawFile.status == "200") {
                console.log("text: " + rawFile.responseText);
                resolve(rawFile.responseText);
            }
        };
        rawFile.send(null);
    });
}