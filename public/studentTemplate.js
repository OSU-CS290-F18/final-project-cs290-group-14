(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['studentInfo'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"student\">\n <div class=\"student-contents\">\n     <div class=\"student-img-container\">\n    <img class=\"student-photo-img\" src=\""
    + alias4(((helper = (helper = helpers.photo || (depth0 != null ? depth0.photo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"photo","hash":{},"data":data}) : helper)))
    + "\" />\n  </div>\n    <div class=\"student-info-container\">\n              <a href=\"#\" class=\"student name\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + ",</a> <br><span class=\"student-age\">"
    + alias4(((helper = (helper = helpers.age || (depth0 != null ? depth0.age : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"age","hash":{},"data":data}) : helper)))
    + "</span></span> <span href=\"#\" class=\"student-major\">"
    + alias4(((helper = (helper = helpers.major || (depth0 != null ? depth0.major : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"major","hash":{},"data":data}) : helper)))
    + "</span><br/>\n        <br><a href=\"#\" class=\"student-bio\">"
    + alias4(((helper = (helper = helpers.bio || (depth0 != null ? depth0.bio : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bio","hash":{},"data":data}) : helper)))
    + "</a><br/>\n                    </div>\n       <div class=\"pdf-container\">\n   <a href=\""
    + alias4(((helper = (helper = helpers.pdf || (depth0 != null ? depth0.pdf : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pdf","hash":{},"data":data}) : helper)))
    + "\" class=\"resume\">My Resume</a>\n        </div>\n  </div>\n    </div>\n";
},"useData":true});
})();