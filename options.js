document.addEventListener('DOMContentLoaded', function() {
    let colorInput = document.getElementById('highlightColor');
    let saveButton = document.getElementById('saveOptions');

    chrome.storage.sync.get(['highlightColor'], function(result) {
        colorInput.value = result.highlightColor || '#ffff00';
    });

    saveButton.addEventListener('click', function() {
        let color = colorInput.value;
        chrome.storage.sync.set({ highlightColor: color }, function() {
            console.log('Options saved');
        });
    });
});
