(function(){jgn(document).ready(function(){jgn('.iata-crossLink-action-showmore').click(function(){var guid=jgn(this).attr('data-guid');jgn('.iata-crossLink-entry-hidden').filter('[data-guid="'+guid+'"]').show();jgn('.iata-crossLink-action-showall').filter('[data-guid="'+guid+'"]').show();jgn('.iata-crossLink-action-showless').filter('[data-guid="'+guid+'"]').show();jgn('.iata-crossLink-action-showmore').filter('[data-guid="'+guid+'"]').hide();});jgn('.iata-crossLink-action-showless').click(function(){var guid=jgn(this).attr('data-guid');jgn('.iata-crossLink-entry-hidden').filter('[data-guid="'+guid+'"]').hide();jgn('.iata-crossLink-action-showall').filter('[data-guid="'+guid+'"]').hide();jgn('.iata-crossLink-action-showless').filter('[data-guid="'+guid+'"]').hide();jgn('.iata-crossLink-action-showmore').filter('[data-guid="'+guid+'"]').show();});});})()
var CTP=CTP||{};CTP.IATA=CTP.IATA||{};CTP.IATA.HideChrome=function(guid){}