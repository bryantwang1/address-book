//business logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.addresses = [];
}
function Address(street, city, state) {
    this.street = street;
    this.city = city;
    this.state = state;
}
Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

// user interface logic
$(document).ready(function() {
  $("#add-address").click(function() {
    $("#new-addresses").append("<div class=\"new-address\">" +
                                "<div class=\"form-group\">" +
                                  "<label for=\"new-street\">Street</label>" +
                                  "<input type=\"text\" class=\"form-control new-street\">" +
                                "</div>" +
                                "<div class=\"form-group\">" +
                                  "<label for=\"new-street\">Street</label>" +
                                  "<input type=\"text\" class=\"form-control new-street\">" +
                                "</div>" +
                                "<div class=\"form-group\">" +
                                  "<label for=\"new-street\">Street</label>" +
                                  "<input type=\"text\" class=\"form-control new-street\">" +
                                "</div>" +
                              "</div>");
  });

  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName);
    });

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      });
    });

  });
});
