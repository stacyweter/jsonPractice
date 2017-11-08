var _ = require('lodash');
<script type="text/javascript" src="sample.json"></script>
var info = jQuery.getJSON("sample.json")
 console.log(_.chunk(info, [size=3]));
 

