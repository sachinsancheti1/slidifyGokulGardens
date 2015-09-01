var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.7.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

/*<script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.7.min.js"></script>*/
$(function() {
    $("p:has(img)").addClass('centered');
    $("p:has(em)").addClass('centered');
});