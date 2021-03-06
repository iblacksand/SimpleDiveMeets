/**
 * A Method to get JSON files from a file.
 * @param file This is the file name of the JSON file
 * @return returns a promise with the object resolved
 */
module.exports.GetJSON = (file) => {
    return new Promise(resolve =>{ var obj;
        readTextFile(file).then((text) =>{
            obj = JSON.parse(text);
            resolve(obj);
        });
    });
};

/**
 * Reads a text file and retuns a string
 * @param {string} file path of the file
 * @return {string} the file contents
 */
function readTextFile(file) {
    return new Promise(resolve => {
        var rawFile = new XMLHttpRequest();
        rawFile.overrideMimeType("application/json");
        rawFile.open("GET", file, true);
        rawFile.onreadystatechange = function() {
            if (rawFile.readyState === 4 && rawFile.status == "200") {
                resolve(rawFile.responseText);
            }
        };
        rawFile.send(null);
    });
}