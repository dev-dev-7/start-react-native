export function convertToArray(realmObjectsArray) {
    let copyOfJsonArray = Array.from(realmObjectsArray);
    let jsonArray = JSON.parse(JSON.stringify(copyOfJsonArray))
    return jsonArray;

    // let arrayResults = [];
    // if (object.length > 0) {
    //   object.forEach(element => {
    //       let _element = {}
    //       const _element0 = Object.assign(_element, element);
    //       //console.warn(element);
    //     arrayResults = [_element,...arrayResults];
    //   });
    // }
    // return arrayResults;

}
export function getInitials(name) {
    if (typeof name == "undefined") {
        var name = true;
    }

    var initials = name.replace(/[^a-zA-Z- ]/g, "").match(/\b\w/g);

    if (name) {
        return initials.join('').slice(0, 1).toUpperCase();
    }

    return initials;
};