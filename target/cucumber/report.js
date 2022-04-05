$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/SkyBlue.feature");
formatter.feature({
  "line": 1,
  "name": "Automation Practical Exam",
  "description": "",
  "id": "automation-practical-exam",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Sky Blue Background",
  "description": "",
  "id": "automation-practical-exam;sky-blue-background",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "\"Set SkyBlue Background\" button exists",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on the button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the background color will change to sky blue",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Set SkyBlue Background",
      "offset": 1
    }
  ],
  "location": "StepDefinition.button_exists(String)"
});
formatter.result({
  "duration": 7401602500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_click_on_the_button()"
});
formatter.result({
  "duration": 3160536900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.the_background_color_will_change_to_sky_blue()"
});
formatter.result({
  "duration": 61067700,
  "status": "passed"
});
});