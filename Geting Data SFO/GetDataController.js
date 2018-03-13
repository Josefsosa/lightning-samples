({
    getOpps: function(cmp){
        var action = cmp.get("c.getOpportunities");
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                cmp.set("v.opportunities", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    }
})
