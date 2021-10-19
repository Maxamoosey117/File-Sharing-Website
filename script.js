var uploaded = undefined;

document.getElementById('fileid').addEventListener('change', function(e) {
  uploaded = e.target.files[0];
  console.log(e.target.files[0]);
});



document.getElementById('shareButton').addEventListener('click', function(e) {
  console.log(uploaded);
  var date = new Date();
  console.log(date);
  const formData = new FormData();
  formData.append("file", uploaded);
  formData.append("maxDownloads", 1);
  formData.append("autoDelete", true);

  fetch('https://file.io', {
      method: 'POST',
      body: formData
    })
    .then(function(response) {
      console.log(response);
      return response.json();
    }).then(function(json) {

      let results = "";
      results += "<a target=\"_blank\" href=\"" + json.link +"\">"+json.link+"</a>";

      document.getElementById("createdLink").innerHTML = results;
    })


});
