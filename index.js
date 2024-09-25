const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
function findMatching(array, string) {
    const result = array.filter((driver) => driver.toLowerCase() === string.toLowerCase())
    return result    
}

function fuzzyMatch(array, string) {
    const result = array.filter((driver) => driver.charAt(0) == string.charAt(0))
    return result
}


function matchName(array, string) {
    const result = array.filter((driver) => driver.name === string)
    return result
}