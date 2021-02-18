window.addEventListener('load', (event) => {
  console.log('page is fully loaded');
  if(condition == "generate"){
    container_generate.classList.remove("d-none");
    container_construct1.classList.add("d-none");
    container_construct2.classList.add("d-none");
    container_construct3.classList.add("d-none");
  }else if(condition == "construct"){
    container_generate.classList.add("d-none");
    container_construct1.classList.remove("d-none");
    container_construct2.classList.remove("d-none");
    container_construct3.classList.remove("d-none");
  }
  set_textCounter(counter);
});

window.addEventListener('resize', function(){
  viewer.get('canvas').zoom("fit-viewport");
});

btnToPrevious.addEventListener('click', function(){
  main("ToPrevious");
});

btnPrevious.addEventListener('click', function(){
  main("Previous");
});

btnPause.addEventListener('click', function(){
  main("Pause");
});

btnPlay.addEventListener('click', function(){
  main("Play");
});

btnNext.addEventListener('click', function(){
  main("Next");
});

btnToNext.addEventListener('click', function(){
  main("ToNext");
});

btnHint.addEventListener('click', function(){
  set_hint();
});

btnSubmit.addEventListener('click', function(){
  set_response();
});

btnLogin.addEventListener('click', function(){
  console.log('Login');
});