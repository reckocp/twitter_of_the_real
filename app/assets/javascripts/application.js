// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function () {

  if ($("#tweet_message").val().length > 140 || < 2) {
      $("#tweet_submit").prop("disabled", true);
  }

  var checkAndAddNewTweets = function () {
      var user_id = $("#user-id").val(); // the .val() method in js returns the value of an input element.
      if (user_id !== undefined && user_id !== null) {
          var url = "/api/users/" + user_id;
          $.getJSON(url, function (response) {
              $("#tweet-storage").html("");
              $("#tweet-count").html(response.tweets.length);
              response.tweets.forEach(function (tweet) {
                  $("#tweet-storage").append("<p>" + tweet.message + "</p>");
              });
          });
      }
  };

  setInterval(function () {
      checkAndAddNewTweets();
  }, 1000);

  var $newTweet = $("#new_tweet");
  $newTweet.on("ajax:success", function(e, data) {
      $newTweet.append("<p>" + data.message + "</p>");
      $newTweet.find("#tweet_message").val("");
  });
  $newTweet.on("ajax:error", function(e, data) {
      $newTweet.append("<p>" + data.message + "</p>");
  });
};

$(document).ready(ready);
$(document).on("page:load", ready);
