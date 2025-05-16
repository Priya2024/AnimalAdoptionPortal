({
    fetchAnimalData : function(component) {
        var action = component.get("c.getAnimalList");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.animals", response.getReturnValue());
            } else {
                console.error("Error: ", response.getError());
            }
        });
        $A.enqueueAction(action);
    }
})
