var promise = document.querySelector('video').play();

if (promise !== undefined) {
    promise.catch(error => {
        // Auto-play was prevented
        // Show a UI element to let the user manually start playback
    }).then(() => {
        // Auto-play started
    });
}