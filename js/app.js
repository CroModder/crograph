$(document).ready(function() {
	$("#error-message").html(" &nbsp;");
     	function isValidEmailAddress(emailAddress) {
    		var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
			return pattern.test(emailAddress);
		};
		$("#send").click(function(){
			var message = $("#message").val();
	     	if (message) {
	     		var email = $("#email").val();
		     	if(!isValidEmailAddress(email)) {
		     		$("#error-message").html("Please enter a valid email address!");
		     	} else {
		     		$("#error-message").html(" &nbsp;");
		     		$(this).prop('disabled', true);
		     		var $el = $("#send");
			     	$.ajax({
			        url: 'contact.php',
			        type: 'post',
			        data: { Email: email, Message: message },
			        success: function(data) {
			            if(data == "success"){
			            	$('#send').removeClass('before-animate');
			            	$("#send").addClass("send-animate");
		     				$("#send-text").addClass("hidden");

						    setTimeout(function () {
						    $el.css("background", "#68ae68");
					        $('#email-icon').removeClass('mdi-email');
			            	$("#email-icon").addClass("mdi-check");
			            	$("#send-info").html("Message sent successfully!");
						    }, 2200);
			        	} else {
						    setTimeout(function () {
						        $el.css("background", "#f44336");
						        $('#email-icon').removeClass('mdi-email');
				            	$("#email-icon").addClass("mdi-close");
				            	$("#send-info").html("Message not sent!");
						    }, 2200);
			        	}
			        },
			        error: function (request, status, error) {
        				$('#send').removeClass('before-animate');
			            $("#send").addClass("send-animate");
		     			$("#send-text").addClass("hidden");

					    setTimeout(function () {
					        $el.css("background", "#f44336");
					        $('#email-icon').removeClass('mdi-email');
			            	$("#email-icon").addClass("mdi-close");
			            	$("#send-info").html("Message not sent!");
					    }, 2200);
        			}
			        });

			    }
	     	} else {
	     		$("#error-message").html("Please enter a message!");
	     	}
		});
});