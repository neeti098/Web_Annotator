chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.local.set({ annotations: [] });
});

// Function to add an annotation
function addAnnotation(annotation) {
    chrome.storage.local.get(['annotations'], function(result) {
        let annotations = result.annotations || [];
        annotations.push(annotation);
        chrome.storage.local.set({ annotations: annotations });
    });
}
