var modal = document.getElementById('Lightbox');
var isReady = false;
var click_handle;

function clicker(event) {
  if (!event.target.closest('img.zoom') && isReady) {
    closeImage();
    return;
  } else {
  }
  isReady = true;
}

function openImage(video_id) {
  var isMobile = navigator.userAgent.toLowerCase().match(/mobile/i)


  //   // If mobile, just return a link to the uncompressed photo.
  //   if (isMobile) {
  //     location.href = image_expand_path;
  //     return;
  //   }
  document.getElementById('sick').src = video_id;
  document.getElementById('Lightbox').style.display = 'block';
  isReady = false;
  window.addEventListener('click', clicker);
}

function closeImage() {
  document.getElementById('Lightbox').style.display = 'none'
  window.removeEventListener('click', clicker);
  isReady = false;
}


