function loadInNextPage(pageObject){
  var sectionContainer = pageObject.pageElement.parentElement; // Gets triggered notebook page wrapper
  var nextSection = sectionContainer.nextElementSibling; // Gets next section of pages

  console.log(nextSection);

  if(nextSection.style.display === 'none') {
    nextSection.style.display = 'block';
    nextSection.classList.toggle('turn');

        // NEXT STEP: Unfold prefolded page
        if(pageObject.oddOrEven == 'Even'){
           var pageChild = nextSection.firstElementChild;
           pageChild.classList.toggle('pre-turn-even');
        }


  } else {
    nextSection.style.display == 'none';
  }
}

/************************
IN PROGRESS
************************/

function closeNextPage(pageNumber, pageArray){
/* Closes next page on reverse so it can be folded open */
var n = pageNumber;

console.log(pageArray);
/* check if page is odd or even  then add new class to page either before or after
   sorry for being too lazy to do it right now - Past Liz */

   var oddOrEven;

   if (pageNumber%2 == 0){      // even pages
     console.log(pageArray[n]);
     pageArray[n].classList.add('pre-turn-even');
     oddOrEven = 'Even';
   } else {                     // odd pages
     n -= 1;
      console.log(pageArray[n]);
      oddOrEven = 'Odd';
   }

   return oddOrEven;
}

/***********************
TURNS CLICKED ON PAGE
***********************/

function turnPage(event){
   var pageArray =  document.getElementsByClassName('page'); // Gets all page elements

   var triggeredCorner = this;
   var elementIndex = event.target.index;

   var pageNumber = elementIndex + 1;
   var oddOrEven = closeNextPage(pageNumber, pageArray); // runs function that closes next page

   console.log(oddOrEven);

  var pageElement = triggeredCorner.parentElement;

  if(pageElement.classList.contains('even')){ // adds transition to turn page
    pageElement.classList.toggle('turn');
  }

  var pageObject = new Object();
      pageObject.pageElement = pageElement;
      pageObject.elementIndex = elementIndex;
      pageObject.pageArray = pageArray;
      pageObject.pageNumber = pageNumber;
      pageObject.oddOrEven = oddOrEven;


  // pageElement.addEventListener('transitionstart', loadInNextPage(pageObject));

  window.setTimeout(function(){loadInNextPage(pageObject)}, 1000);
}


/****** Add click events to page corner elements ****/
var pageCornerElements = document.getElementsByClassName('page-corner');

for (var i = 0; i < pageCornerElements.length; i++){
    pageCornerElements[i].index = i; // sets index number of event
    pageCornerElements[i].addEventListener('click', turnPage);
}
