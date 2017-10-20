/* eslint-disable */

/**
 * Make new resource object
 * Get local storage resource array and
 * push value onto it then reset local storage
 */

function makeNewResource() {
  const category = getCategory().toLowerCase();
  const resource = {
    id: getIndex(),
    title: $resourceTitle.val(),
    link: $resourceLink.val(),
    category: category,
    keyPoints: getKeyPoints(),
    img: getResourceImg()
  };
  const resObj = unpackLocalStorage('resObj');
  if (category in resObj) {
    resObj[category].push(resource);
  } else {
    resObj[category] = [resource];
  }
  console.log(resObj);
  localStorage.setItem('resObj', JSON.stringify(resObj));
}

function checkForm() {
  if ($resourceTitle.val().trim() === '' || $resourceLink.val().trim() === '') {
    if ($resourceTitle.val().trim() === '') {
      $('.resource-warn-msg').show();
    }
    if ($resourceLink.val().trim() === '') {
      $('.link-warn-msg').show();
    }
    return true;
  }
  return false;
}


function getIndex(remove) {
  let index = Number(JSON.parse(localStorage.getItem('index')));
  index++;
  localStorage.setItem('index', JSON.stringify(index));
  return index;
}

/**
 * Get key points from form and push onto array
 * Return the array of keypoints
 */
function getKeyPoints() {
  const kp = [];
  Array.from($resourceKeyPoints).forEach((point) => {
    $(point).val() !== '' && kp.push($(point).val());
  });
  return kp;
}

function checkIfYoutube() {
  if ($resourceLink.val().indexOf("https://www.youtube.com") >= 0) {
    return true;
  }
}

/**
 * Get youtube link id
 * RegEx taken from Stack Overflow
 * https://stackoverflow.com/questions/3452546/how-do-i-get-the-youtube-video-id-from-a-url
 * @param {String} link - the link value
 */
function getYouTubeId(link) {
  // RegEx taken from Stack Overflow 
  let regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  let match = link.match(regExp);
  return (match && match[7].length == 11) ? match[7] : false;
}


/**
 * Get youtube video image url
 * @param {String} id - the id of the youtube vid
 * @return {String} the formatted youtube thumbnail url
 */
function getYouTubeImg(id) {
  return `http://img.youtube.com/vi/${id}/maxresdefault.jpg`;
}

/**
 * Get resource img -- If it's a YouTube link
 * return that first
 */
function getResourceImg() {
  return checkIfYoutube() ? getYouTubeImg(getYouTubeId($resourceLink.val())) :
  getRandomImage();
}


function getRandomImage() {
  const randomImgSrc = RANDOM_IMAGES[Math.floor(Math.random() * RANDOM_IMAGES.length)];
  return randomImgSrc;
}



function getCategory() {
  if (isNewResource) {
    console.log($resourceNew.val());
    return $resourceNew.val();
  }
  if ($resourceCategory.val() === null) {
    return 'All';
  }
  return $resourceCategory.val();
}