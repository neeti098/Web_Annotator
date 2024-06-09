document.addEventListener('DOMContentLoaded', function() {
    let annotationsDiv = document.getElementById('annotations');

    // Fetch annotations from storage
    chrome.storage.local.get(['annotations'], function(result) {
        if (result.annotations) {
            result.annotations.forEach(annotation => {
                let annotationElement = document.createElement('div');
                annotationElement.textContent = annotation.note;
                annotationsDiv.appendChild(annotationElement);
            });
        } else {
            annotationsDiv.textContent = 'No annotations found';
        }
    });
});
