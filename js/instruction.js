var counter = 0;
var myTimer;
// construct | generate | readonly
const condition = "readonly";

function main(action){
  switch(action){
    case 'ToPrevious':
      console.log('ToPrevious');
      set_player("Pause");
      backward_player();
      break;
    case 'Previous':
      console.log('Previous');
      if(counter > 0){
        set_player("Pause");
        counter--;
        set_textCounter(counter);
      }else{
        console.log("Error: Counter is out of bounds");
      }
      break;
    case 'Pause':
      console.log('Pause');
      set_player("Pause");
      break;
    case 'Play':
      console.log('Play');
      set_player("Play");
      break;
    case 'Next':
      console.log('Next');
      if(counter <49){
        set_player("Pause");
        counter++;
        set_textCounter(counter);
      }else{
        console.log("Error: Counter is out of bounds");
      }
      break;
    case 'ToNext':
      console.log('ToNext');
      set_player("Pause");
      forward_player();
      break;
  }
}

function set_textCounter(counter){
  textCounter.textContent = counter + 1;
  set_stateMemory();
  set_emulator();
  set_highlight();
  set_tutor();
}

function set_player(action){
  if(action == "Play"){
    btnPlay.disabled = true;
    btnPause.disabled = false;
    myTimer = setInterval(tick_counter, 2000);
  }else if(action == "Pause"){
    btnPlay.disabled = false;
    btnPause.disabled = true;
    pause_counter();
  }
}

function forward_player(){
  do{
    counter++;
  }while(!data[counter].tutor);
  set_textCounter(counter);
}

function backward_player(){
  do{
    counter--;
  }while(!data[counter].tutor);
  set_textCounter(counter);
}

function tick_counter(){
  counter++;
  set_textCounter(counter);
}

function pause_counter(){
  clearInterval(myTimer);
}

function set_stateMemory(){
  if(counter < data.length){
    text_stateMemory[0].textContent = data[counter].outer;
    text_stateMemory[1].textContent = data[counter].inner;
    text_stateMemory[2].textContent = data[counter].i;
    text_stateMemory[3].textContent = data[counter].j;
    text_stateMemory[4].textContent = data[counter].output;
  }else{
    console.log("Error: Count exceeds bounds of data array");
  }
}

function set_emulator(){
  if(counter < data.length){
    textOutput.value = "";
    var output = "";
    for(i = 0; i < counter + 1; i++){
      if(data[i].highlight == "innerstatement"){
        output+= "      " + Math.pow(data[i].i, data[i].j);
      }else if(data[i].highlight == "outerstatement"){
        output+= "\n";
      }
    }
  textOutput.value = output;
  }else{
    console.log("Error: Count exceeds bounds of data array");
  }
}

function set_highlight(){
  if(counter < data.length){
    textPseudocode.forEach(element => {
      element.classList.remove("bg-warning");
    });
    text_stateMemory.forEach(element => {
      element.classList.remove("bg-warning");
    });
    textProgram.forEach(element => {
      element.classList.remove("bg-warning");
    });
    viewer.get('canvas').removeMarker('Activity_1nmh95p','highlight');
    viewer.get('canvas').removeMarker('Activity_0jznfta','highlight');
    viewer.get('canvas').removeMarker('Activity_1orrlog','highlight');
    viewer.get('canvas').removeMarker('Gateway_05804m8','highlight');
    viewer.get('canvas').removeMarker('Activity_1vqfczs','highlight');
    viewer.get('canvas').removeMarker('Gateway_0esznks','highlight');
    viewer.get('canvas').removeMarker('Activity_1tt9cgb','highlight');
    viewer.get('canvas').removeMarker('Activity_0ny7q8s','highlight');
    if(data[counter].highlight == "declare i"){
      textPseudocode[0].classList.add("bg-warning");
      text_stateMemory[2].classList.add("bg-warning");
      textProgram[4].classList.add("bg-warning");
      viewer.get('canvas').addMarker('Activity_1orrlog','highlight');
    }else if(data[counter].highlight == "outer"){
      textPseudocode[1].classList.add("bg-warning");
      text_stateMemory[0].classList.add("bg-warning");
      textProgram[5].classList.add("bg-warning");
      viewer.get('canvas').addMarker('Gateway_05804m8','highlight');
    }else if(data[counter].highlight == "declare j"){
      textPseudocode[1].classList.add("bg-warning");
      text_stateMemory[3].classList.add("bg-warning");
      textProgram[5].classList.add("bg-warning");
      viewer.get('canvas').addMarker('Activity_1vqfczs','highlight');
    }else if(data[counter].highlight == "inner"){
      textPseudocode[1].classList.add("bg-warning");
      text_stateMemory[1].classList.add("bg-warning");
      textProgram[5].classList.add("bg-warning");
      viewer.get('canvas').addMarker('Gateway_0esznks','highlight');
    }else if(data[counter].highlight == "output"){
      textPseudocode[2].classList.add("bg-warning");
      text_stateMemory[4].classList.add("bg-warning");
      textProgram[7].classList.add("bg-warning");
      viewer.get('canvas').addMarker('Activity_0jznfta','highlight');
    }else if(data[counter].highlight == "innerstatement"){
      textPseudocode[2].classList.add("bg-warning");
      text_stateMemory[4].classList.add("bg-warning");
      textProgram[6].classList.add("bg-warning");
      textProgram[7].classList.add("bg-warning");
      viewer.get('canvas').addMarker('Activity_0jznfta','highlight');
    }else if(data[counter].highlight == "increment j"){
      textPseudocode[1].classList.add("bg-warning");
      text_stateMemory[3].classList.add("bg-warning");
      textProgram[5].classList.add("bg-warning");
      viewer.get('canvas').addMarker('Activity_1tt9cgb','highlight');
    }else if(data[counter].highlight == "outerstatement"){
      textPseudocode[3].classList.add("bg-warning");
      text_stateMemory[4].classList.add("bg-warning");
      textProgram[9].classList.add("bg-warning");
      viewer.get('canvas').addMarker('Activity_1nmh95p','highlight');
    }else if(data[counter].highlight == "increment i"){
      textPseudocode[0].classList.add("bg-warning");
      text_stateMemory[2].classList.add("bg-warning");
      textProgram[4].classList.add("bg-warning");
      viewer.get('canvas').addMarker('Activity_0ny7q8s','highlight');
    }
  }else{
    console.log("Error: Count exceeds bounds of data array");
  }
}

