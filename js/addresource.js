/* eslint-disable */



$resourceSubmit.on('click', function () {
  makeNewResource();
});

function makeNewResource() {
  const resource = {
    title: $resourceTitle.val(),
    link: $resourceLink.val(),
    category: getCategory(),
    keyPoints: getKeyPoints(),
    img: getResourceImg()
  };
  const getLocal = localStorage.getItem('resArr');
  const resArr = JSON.parse(getLocal);
  resArr.push(resource);
  localStorage.setItem('resArr', JSON.stringify(resArr));
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
  return checkIfYoutube() ?
    getYouTubeImg(getYouTubeId($resourceLink.val())) :
    CATEGORIES[$resourceCategory.val()];

}

/**
 * Make new category if New Category is chosen
 * And make key/value pair
 */
function makeNewCategory() {
  const newResource = $resourceNew.val();
  const categoriesArr = unpackLocalStorage('newCategories');
  // TODO: refactor this
  categoriesArr.push(newResource);
  localStorage.setItem('newCategories', JSON.stringify(resourceArr));
  
  CATEGORIES[newResource] = ''; // This could probably be deleted since its not saved
}

function getCategory() {
  if ($resourceCategory.val() === null) {
    return '';
  }
  if ($resourceCategory.val() === 'new') {
    makeNewCategory();
    return $resourceNew.val();
  }
  return $resourceCategory.val();
}