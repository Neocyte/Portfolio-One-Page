// Animates project previews on hover
function hoverProject(project, preview, jpg, gif) {
  const proj = document.querySelector(project);
  const prev = document.querySelector(preview);

  proj.addEventListener('mouseover', function() {
    prev.setAttribute('src', gif);
  });
  proj.addEventListener('mouseout', function() {
    prev.setAttribute('src', jpg);
  });
}

hoverProject('.project1', '.project-preview1', 'images/memory game static.jpg', 'images/memory game gif.gif');
hoverProject('.project2', '.project-preview2', 'images/frogger game static.jpg', 'images/frogger game gif.gif');
hoverProject('.project3', '.project-preview3', 'images/feedreader static.jpg', 'images/feedreader gif.gif');
hoverProject('.project4', '.project-preview4', 'images/restaurant static.jpg', 'images/restaurant gif.gif');
hoverProject('.project5', '.project-preview5', 'images/myreads static.jpg', 'images/myreads gif.gif');
hoverProject('.project6', '.project-preview6', 'images/neighborhood static.jpg', 'images/neighborhood gif.gif');