function set_tutor(){
  if(counter < data.length){
    if(data[counter].tutor && condition!= "readonly"){
      feedback_state.textContent = data[counter].answer.state;
      feedback_value.textContent = data[counter].answer.value;
      feedback_explanation.textContent = data[counter].answer.reason;
      feedback_container.style.visibility = "hidden";
      question_container.style.visibility = "visible";
      if(condition == "generate"){
        container_generate.style.visibility = "visible";
        if(data[counter].response.explanation != ""){
          text_value.value = data[counter].response.explanation;
          btnSubmit.disabled = true;
          btnHint.disabled = true;
          feedback_container.style.visibility = "hidden";

          btnPause.disabled = true;
          btnToPrevious.disabled = false;
          btnPrevious.disabled = false;
          btnPlay.disabled = false;
          btnNext.disabled = false;
          btnToNext.disabled = false;
        }else{
          text_value.value = "";
          btnSubmit.disabled = false;
          btnHint.disabled = false;

          btnPause.disabled = true;
          btnToPrevious.disabled = true;
          btnPrevious.disabled = true;
          btnPlay.disabled = true;
          btnNext.disabled = true;
          btnToNext.disabled = true;
        }
      }else if(condition == "construct"){
        container_construct1.style.visibility = "visible";
        container_construct2.style.visibility = "visible";
        container_construct3.style.visibility = "visible";
        if(data[counter].response.state != "" || data[counter].response.value != "" || data[counter].response.reason != ""){
          menu_state.value = data[counter].response.state;
          menu_value.value = data[counter].response.value;
          menu_reason.value = data[counter].response.reason;
          btnSubmit.disabled = true;
          btnHint.disabled = true;
          feedback_container.style.visibility = "visible";

          btnPause.disabled = true;
          btnToPrevious.disabled = false;
          btnPrevious.disabled = false;
          btnPlay.disabled = false;
          btnNext.disabled = false;
          btnToNext.disabled = false;
        }else{
          menu_state.value = "Choose one";
          menu_value.value = "Choose one";
          menu_reason.value = "Choose one";
          btnSubmit.disabled = false;
          btnHint.disabled = false;

          btnPause.disabled = true;
          btnToPrevious.disabled = true;
          btnPrevious.disabled = true;
          btnPlay.disabled = true;
          btnNext.disabled = true;
          btnToNext.disabled = true;
        }
      }
      
    }else{
      feedback_container.style.visibility = "hidden";
      question_container.style.visibility = "hidden";
      container_generate.style.visibility = "hidden";
      container_construct1.style.visibility = "hidden";
      container_construct2.style.visibility = "hidden";
      container_construct3.style.visibility = "hidden";
      btnSubmit.disabled = true;
      btnHint.disabled = true;
      textHint.textContent = "";
    }
  }
}

function set_response(){
  console.log('Submit');
  if(condition == "generate"){
    data[counter].response.explanation = text_value.value;
    console.log(data[counter].response.explanation);
  }else if(condition == "construct"){
    data[counter].response.state = menu_state.value;
    console.log(data[counter].response.state);
    data[counter].response.value = menu_value.value;
    console.log(data[counter].response.value);
    data[counter].response.reason = menu_reason.value;
    console.log(data[counter].response.reason);
  }
  feedback_state.textContent = data[counter].answer.state;
  feedback_value.textContent = data[counter].answer.value;
  feedback_explanation.textContent = data[counter].answer.reason;
  feedback_container.style.visibility = "visible";
  btnSubmit.disabled = true;
  btnHint.disabled = true;

  btnPause.disabled = true;
  btnToPrevious.disabled = false;
  btnPrevious.disabled = false;
  btnPlay.disabled = false;
  btnNext.disabled = false;
  btnToNext.disabled = false;
  
}

function set_hint(){
  console.log('Hint');
  textHint.textContent = data[counter].answer.hint;
  btnHint.disabled = true;
}

