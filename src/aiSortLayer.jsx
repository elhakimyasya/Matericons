function sortObjectsAlphabetically() {
    var doc = app.activeDocument;
    var layers = doc.layers;

    // Unlock all locked layers
    for (var i = 0; i < layers.length; i++) {
        if (layers[i].locked) {
            layers[i].locked = false;
        }
    }

    // Loop through each layer
    for (var i = 0; i < layers.length; i++) {
        var layer = layers[i];
        var contents = layer.pageItems;

        // Create a new array for the sorted contents
        var sortedContents = [];

        // Loop through each content in the layer
        for (var j = 0; j < contents.length; j++) {
            var content = contents[j];

            // Add the content to the sortedContents array
            sortedContents.push(content);
        }

        // Sort the sortedContents array alphabetically by name
        sortedContents.sort(function (a, b) {
            var nameA = a.name.toUpperCase(); // ignore upper and lowercase
            var nameB = b.name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            // names must be equal
            return 0;
        });

        // Move the sorted contents to the top of the layer
        for (var k = 0; k < sortedContents.length; k++) {
            var sortedContent = sortedContents[k];
            if (sortedContent) {
                sortedContent.move(layer, ElementPlacement.PLACEATBEGINNING);
            }
        }

        // Lock the layer if it was previously locked
        if (layer.locked) {
            layer.locked = false;
        }
    }
}

// Call the function to sort the objects alphabetically
sortObjectsAlphabetically();
