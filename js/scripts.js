function translate(words) {
  var result = words.map(function(word) {
    var s = word.search(/[aeiuo]/);
    if (s === 0) {
     return word+"way";
   } else if (s === -1) {
     return word;
    } else {
     return word.substr(s)+word.substr(0,1)+word.substring(1,s)+"ay";
    }
  });
  return result.join(" ");
};

$(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var words = $("#sentance_input").val().split(" ");
    var result = translate(words);
    $(".translated_sentance").text(result);
  });
});
