/* datacontext: data access and model management layer */
app.factory('datacontext', function (model, jsonResultsAdapter) {

    breeze.config.initializeAdapterInstance("modelLibrary", "backingStore", true);

    var serviceName = "/api/";

    var ds = new breeze.DataService({
        serviceName: serviceName,
        hasServerMetadata: false,
        useJsonp: false,
        jsonResultsAdapter: jsonResultsAdapter
    });

    var manager = new breeze.EntityManager({dataService: ds});

    model.initialize(manager.metadataStore);

    return {
        getDepartmentss: getDepartments,
        getEmployees: getEmployees
    };

    /*** implementation details ***/

    function getDepartments() {

        var parameters = makeParameters();
        var query = breeze.EntityQuery
            .from("departments")
            .withParameters(parameters);
        return manager.executeQuery(query).then(returnResults);
    }

    function getEmployees(make) {
        // vehicle/modelrepository/findbymakeid?makeid=xxx
        var parameters = makeParameters({ makeid: make.id });
        var query = breeze.EntityQuery
            .from("vehicle/modelrepository/findbymakeid")
            .withParameters(parameters);
        return manager.executeQuery(query).then(returnResults);
    }

    function makeParameters(addlParameters) {
        var parameters = {
            fmt: "json"
            //api_key: "z35zpey2s8sbj4d3g3fxsqdx"
            // Edmund throttles to 4000 requests per API key
            // get your own key: http://developer.edmunds.com/apps/register
        };
        return breeze.core.extend(parameters, addlParameters);
    }

    function returnResults(data){return data.results}

});