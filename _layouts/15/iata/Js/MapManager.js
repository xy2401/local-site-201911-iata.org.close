(function(scope)
{scope.IATA=scope.IATA||{};jgn=jQuery.noConflict();scope.IATA.mapFilterManager={selectElement:null,resetButtonElement:null,listMaps:"americas,europe,asiaPacific,africa,northAsia",valRegionsMap:{4:"americas",3:"europe",2:"asiaPacific",1:"africa",5:"northAsia"},selRegion:null,fixed:null,IsMobile:function(){try{document.createEvent("TouchEvent");return true;}
catch(e){return false;}},getRegionByID:function(regionName){for(id in IATA.mapFilterManager.valRegionsMap){if(IATA.mapFilterManager.valRegionsMap[id]==regionName){return id;break;}}
return-1;},highlightRegion:function(event){var _region=jgn(event.currentTarget).data("region");if(IATA.mapFilterManager.selRegion!=_region)jgn("#"+_region+"Map").css("display","block");IATA.mapFilterManager.selRegion=_region;},dimRegion:function(event){var _region=jgn(event.currentTarget).data("region");if(IATA.mapFilterManager.fixed!=_region){jgn("#"+_region+"Map").css("display","none");}
IATA.mapFilterManager.selRegion=null;},setRegion:function(event){var _region=jgn(event.currentTarget).data("region");var _rId=jgn(event.currentTarget).data("regionid");if(IATA.mapFilterManager.fixed!=null&&IATA.mapFilterManager.fixed!=_region){jgn("#"+IATA.mapFilterManager.fixed+"Map").css("display","none");jgn("#"+IATA.mapFilterManager.fixed+"Map").attr("src",jgn("#"+IATA.mapFilterManager.fixed+"Map").attr("src").replace("_s.png",".png"));}
if(IATA.mapFilterManager.fixed!=_region){IATA.mapFilterManager.fixed=_region;if(IATA.mapFilterManager.onRegionSelect!=null){IATA.mapFilterManager.onRegionSelect(_rId);}
if(IATA.mapFilterManager.selectElement!=null){jgn(IATA.mapFilterManager.selectElement).val(IATA.mapFilterManager.getRegionByID(_region));jgn(IATA.mapFilterManager.selectElement).unbind("change");jgn(IATA.mapFilterManager.selectElement).trigger("change");}
jgn("#"+_region+"Map").attr("src",jgn("#"+_region+"Map").attr("src").replace(".png","_s.png"));jgn("#"+_region+"Map").css("display","block");}},setRegionExt:function(_inregionVal){_inregion="";if(_inregionVal>0&&_inregionVal<6){_inregion=IATA.mapFilterManager.valRegionsMap[_inregionVal];}
if(IATA.mapFilterManager.fixed!=null){jgn("#"+IATA.mapFilterManager.fixed+"Map").css("display","none");jgn("#"+IATA.mapFilterManager.fixed+"Map").attr("src",jgn("#"+IATA.mapFilterManager.fixed+"Map").attr("src").replace("_s.png",".png"));}
if(_inregion.length==0){IATA.mapFilterManager.fixed=null;return false};IATA.mapFilterManager.fixed=_inregion;jgn("#"+_inregion+"Map").css("display","block");jgn("#"+_inregion+"Map").attr("src",jgn("#"+_inregion+"Map").attr("src").replace(".png","_s.png"));},resetMap:function(){if(IATA.mapFilterManager.fixed!=null){jgn("#"+IATA.mapFilterManager.fixed+"Map").css("display","none");jgn("#"+IATA.mapFilterManager.fixed+"Map").attr("src",jgn("#"+IATA.mapFilterManager.fixed+"Map").attr("src").replace("_s.png",".png"));}
IATA.mapFilterManager.fixed=null;},attachForm:function(){if(IATA.mapFilterManager.selectElement!=null){jgn(IATA.mapFilterManager.selectElement).change(function(){var _tmp=jgn(IATA.mapFilterManager.selectElement+" option:selected").val();IATA.mapFilterManager.setRegionExt(_tmp);});if(jgn(IATA.mapFilterManager.selectElement).val()>0){IATA.mapFilterManager.setRegionExt(jgn(IATA.mapFilterManager.selectElement).val());}}
if(IATA.mapFilterManager.resetButtonElement!=null){jgn(IATA.mapFilterManager.resetButtonElement).click(function(){IATA.mapFilterManager.resetMap();});}},init:function(){IATA.mapFilterManager.attachForm();jgn.each(jgn("#imageWMap area"),function(i,val){imgId=jgn(val).attr("data-region");if(IATA.mapFilterManager.listMaps.indexOf(imgId)!=-1){if(!IATA.mapFilterManager.IsMobile()){jgn(val).mouseover(IATA.mapFilterManager.highlightRegion);jgn(val).mouseout(IATA.mapFilterManager.dimRegion);}
jgn(val).click(IATA.mapFilterManager.setRegion);jgn(val).on('tap',IATA.mapFilterManager.setRegion);};})}}}(window))