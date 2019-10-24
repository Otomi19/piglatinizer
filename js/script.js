$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.

    $("#button").click(function(){
    var inputText = $(".input").val();
        // console.log('test')
       // alert("hello")
      console.log(inputText.charAt(0));
      var vowels=["a","e","i","o","u"];
    var firstCharIndex= vowels.indexOf(inputText.charAt(0));
    //first character is a consonat
    if(firstCharIndex==-1){
    $(".output").text()
    }
    // first character is a vowel
    else{
     $(".output").text(inputText+"ay");
    }
  });
});
