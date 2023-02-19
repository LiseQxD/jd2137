// Tablica filmów
var movies = [
  {
    title: 'Sezon 1 Odcinek 1',
    url: 'https://sbchill.com/e/8hf2wwmo3qvo.html'
  },
  {
    title: 'Sezon 1 Odcinek 2',
    url: 'https://sbchill.com/e/979pjhcyk413.html'
  },
  {
    title: 'Sezon 1 Odcinek 3',
    url: 'https://sbchill.com/e/qhreqh38vtnd.html'
  },
  {
    title: 'Sezon 1 Odcinek 4',
    url: 'https://sbchill.com/e/nsd9l40yz04q.html'
  },
  {
    title: 'Sezon 1 Odcinek 5',
    url: 'https://sbchill.com/e/2nx5v547t9po.html'
  },
  {
    title: 'Sezon 1 Odcinek 6',
    url: 'https://sbchill.com/e/7eo1i42m9bly.html'
  },
  {
    title: 'Sezon 1 Odcinek 7',
    url: 'https://sbchill.com/e/39z1r74dl612.html'
  },
  {
    title: 'Sezon 2 Odcinek 1',
    url: 'https://sbchill.com/e/p2to2z6f5nm0.html'
  },
  {
    title: 'Sezon 2 Odcinek 2',
    url: 'https://sbchill.com/e/o4omhjpowu4y.html'
  },
  {
    title: 'Sezon 2 Odcinek 3',
    url: 'https://sbchill.com/e/up2wj9hpkkpa.html'
  },
  {
    title: 'Sezon 2 Odcinek 4',
    url: 'https://sbchill.com/e/g5bru0ulpxtb.html'
  },
  {
    title: 'Sezon 2 Odcinek 5',
    url: 'https://sbchill.com/e/22hf5g7ed8ez.html'
  },
  {
    title: 'Sezon 2 Odcinek 6',
    url: 'https://sbchill.com/e/pyw1ur4wqb68.html'
  },
  {
    title: 'Sezon 2 Odcinek 7',
    url: 'https://sbchill.com/e/jd86ltl9u778.html'
  },
  {
    title: 'Sezon 2 Odcinek 8',
    url: 'https://sbchill.com/e/oaj1skzbdeqk.html'
  },
  {
    title: 'Sezon 2 Odcinek 9',
    url: 'https://sbchill.com/e/ew0o9scs1l06.html'
  },
  {
    title: 'Sezon 2 Odcinek 10',
    url: 'https://sbchill.com/e/wptwpj87rfpm.html'
  },
  {
    title: 'Sezon 2 Odcinek 11',
    url: 'https://sbchill.com/e/fanr7pqwjw2m.html'
  },
  {
    title: 'Sezon 2 Odcinek 12',
    url: 'https://sbchill.com/e/xboliqa6d8nx.html'
  },
  {
    title: 'Sezon 2 Odcinek 13',
    url: 'https://sbchill.com/e/6bau6ujpglj4.html'
  },
  {
    title: 'Sezon 3 Odcinek 1',
    url: 'https://sbchill.com/e/89gg0pchko6w.html'
  },
  {
    title: 'Sezon 3 Odcinek 2',
    url: 'https://sbchill.com/e/vzco4icuywk4.html'
  },
  {
    title: 'Sezon 3 Odcinek 3',
    url: 'https://sbchill.com/e/zg8x1ody3t7e.html'
  },
  {
    title: 'Sezon 3 Odcinek 4',
    url: 'https://sbchill.com/e/m10f6uebwt7r.html'
  },
  {
    title: 'Sezon 3 Odcinek 5',
    url: 'https://sbchill.com/e/yci2nq0sf579.html'
  },
  {
    title: 'Sezon 3 Odcinek 6',
    url: 'https://sbchill.com/e/7lat7k252kre.html'
  },
  {
    title: 'Sezon 3 Odcinek 7',
    url: 'https://sbchill.com/e/lbrw4iss4ofg.html'
  },
  {
    title: 'Sezon 3 Odcinek 8',
    url: 'https://sbchill.com/e/cyccmxdibjau.html'
  },
  {
    title: 'Sezon 3 Odcinek 9',
    url: 'https://sbchill.com/e/ktyee3zjmebs.html'
  },
  {
    title: 'Sezon 3 Odcinek 10',
    url: 'https://sbchill.com/e/18c2721yv2if.html'
  },
  {
    title: 'Sezon 3 Odcinek 11',
    url: 'https://sbchill.com/e/rwbsxmo950vw.html'
  },
  {
    title: 'Sezon 3 Odcinek 12',
    url: 'https://sbchill.com/e/ousdzqccviwk.html'
  },
  {
    title: 'Sezon 3 Odcinek 13',
    url: 'https://sbchill.com/e/x8hhk7cd9hdl.html'
  },
  {
    title: 'Sezon 4 Odcinek 1',
    url: 'https://sbchill.com/e/ro68lv7oeisc.html'
  },
  {
    title: 'Sezon 4 Odcinek 2',
    url: 'https://sbchill.com/e/i9kc123098wx.html'
  },
  {
    title: 'Sezon 4 Odcinek 3',
    url: 'https://sbchill.com/e/f8mo4cprnujd.html'
  },
  {
    title: 'Sezon 4 Odcinek 4',
    url: 'https://sbchill.com/e/dk2pe9bs3qcm.html'
  },
  {
    title: 'Sezon 4 Odcinek 5',
    url: 'https://sbchill.com/e/7kdtbu8oti5g.html'
  },
  {
    title: 'Sezon 4 Odcinek 6',
    url: 'https://sbchill.com/e/zeadav2xgthf.html'
  },
  {
    title: 'Sezon 4 Odcinek 7',
    url: 'https://sbchill.com/e/335329vnkkl2.html'
  },
  {
    title: 'Sezon 4 Odcinek 8',
    url: 'https://sbchill.com/e/eu78pt90ybhj.html'
  },
  {
    title: 'Sezon 4 Odcinek 9',
    url: 'https://sbchill.com/e/s85nfuvodvgo.html'
  },
  {
    title: 'Sezon 4 Odcinek 10',
    url: 'https://sbchill.com/e/1s9kzxvm6wxr.html'
  },
  {
    title: 'Sezon 4 Odcinek 11',
    url: 'https://sbchill.com/e/iilljyu3143d.html'
  },
  {
    title: 'Sezon 4 Odcinek 12',
    url: 'https://sbchill.com/e/60wzi47xu4f5.html'
  },
  {
    title: 'Sezon 4 Odcinek 13',
    url: 'https://sbchill.com/e/biedzwad2ymv.html'
  },
  {
    title: 'Sezon 5 Odcinek 1',
    url: 'https://sbchill.com/e/owb0sp8e3fx0.html'
  },
  {
    title: 'Sezon 5 Odcinek 2',
    url: 'https://sbchill.com/e/a3w9s5xt2usp.html'
  },
  {
    title: 'Sezon 5 Odcinek 3',
    url: 'https://sbchill.com/e/xmkwd6f1ijx4.html'
  },
  {
    title: 'Sezon 5 Odcinek 4',
    url: 'https://sbchill.com/e/4y5josb1slns.html'
  },
  {
    title: 'Sezon 5 Odcinek 5',
    url: 'https://sbchill.com/e/wbn8l9jpos2n.html'
  },
  {
    title: 'Sezon 5 Odcinek 6',
    url: 'https://sbchill.com/e/dqofr2w83gze.html'
  },
  {
    title: 'Sezon 5 Odcinek 7',
    url: 'https://sbchill.com/e/6kr0s20qv7d9.html'
  },
  {
    title: 'Sezon 5 Odcinek 8',
    url: 'https://sbchill.com/e/hu7u3x088btc.html'
  },
  {
    title: 'Sezon 5 Odcinek 9',
    url: 'https://sbchill.com/e/m0uux2l6y0p0.html'
  },
  {
    title: 'Sezon 5 Odcinek 10',
    url: 'https://sbchill.com/e/ijs2tl2w7gbd.html'
  },
  {
    title: 'Sezon 5 Odcinek 11',
    url: 'https://sbchill.com/e/ni6a7cgg6c0o.html'
  },
  {
    title: 'Sezon 5 Odcinek 12',
    url: 'https://sbchill.com/e/fp4pj2va67j5.html'
  },
  {
    title: 'Sezon 5 Odcinek 13',
    url: 'https://sbchill.com/e/4flh48o9m3bt.html'
  },
  {
    title: 'Sezon 5 Odcinek 14',
    url: 'https://sbchill.com/e/6ejeou160cz2.html'
  },
  {
    title: 'Sezon 5 Odcinek 15',
    url: 'https://sbchill.com/e/qjw01mcykooa.html'
  },
  {
    title: 'Sezon 5 Odcinek 16',
    url: 'https://sbchill.com/e/xh0mk026wa3q.html'
  },
];


  // Indeks aktualnie wyświetlanego filmu
  var currentMovieIndex = 0;
  
  // Ustawienie filmu na stronie
  function setMovie(index) {
    var movie = movies[index];
    document.getElementById('movieTitle').innerHTML = movie.title;
    document.getElementById('movie').src = movie.url;
  }
  
  // Tworzenie przycisków filmów
  function createMovieButtons() {
    var buttonsContainer = document.getElementById('movieButtons');
    for (var i = 0; i < movies.length; i++) {
      var movie = movies[i];
      var button = document.createElement('button');
      button.innerHTML = movie.title;
      button.classList.add('movie-button');
      button.addEventListener('click', function(index) {
        return function() {
          currentMovieIndex = index;
          setMovie(currentMovieIndex);
        };
      }(i));
      buttonsContainer.appendChild(button);
    }
  }
  
  function prevMovie() {
    currentMovieIndex--;
    if (currentMovieIndex < 0) {
      currentMovieIndex = movies.length - 1;
    }
    saveMovie(); // Save the current movie index in localStorage
    setMovie(currentMovieIndex);
  }
  
  
  function nextMovie() {
    currentMovieIndex++;
    if (currentMovieIndex >= movies.length) {
      currentMovieIndex = 0;
    }
    saveMovie(); // Save the current movie index in localStorage
    setMovie(currentMovieIndex);
  }
  
  // Funkcja obsługująca tryb ciemny
  function toggleDarkMode() {
    var body = document.querySelector('body');
    var darkModeSwitch = document.getElementById('darkModeSwitch');
    if (darkModeSwitch.checked) {
      body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'enabled');
    } else {
      body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'disabled');
    }
  }
  
  // Pobieranie stanu trybu ciemnego z localStorage
  function getDarkModeState() {
    var darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
      document.getElementById('darkModeSwitch').checked = true;
      toggleDarkMode();
    }
  }
  
  function init() {
    currentMovieIndex = localStorage.getItem('currentMovieIndex');
    if (currentMovieIndex === null) {
      currentMovieIndex = 0; // Default to first movie
    }
    setMovie(currentMovieIndex);
    createMovieButtons();
    getDarkModeState();
  }
  
