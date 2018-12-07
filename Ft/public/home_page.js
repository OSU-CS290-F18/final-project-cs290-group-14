(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return " <main class=\"home-page\">\n    <div class = \"home-page-container\">\n      <aside class = \"search-bar\">\n        <h2>Find Someone</h2>\n        <div class = \"search\">\n          <label for = \"search-text\" class = \"search-label\">Name</label>\n          <input type = \"text\" name = \"search-text\" id = \"search-text\">\n        </div>\n      </aside>\n      <div class = \"link-note\">\n        <button id= \"resume-button\" class = \"page-change-button\">Add a resume</button>\n      </div>\n      <div class = \"link-note\">\n        <button id= \"job-post-button\" class = \"page-change-button\">Create a job Posting</button>\n      </div>\n    </div>\n  </div>\n  </main>";
},"useData":true});
})();