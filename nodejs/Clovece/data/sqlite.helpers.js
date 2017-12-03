exports.paramsQueryForCreate = function createParametersListForCreateTableQuery(parameters) {
    var query = "";
    for (var i = 0; i < parameters.length; i++) {
        query += parameters[i].name + " " + parameters[i].type + (i+1 == parameters.length ? "" : ",");
    }
    return query;
}

exports.paramsQueryForSelect = function createParametersListForSelectQuery(parameters) {
    var query = "";
    for (var i = 0; i < parameters.length; i++) {
        query += parameters[i].name + " " + (i+1 == parameters.length ? "" : ",");
    }
    return query;
}

exports.paramsQueryForInsert = function createParametersPlaceholderForInsertQuery(parameters) {
    var query = "";
    for (var i = 0; i < parameters.length; i++) {
        query += "?" + (i+1 == parameters.length ? "" : ",");
    }
    return query;
}