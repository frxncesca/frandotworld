
/**
 * main
 * 
 * Invoked when the page is loaded.
 * All custom JS code can go within this function.
 */

function main () {

  console.log("Welcome to Fran world!");

  /**
   * onHoverCaseStudy
   * 
   * When we hover over a case study, it will
   * switch to animating that GIF.
   */

  function onHoverCaseStudy () {
    let caseStudyNum = $(this).attr('data-cs');
    $(this).css("background-image", `url(assets/gifs/gif${caseStudyNum}.gif)`);
  }

  function onLeaveHoverCaseStudy () {
    let caseStudyNum = $(this).attr('data-cs');
    $(this).css("background-image", `url(assets/static/static${caseStudyNum}.PNG)`);
  }


  $(".case-study-wrapper").hover(onHoverCaseStudy, onLeaveHoverCaseStudy); 

}

// Load
$(document).ready(main)