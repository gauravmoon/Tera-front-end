
async function playVideo() {
  const link = document.getElementById("linkInput").value;
  const res = await fetch(`http://localhost:3000/api/extract?url=${encodeURIComponent(link)}`);
  const data = await res.json();
  if (data.videoUrl) {
    const video = document.getElementById("videoPlayer");
    video.src = data.videoUrl;
    video.load();
    video.play();
  } else {
    alert("Video not found");
  }
}

function downloadVideo() {
  const video = document.getElementById("videoPlayer");
  if (video.src) {
    const a = document.createElement("a");
    a.href = video.src;
    a.download = "video.mp4";
    a.click();
  } else {
    alert("No video loaded");
  }
}
