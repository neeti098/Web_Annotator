document.addEventListener('mouseup', function() {
    let selectedText = window.getSelection().toString().trim();
    if (selectedText.length > 0) {
        let note = prompt('Add a note for this highlight:', '');
        if (note !== null) {
            let annotation = { text: selectedText, note: note };
            chrome.runtime.sendMessage({ action: 'addAnnotation', annotation: annotation });
        }
    }
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'addAnnotation') {
        addAnnotation(request.annotation);
    }
});
