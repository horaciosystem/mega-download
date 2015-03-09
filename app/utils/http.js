export function request(url, options) {
  var xhr = new XMLHttpRequest();
  var success = options.success;
  var progress = options.progress;
  xhr.open('GET', url, true);
  xhr.responseType = "blob";

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      Ember.run(function() {
        success(xhr);
      });
    }
  };

  xhr.onprogress = function (e) {
    Ember.run(function () {
      progress(e);
    });
  };

  xhr.send(null);
};
