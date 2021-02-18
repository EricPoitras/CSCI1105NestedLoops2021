// Viewer

// Diagram
var diagramXML = `<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" targetNamespace="" xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL http://www.omg.org/spec/BPMN/2.0/20100501/BPMN20.xsd">
  <collaboration id="sid-c0e745ff-361e-4afb-8c8d-2a1fc32b1424">
    <participant id="Participant_0fhe3e5" name="Nested Post-Test Definite Recursion" processRef="Process_18lj7e5" />
    <group id="Group_0cv2fes" categoryValueRef="CategoryValue_1uen1t6" />
    <association id="Association_1pkryw0" sourceRef="Group_0cv2fes" targetRef="TextAnnotation_0c70zlc" />
  </collaboration>
  <process id="Process_18lj7e5">
    <startEvent id="Event_0ihhqcy" name="Start">
      <outgoing>Flow_1ps64ky</outgoing>
    </startEvent>
    <task id="Activity_1orrlog" name="i = 1">
      <incoming>Flow_1ps64ky</incoming>
      <outgoing>Flow_142x22o</outgoing>
    </task>
    <exclusiveGateway id="Gateway_05804m8" name="i &#60;= 10">
      <incoming>Flow_142x22o</incoming>
      <incoming>Flow_03upx6u</incoming>
      <outgoing>Flow_1ntq7x5</outgoing>
      <outgoing>Flow_113ri01</outgoing>
    </exclusiveGateway>
    <task id="Activity_1vqfczs" name="j = 1">
      <incoming>Flow_113ri01</incoming>
      <outgoing>Flow_08of7hj</outgoing>
    </task>
    <exclusiveGateway id="Gateway_0esznks" name="j &#60;= 4">
      <incoming>Flow_08of7hj</incoming>
      <incoming>Flow_18p7aek</incoming>
      <outgoing>Flow_174g9ft</outgoing>
      <outgoing>Flow_1wbgvle</outgoing>
    </exclusiveGateway>
    <endEvent id="Event_0zteus0" name="End">
      <incoming>Flow_1ntq7x5</incoming>
    </endEvent>
    <task id="Activity_0jznfta" name="Print i to the power of j">
      <incoming>Flow_1wbgvle</incoming>
      <outgoing>Flow_0msidfg</outgoing>
    </task>
    <task id="Activity_1tt9cgb" name="j++">
      <incoming>Flow_0msidfg</incoming>
      <outgoing>Flow_18p7aek</outgoing>
    </task>
    <sequenceFlow id="Flow_1ps64ky" sourceRef="Event_0ihhqcy" targetRef="Activity_1orrlog" />
    <sequenceFlow id="Flow_142x22o" sourceRef="Activity_1orrlog" targetRef="Gateway_05804m8" />
    <sequenceFlow id="Flow_1ntq7x5" name="False" sourceRef="Gateway_05804m8" targetRef="Event_0zteus0" />
    <sequenceFlow id="Flow_113ri01" name="True" sourceRef="Gateway_05804m8" targetRef="Activity_1vqfczs" />
    <sequenceFlow id="Flow_08of7hj" sourceRef="Activity_1vqfczs" targetRef="Gateway_0esznks" />
    <sequenceFlow id="Flow_03upx6u" sourceRef="Activity_0ny7q8s" targetRef="Gateway_05804m8" />
    <sequenceFlow id="Flow_174g9ft" name="False" sourceRef="Gateway_0esznks" targetRef="Activity_1nmh95p" />
    <sequenceFlow id="Flow_1wbgvle" name="True" sourceRef="Gateway_0esznks" targetRef="Activity_0jznfta" />
    <sequenceFlow id="Flow_0kbvsrk" sourceRef="Activity_1nmh95p" targetRef="Activity_0ny7q8s" />
    <sequenceFlow id="Flow_0msidfg" sourceRef="Activity_0jznfta" targetRef="Activity_1tt9cgb" />
    <sequenceFlow id="Flow_18p7aek" sourceRef="Activity_1tt9cgb" targetRef="Gateway_0esznks" />
    <task id="Activity_1nmh95p" name="Print skip a line">
      <incoming>Flow_174g9ft</incoming>
      <outgoing>Flow_0kbvsrk</outgoing>
    </task>
    <task id="Activity_0ny7q8s" name="i++">
      <incoming>Flow_0kbvsrk</incoming>
      <outgoing>Flow_03upx6u</outgoing>
    </task>
    <textAnnotation id="TextAnnotation_0c70zlc">
      <text>Nested Loop</text>
    </textAnnotation>
  </process>
  <category id="Category_18fzwnw">
    <categoryValue id="CategoryValue_1uen1t6" />
  </category>
  <bpmndi:BPMNDiagram id="sid-74620812-92c4-44e5-949c-aa47393d3830">
    <bpmndi:BPMNPlane id="sid-cdcae759-2af7-4a6d-bd02-53f3352a731d" bpmnElement="sid-c0e745ff-361e-4afb-8c8d-2a1fc32b1424">
      <bpmndi:BPMNShape id="Participant_0fhe3e5_di" bpmnElement="Participant_0fhe3e5" isHorizontal="true">
        <omgdc:Bounds x="80" y="480" width="1020" height="410" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="TextAnnotation_0c70zlc_di" bpmnElement="TextAnnotation_0c70zlc">
        <omgdc:Bounds x="980" y="510" width="100" height="30" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_1ps64ky_di" bpmnElement="Flow_1ps64ky">
        <omgdi:waypoint x="188" y="680" />
        <omgdi:waypoint x="220" y="680" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_142x22o_di" bpmnElement="Flow_142x22o">
        <omgdi:waypoint x="320" y="680" />
        <omgdi:waypoint x="355" y="680" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1ntq7x5_di" bpmnElement="Flow_1ntq7x5">
        <omgdi:waypoint x="380" y="655" />
        <omgdi:waypoint x="380" y="608" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="386" y="630" width="27" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_113ri01_di" bpmnElement="Flow_113ri01">
        <omgdi:waypoint x="405" y="680" />
        <omgdi:waypoint x="490" y="680" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="419" y="662" width="22" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_08of7hj_di" bpmnElement="Flow_08of7hj">
        <omgdi:waypoint x="590" y="680" />
        <omgdi:waypoint x="655" y="680" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_03upx6u_di" bpmnElement="Flow_03upx6u">
        <omgdi:waypoint x="490" y="810" />
        <omgdi:waypoint x="380" y="810" />
        <omgdi:waypoint x="380" y="705" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_174g9ft_di" bpmnElement="Flow_174g9ft">
        <omgdi:waypoint x="680" y="705" />
        <omgdi:waypoint x="680" y="770" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="687" y="720" width="27" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1wbgvle_di" bpmnElement="Flow_1wbgvle">
        <omgdi:waypoint x="705" y="680" />
        <omgdi:waypoint x="750" y="680" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="710" y="662" width="22" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0kbvsrk_di" bpmnElement="Flow_0kbvsrk">
        <omgdi:waypoint x="630" y="810" />
        <omgdi:waypoint x="590" y="810" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0msidfg_di" bpmnElement="Flow_0msidfg">
        <omgdi:waypoint x="850" y="680" />
        <omgdi:waypoint x="880" y="680" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_18p7aek_di" bpmnElement="Flow_18p7aek">
        <omgdi:waypoint x="930" y="640" />
        <omgdi:waypoint x="930" y="590" />
        <omgdi:waypoint x="680" y="590" />
        <omgdi:waypoint x="680" y="655" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="Event_0ihhqcy_di" bpmnElement="Event_0ihhqcy">
        <omgdc:Bounds x="152" y="662" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="158" y="705" width="25" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1orrlog_di" bpmnElement="Activity_1orrlog">
        <omgdc:Bounds x="220" y="640" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_05804m8_di" bpmnElement="Gateway_05804m8" isMarkerVisible="true">
        <omgdc:Bounds x="355" y="655" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="403" y="693" width="34" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1vqfczs_di" bpmnElement="Activity_1vqfczs">
        <omgdc:Bounds x="490" y="640" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_0esznks_di" bpmnElement="Gateway_0esznks" isMarkerVisible="true">
        <omgdc:Bounds x="655" y="655" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="629" y="649" width="28" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_0zteus0_di" bpmnElement="Event_0zteus0">
        <omgdc:Bounds x="362" y="572" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="370" y="553" width="20" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0jznfta_di" bpmnElement="Activity_0jznfta">
        <omgdc:Bounds x="750" y="640" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1tt9cgb_di" bpmnElement="Activity_1tt9cgb">
        <omgdc:Bounds x="880" y="640" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1nmh95p_di" bpmnElement="Activity_1nmh95p">
        <omgdc:Bounds x="630" y="770" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0ny7q8s_di" bpmnElement="Activity_0ny7q8s">
        <omgdc:Bounds x="490" y="770" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Association_1pkryw0_di" bpmnElement="Association_1pkryw0">
        <omgdi:waypoint x="940" y="570" />
        <omgdi:waypoint x="1000" y="540" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="Group_0cv2fes_di" bpmnElement="Group_0cv2fes">
        <omgdc:Bounds x="467" y="570" width="525" height="180" />
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
    <bpmndi:BPMNLabelStyle id="sid-e0502d32-f8d1-41cf-9c4a-cbb49fecf581">
      <omgdc:Font name="Arial" size="11" isBold="false" isItalic="false" isUnderline="false" isStrikeThrough="false" />
    </bpmndi:BPMNLabelStyle>
    <bpmndi:BPMNLabelStyle id="sid-84cb49fd-2f7c-44fb-8950-83c3fa153d3b">
      <omgdc:Font name="Arial" size="12" isBold="false" isItalic="false" isUnderline="false" isStrikeThrough="false" />
    </bpmndi:BPMNLabelStyle>
  </bpmndi:BPMNDiagram>
</definitions>

`;

