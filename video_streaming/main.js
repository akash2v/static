// Handle file upload and video preview
document.addEventListener('DOMContentLoaded', () => {
    const videoUpload = document.getElementById('video-upload');
    const videoPlayer = document.getElementById('video-player');

    videoUpload.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const videoUrl = URL.createObjectURL(file);
            videoPlayer.src = videoUrl;
        }
    });
});


const btn = document.getElementById('upload-button');


console.log("upload button", btn);

btn.addEventListener('click', () => {
    console.log("upload button clicked");
    const videoUpload = document.getElementById('video-upload');
    const formData = new FormData();
    formData.append('file', videoUpload.files[0]);

    fetch('http://localhost:8000/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (data.videoUrl) {
            const videoPlayer = document.getElementById('video-player');
            videoPlayer.src = data.videoUrl;
            videoPlayer.play();
        }
    })
    .catch(error => console.error('Error:', error));
})

// upload-button.addEventListener('click', () => {