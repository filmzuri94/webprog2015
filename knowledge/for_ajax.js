$(document).ready(function(){
	$("#searchButton").click(function(){

		var service_url = 'https://kgsearch.googleapis.com/v1/entities:search';
  		var params = {
  			'query': $("#searchBox").val(),
  			'limit': 20,
  			'indent': true,
  			'key' : 'AIzaSyChKkBnvf1YuwlKIZEh2VHEHq1NdUey4Vg',
  		};

      var node = document.getElementById("resultFrame");
      while (node.firstChild) {
          node.removeChild(node.firstChild);
      }

  		$.getJSON(service_url + '?callback=?', params, function(response) {
  			$.each(response.itemListElement, function(i, element) {
  				
  				var name = element['result']['name'];
  				var ref = element['result']['detailedDescription']['url'];
  				var imgsrc = element['result']['image']['contentUrl'];
  				var content = element['result']['detailedDescription']['articleBody'];
  				// console.log(name);
          if(name.length>=20){
            name = name.substring(0,20)+'...';
          }

          var $box = $("<div>",{id:'resultBox'+i, class:'resultBox',href:ref});
          var $img = $("<img>",{id:'resultImg'+i, class:'resultImg',src:imgsrc});
          var $topic = $("<div>",{id:'resultName'+i, class:'resultName',text:name});
          var $desc = $("<div>",{id:'resultDesc'+i, class:'resultDesc',text: content.substring(0,50)+'\t ...'});

          $box.click(function(){
              if(ref != "") location.assign(ref)
           });

          $("#resultFrame").append($box);
          $("#resultBox"+i).append($img);
          $("#resultBox"+i).append($topic);
          $("#resultBox"+i).append($desc);


  			});
  		});
  	});
});