// Get elements
const popupContainer = document.getElementById('popup-container');
const popup = document.getElementById('popup');
const closeButton = document.getElementById('close-button');
const openButton = document.getElementById('open-button');

// Check if user has already dismissed the pop-up
if (localStorage.getItem('popupDismissed')) {
  // Pop-up dismissed, don't show it again
  popupContainer.style.display = 'none';
} else {
  // Pop-up not dismissed, show it
  popupContainer.style.display = 'block';
}

// Dim the rest of the page when the pop-up is visible
function dimPage() {
  document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
}

// Undim the page when the pop-up is not visible
function undimPage() {
  document.body.style.backgroundColor = '';
}

// Close the pop-up when the close button is clicked
closeButton.addEventListener('click', function() {
  popupContainer.style.display = 'none';
  localStorage.setItem('popupDismissed', true);
  undimPage();
});

// Close the pop-up when the user clicks outside of it
popupContainer.addEventListener('click', function(event) {
  if (event.target === popupContainer) {
    popupContainer.style.display = 'none';
    localStorage.setItem('popupDismissed', true);
    undimPage();
  }
});

// Show the pop-up again when the open button is clicked
openButton.addEventListener('click', function() {
  popupContainer.style.display = 'block';
  dimPage();
});
init();
function saveMovie(title, src,) {
  localStorage.setItem("currentMovieTitle", title);
  localStorage.setItem("currentMovieSrc", src);
}

// Funkcja do pobierania odtwarzanego filmu z localStorage
function loadMovie() {
  var title = localStorage.getItem("currentMovieTitle");
  var src = localStorage.getItem("currentMovieSrc");

  if (title && src) {
    document.getElementById("movieTitle").innerHTML = title;
    document.getElementById("movie").src = src;
  }
}
// Na początku załaduj odtwarzany film z localStorage
loadMovie();
function saveMovie() {
  localStorage.setItem('currentMovieIndex', currentMovieIndex);
}
