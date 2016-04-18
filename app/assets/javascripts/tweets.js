$(document).ready(function () {
  $("#new_message").on("keyup focus", function () {
      var input_val = $(this).val();
      var parent = $(this).parent();

      if (input_val.trim().length < 2 || .length > 140) {
          parent.addClass("field_with_warnings");
          parent.find(".error-message").html("You tweet needs to be between 2 and 140 characters.");
      } else {
          parent.removeClass("field_with_warnings");
          parent.find(".error-message").html("You're good to go.");
      }
  });
});
