let queryOperator = "author:( ";
let closingBracket = ")"

document.querySelector('#buttonOne').addEventListener("click", function(e) {
  e.preventDefault();
  let dataToUse = document.querySelector('#data').value;
  let checkData = dataToUse.search("twitter handle")

  if (checkData === 0) {
      dataToUse = dataToUse.substr(15);
      var replaced = dataToUse.split('\n').join(' OR ');
      var split = replaced.match(/.{1,4000}/g)
      split = split.map(i => 'author:(' + i + ")");
      document.querySelector("#convertedData").innerHTML = split[0];

    }
  else {
    var replaced = dataToUse.split('\n').join(' OR ');
    var replaced = dataToUse.split('\n').join(' OR ');
    var split = replaced.match(/.{1,4000}/g)
    split = split.map(i => 'author:(' + i + ")");
    document.querySelector("#convertedData").innerHTML = split[0];
    console.log(split)
    var testTextBoxes = document.querySelector("#storingQueries")
    testTextBoxes.innerHTML += ('beforeend',
'<textarea id="convertedDataTwo" class="u-full-width" placeholder="Your query will appear here" id="exampleMessage"></textarea> <div id="buttonForCopy"> <button  data-clipboard-target="#convertedData" class="button-primary">Copy </button>');
   document.querySelector("#convertedDataTwo").innerHTML = split[1]


  }



});

new ClipboardJS('#buttonForCopy');
new ClipboardJS('#buttonForCopyTwo');

//`<div><textarea id="convertedDataTwo" class="u-full-width" placeholder="Your query will appear here" id="exampleMessage">hi</textarea>
  //<button id="buttonForCopyTwo" data-clipboard-target="" class="button-primary">Copy </button> </div>`