var viewer = new BpmnJS({
  container: document.querySelector('#js-canvas'),
  height: '100%',
  width: '100%'
});

//viewer.get('canvas').scroll({dx: -50, dy: -400});

function log(){
  var log_entry = Array.prototype.slice.call(arguments).map(function(e){
    return String(e);
  }).join(' ');
  console.log(log_entry);
}


viewer.importXML(diagramXML).then(function(){
  viewer.get('canvas').zoom("fit-viewport");
  // diagram is loaded, add interaction to it

  // Option 1:
  // directly hook into internal diagram events
  // this allows you to access the clicked element directly

  var eventBus = viewer.get('eventBus');

  // you may hook into any of the following events
  var events = [
    'element.hover',
    'element.out',
    'element.click',
    'element.dblclick',
    'element.mousedown',
    'element.mouseup'
  ];

  events.forEach(function(event) {

    eventBus.on(event, function(e) {
      // e.element = the model element
      // e.gfx = the graphical element

      if(event == "element.hover" && e.element.id == 'Activity_0jznfta' || event == "element.click" && e.element.id == 'Activity_0jznfta'){
        //viewer.get('canvas').addMarker('Activity_0jznfta','highlight');
      }else{
        //viewer.get('canvas').removeMarker('Activity_0jznfta','highlight');
      }

      log(event, 'on', e.element.id);
    });
  });


  // Option 2:
  // directly attach an event listener to an elements graphical representation

  // each model element a data-element-id attribute attached to it in HTML

  // select the end event
  var endEventNode = document.querySelector('#js-canvas [data-element-id=END_EVENT]');
  endEventNode.addEventListener('click', function(e) {
    alert('clicked the end event!');
  });

}).catch(function(err) {

  console.error('failed to load diagram');
  console.error(err);

  return log('failed to load diagram', err);
});

