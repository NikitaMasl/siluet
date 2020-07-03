window.addEventListener('scroll', () => {
  let movingBlockHeight = document.getElementsByClassName('top-block')[0].clientHeight;
  let bottomBlockHeight = document.getElementsByClassName('bottom-block')[0].clientHeight;
  let asideHeight = document.getElementsByTagName('aside')[0].clientHeight;

  if((pageYOffset + movingBlockHeight +20) <= (asideHeight-bottomBlockHeight)){
    console.log((pageYOffset + movingBlockHeight))
    document.getElementsByClassName('top-block')[0].style.top = pageYOffset + 'px';
  }
  if((pageYOffset + movingBlockHeight +20) >= (asideHeight-bottomBlockHeight)){
    document.getElementsByClassName('top-block')[0].style.top = asideHeight - 20 - movingBlockHeight - bottomBlockHeight + 'px'
  }
})
