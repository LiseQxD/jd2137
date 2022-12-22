 <script>
function showVideo(index) {
  videoPlayer.src = videos[index].url;
  title.textContent = videos[index].title;
  const prevButton = document.querySelector('.prev-button');
  if (index === 0) {
    prevButton.style.display = 'none';
  } else {
    prevButton.style.display = 'inline-block';
  }
  const nextButton = document.querySelector('.next-button');
  if (index === videos.length - 1) {
    nextButton.style.display = 'none';
  } else {
    nextButton.style.display = 'inline-block';
  }
}
const prevButton = document.querySelector('.prev-button');
prevButton.addEventListener('click', event => {
  currentVideoIndex -= 1;
  if (currentVideoIndex < 0) {
    currentVideoIndex = videos.length - 1;
  }
  showVideo(currentVideoIndex);
});
const nextButton = document.querySelector('.next-button');
nextButton.addEventListener('click', event => {
  currentVideoIndex += 1;
  if (currentVideoIndex >= videos.length) {
    currentVideoIndex = 0;
  }
  showVideo(currentVideoIndex);
});
const videoPlayer = document.querySelector('.video-player');
const buttons = document.querySelectorAll('.button');
const title = document.querySelector('.title');
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const videos = [
  {
    id: 'M7lc1UVf-VE',
    title: 'Film 1',
    url: 'https://www.youtube.com/embed/M7lc1UVf-VE',
  },
  {
    id: '2Vv-BfVoq4g',
    title: 'Film 2',
    url: 'https://www.youtube.com/embed/2Vv-BfVoq4g',
  },
  {
    id: 'HhjHYk9OOVk',
    title: 'Film 3',
    url: 'https://www.youtube.com/embed/HhjHYk9OOVk',
  },
];
let currentVideoIndex = 0;
function showVideo(index) {
  videoPlayer.src = videos[index].url;
  title.textContent = videos[index].title;
}
buttons.forEach(button => {
  button.addEventListener('click', event => {
    const videoId = event.target.dataset.videoId;
    currentVideoIndex = videos.findIndex(video => video.id === videoId);

    showVideo(currentVideoIndex);
  });
});
darkModeToggle.addEventListener('click', event => {
  // Toggle the "dark" class on the body element
  document.body.classList.toggle('dark');
  if (darkModeToggle.textContent === 'Toggle dark mode') {
    darkModeToggle.textContent = 'Toggle light mode';
    darkModeToggle.classList.replace('light', 'dark');
  } else {
    darkModeToggle.textContent = 'Toggle dark mode';
    darkModeToggle.classList.replace('dark', 'light');
  }
  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
} else {
    localStorage.setItem('theme', 'light');
  }
});
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark');
  darkModeToggle.textContent = 'Toggle light mode';
  darkModeToggle.classList.replace('light', 'dark');
}

showVideo(currentVideoIndex);
</script>
<script>
  const player = document.querySelector('.video-player');
  
  player.addEventListener('pause', function() {
    const currentVideoId = player.dataset.videoId;
    localStorage.setItem('current_video', currentVideoId);
  });
  window.addEventListener('load', function() {
    const currentVideoId = localStorage.getItem('current_video');
    if (currentVideoId) {
      player.src = `https://www.youtube.com/embed/${currentVideoId}`;
    }
  });
</script>
