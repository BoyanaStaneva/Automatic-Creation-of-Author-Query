let queryOperator = "author:( ";
let closingBracket = ")"

document.querySelector('#buttonOne').addEventListener("click", function(e) {
  e.preventDefault();
  let dataToUse = document.querySelector('#data').value;
  let checkData = dataToUse.search("twitter handle")

  if (checkData === 0) {
      dataToUse = dataToUse.substr(15);
      var replaced = dataToUse.split('\n').join(' OR ');
      var firstQuery = queryOperator.concat(replaced)
      var getQuery = firstQuery.concat(closingBracket)
      document.querySelector("#convertedData").innerHTML = getQuery;

    }
  else {
    var replaced = dataToUse.split('\n').join(' OR ');
    var firstQuery = queryOperator.concat(replaced)
    var getQuery = firstQuery.concat(closingBracket)
    document.querySelector("#convertedData").innerHTML = getQuery;
  }

  var split = replaced.match(/.{1,4000}/g)
  split = split.map(i => 'author:(' + i + ")");

  console.log(split);

});

new ClipboardJS('#buttonForCopy');
