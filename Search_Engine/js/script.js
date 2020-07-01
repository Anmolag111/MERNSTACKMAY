window.addEventListener("load", bindEvent);
function bindEvent() {
    console.log('----------------------');
  document.querySelector("#btn").addEventListener("click", doTask);
 // document.querySelector("#labnol").addEventListener("submit",doTask);
  document.querySelector("#img").addEventListener("click",startDictation);
}
function startDictation() {

    if (window.hasOwnProperty('webkitSpeechRecognition')) {

      var recognition = new webkitSpeechRecognition();

      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.lang = "en-US";
      recognition.start();

      recognition.onresult = function(e) {
        document.getElementById('transcript').value
                                 = e.results[0][0].transcript;
        recognition.stop();
        document.querySelector("#btn").click();
      };

      recognition.onerror = function(e) {
        recognition.stop();
      }

    }
  }
function doTask() {
    console.log('----------------------');
  document.querySelector("#loading").classList.toggle("hide");
  var txt = document.querySelector("#transcript").value;
  console.log(txt);
  var url = `http://api.giphy.com/v1/gifs/search?api_key=DQwT0lOqdQPEpL9ZAvslEYOmf2Hau2qY&q=${txt}&limit=6`;
  var http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    console.log(http.status + " " + http.readyState);
    if (http.status == 200 && http.readyState == 4) {
      document.querySelector("#loading").classList.toggle("hide");
      var obj = JSON.parse(http.responseText);
      console.log(obj);
      printImages(obj);
    } else {
      console.log("not ready");
    }
  };
  http.open("GET", url);
  http.send();
}
function printImages(obj) {
  document.querySelector("#add").innerHTML = "";
  var arr = obj.data;
  arr.forEach((element) => {
    addImages(element.images.original.url);
  });
}
function addImages(url) {
  var image = document.createElement("img");
  image.src = url;
  document.querySelector("#add").appendChild(image);
  image.className = "size";
}
