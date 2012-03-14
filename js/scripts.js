
 /*
    *  How to create a search box that automatically searches as the user types.
    */
    
    google.load('search', '1');
    
    var timerId;
    var input;
    var lastSearch = 0;
    var contentDiv;
    
    function search_google(query) {
		query = $("#tags").val();
      lastSearch++;
      webSearch = new google.search.WebSearch();
      webSearch.setSearchCompleteCallback(this, searchComplete, [webSearch, lastSearch]);
	  webSearch.setResultSetSize(google.search.Search.LARGE_RESULTSET);
      webSearch.execute(query);
    }
    
    function autoSearch(query) {
      // we're in the event's scope, that means this keyword = the input box.
    //  var query = this.value;
    
      // clear timer if there is one, set a new timer to do a search
      if (timerId) {
        window.clearTimeout(timerId);
        timerId = null;
      }
      timerId = window.setTimeout('search(\'' + query + '\')', 250);
    
    }
    
    function searchComplete(searcher, searchNum) {
      // Only display results if this search was the last one done.
      if (searchNum == lastSearch) {
        // clear last search if it exists
        var lastResults = document.getElementById('results');
        if (lastResults) {
          lastResults.parentNode.removeChild(lastResults);
        }
    
        var results = searcher.results;
        var newResultsDiv = document.createElement('div');
        newResultsDiv.id = 'results';
		res.length = 0;
        for (var i = 0; i < results.length; i++) {
          var result = results[i];
          var resultHTML = '<a href="' + result.unescapedUrl + '" target="_blank">' +
                            result.content +
                            '</a><br/><br/>';
							img_src = "http://www.getfavicon.org/?url=" + get_hostname_from_url(result.unescapedUrl) +"/favicon.png";
							img_src = "http://g.etfv.co/http://" + get_hostname_from_url(result.unescapedUrl) + '??defaulticon=http://simplego.co/images/globe.png' ;
						rnd = Math.random();
						url1= result.unescapedUrl;
						url1 = str_replace("http://www.","",url1);
						url1 = str_replace("https://www.","",url1);
						url1 = str_replace("http://","",url1);
						url1 = str_replace("https://","",url1);
						title = "<span id='a" + rnd + "'></span>";
arr = {"value": result.unescapedUrl, "label": '<img border="0" src="' + img_src + '" align="absmiddle" width="25" height="25" class="img_css"> ' + url1 + ' - ' + title + '<div style=\"display:none;\">' + $('#tags').val() + '</div>'};
				res.push(arr);
				
				$.ajax({
  url: "show_title.php",
  type:"POST",
  data: "url=" + (result.unescapedUrl) + "&seed=" + rnd + "&text=" + result.content,
  context: document.body,
  success: function(html){
	  arr = html.split("@#$");
	  try{
		 // alert(arr[1]);
		// arr[1] =  str_replace("Incompatible Browser |","",arr[1]);
   document.getElementById("a" + arr[0]).innerHTML = arr[1];
	  }catch(err){}
  }
});
        }
		search_complete();
      }
    }
   function str_replace (search, replace, subject, count) {

        j = 0,
        temp = '',
        repl = '',
        sl = 0,        fl = 0,
        f = [].concat(search),
        r = [].concat(replace),
        s = subject,
        ra = Object.prototype.toString.call(r) === '[object Array]',        sa = Object.prototype.toString.call(s) === '[object Array]';
    s = [].concat(s);
    if (count) {
        this.window[count] = 0;
    } 
    for (i = 0, sl = s.length; i < sl; i++) {
        if (s[i] === '') {
            continue;
        }        for (j = 0, fl = f.length; j < fl; j++) {
            temp = s[i] + '';
            repl = ra ? (r[j] !== undefined ? r[j] : '') : r[0];
            s[i] = (temp).split(f[j]).join(repl);
            if (count && s[i] !== temp) {                this.window[count] += (temp.length - s[i].length) / f[j].length;
            }
        }
    }
    return sa ? s : s[0];
}
	 
  function get_hostname_from_url(url) {
    return url.match(/:\/\/(.[^/]+)/)[1];
}





last_query = ""
$(document).ready(function() {
$(function() {
		var availableTags = [];
		$( "#tags" ).autocomplete({
			source: availableTags,
			 search: function(event, ui) { 
			if (last_kw != $("#tags").val())
			{
			last_kw = $("#tags").val();
			search_now();
			}
			  event.stopPropagation();
			  },
	focus: function(event, ui) { 
	  event.preventDefault();
	},
	select: function(event, ui) {
	$("#tags").val("");
	window.open(ui.item.value);
	
	 event.preventDefault();
	//$("#tags").val("");
	 },
	selectFirst: true,
	open: function () {
		
		$(".ui-autocomplete li:first a").addClass("ui-state-hover");
$(".ui-autocomplete li:first a").attr('id', 'ui-active-menuitem');
		}
		});
		$("#tags").focus();
	});
	
	
$(document).keypress(function(e,ui) {
    if(e.keyCode == 13 && $(".ui-autocomplete li:first a").hasClass("ui-state-hover")) {
      
	  String.prototype.trim = function() { return this.replace(/^\s+|\s+$/g,"");}
	
	   var ax = $(".ui-autocomplete li:first a").text();
	  var  net = ax.split(" -");
	  var ur = "http://www."+net[0].trim();
	  $("#tags").val("");
	   window.open(ur);
    }
});


});
res = Array();
last_kw = "";
function search_complete()
{
//result.length = 0;
	$( "#tags" ).autocomplete({ source: res});
	$( "#tags" ).autocomplete("search");



}

function search_now()
{
		search_google();
}



// Social lInks //

//facebook
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

//google plus
(function() {
  var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
  po.src = 'https://apis.google.com/js/plusone.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();