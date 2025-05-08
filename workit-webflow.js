// Phone mask
$(document).ready(
	function() {
		$(".text-field-3").mask("+38 (000) 000-00-00");
	})

// Form utm grabber
var queryString = window.location.search;
  // console.log(queryString);
  // ?utm_source=facebook&utm_medium=post&utm_campaign=webflow
  var URLSearchParams_wb = new URLSearchParams(queryString);

  const utmParameters = [
  	"utm_source",
	"utm_medium",
	"utm_content",
    "utm_term", 
    "utm_campaign"
  ];

  for (const utm_element of utmParameters) {
    /* if utm_source exist */
    $( "form" ).each(function( index ) {
      if(URLSearchParams_wb.has(utm_element)){
        console.log(utm_element + "is exist");
        /* get UTM value of this utm param */
        var value = URLSearchParams_wb.get(utm_element)
        /* change form hidden feild to this utm url value */
        $( this ).find("."+utm_element).val(value);
      }
    })
  }/* end for loop */

// Binotel widget
(function(d, w, s) {
var widgetHash = 'n1b83fk4lofqabbj1hj4', gcw = d.createElement(s); gcw.type = 'text/javascript'; gcw.async = true;
gcw.src = '//widgets.binotel.com/getcall/widgets/'+ widgetHash +'.js';
var sn = d.getElementsByTagName(s)[0]; sn.parentNode.insertBefore(gcw, sn);
})(document, window, 'script');