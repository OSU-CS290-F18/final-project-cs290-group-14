(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['studentInfo'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<section class=\"student-data\">\n    <div class=\"student-info-container\">\n              <a href=\"#\" class=\"student name\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + ",</a> <span class=\"student-age\">"
    + alias4(((helper = (helper = helpers.age || (depth0 != null ? depth0.age : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"age","hash":{},"data":data}) : helper)))
    + "</span></span> <span class=\"student-city\">("
    + alias4(((helper = (helper = helpers.city || (depth0 != null ? depth0.city : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"city","hash":{},"data":data}) : helper)))
    + ")</span>\n            </div>\n       <div class=\"student-major-container\">\n   <a href=\"#\" class=\"student-major\">"
    + alias4(((helper = (helper = helpers.major || (depth0 != null ? depth0.major : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"major","hash":{},"data":data}) : helper)))
    + "</a>\n   </div>\n     <div class=\"img-container\">\n    <img class=\"student-photo-img\" src=\""
    + alias4(((helper = (helper = helpers.photo || (depth0 != null ? depth0.photo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"photo","hash":{},"data":data}) : helper)))
    + "\" />\n  </div>\n</section>";
},"useData":true});
})();