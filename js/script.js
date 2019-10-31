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
     $(".output").text( inputText.slice(1) + inputText.charAt(0) + 'ay' )
    $(".input").val("");
    $("body").css("background-color","blue");
    $(".output").css("color","#a5e6ae");
    $(".image").attr("src","https://i.chzbgr.com/full/890491648/h88A8034A/i-was-vowel-but-now-i-consonant");
    }

    // first character is a vowel
    else{
     $(".output").text(inputText+"ay");
      $(".input").val("");
    $("body").css("background-color","orange");
    $(".output").css("color","#d98f07");
    $(".image").attr("src","https://meme.xyz/uploads/posts/t/l-42673-hey-derpa-hey-i-love-u-really-yeah-its-my-favorite-vowel.jpg")
    }
  });
});
