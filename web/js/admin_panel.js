/**
 * Created by Administrateur on 26/07/2017.
 */
$(document).ready(function () {
    $("#role-form").hide();
    $("#credit-form").hide();

    $("#table-users").on('click', 'tr', function () {
        var email = $(this).find("[id='email']");

        $("#role-form").show();

        $("#credit-form").show();

        $("#role-form-title").html(email.html());

        $("#role-credit-title").html(email.html());

        $("#email-hidden").val(email.html());

        $("#emailCredit-hidden").val(email.html());
    });
});