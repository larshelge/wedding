
var mi = {};

mi.recipients = {
	"ci": "Cecilia og Ingemar",
	"tl": "Therese og Linus",
	"km": "Kristina og Martin",
	"ka": "Kristin og Martin",
	"la": "Lina og André",
	"sg": "Sanna og Gustav",
	"li": "Lisa",
	"kl": "Karin og Leif",
	"kj": "Kristin og Jan Henrik",
	"ts": "Trine og Sigbjørn",
	"ac": "Anne og Christoffer",
	"cj": "Cathinka og Jan Tore",
	"np": "Nina og Per",
	"st": "Sarah og Tom",
	"vm": "Velaug og Markus",
	"ap": "Anneli og Philip"
};

$(document).ready(function() {
	mi.setRecipient();
});

mi.setRecipient = function() {
	var $url = $.url(),
		r = $url.param( "r" ),
		recipient = mi.recipients[r];

	if (!r || !recipient) {
		window.location.href = "index.html";
	}
	
	$("#recipient").html(recipient);
}
