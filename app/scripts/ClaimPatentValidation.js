 /// <reference path="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.16.0/jquery.validate.min.js" />


$(document).ready(function() {




  /***********CUSTOMISED VALIDATION METHOD THROUGH **************************/

  $.validator.addMethod("match_us_pub_no", function(value, element) {
    return this.optional(element) || /^([U,S]{2}|[ ]{0})-(19|20)\d{2}-\d{7}-(([a-zA-Z]{1}\d{1})|([a-zA-Z]{2}))$|^([U,S]{2}|[ ]{0})(19|20)\d{2}\d{7}(([a-zA-Z]{1}\d{1})|([a-zA-Z]{2}))$/i.test(value);
  }, "Please enter a valid US publication number.");

  $.validator.addMethod("match_patent_no", function(value, element) {
    return this.optional(element) || /^[1-9][0-9]*$/i.test(value);
  }, "US Patent number should not include white spaces or leading zeros");

  /***********END CUSTOMISED VALIDATION METHOD**************************/

  $("#validateForm").validate({
    rules: {
      //This section we need to place our custom rule for the control.  
      txt_app_no: {
        required: true,
        minlength: 8,
        digits: true
      },

      txt_us_pt_no: {
        required: true,
        minlength: 6,
        match_patent_no: true,
        maxlength: 7
      },

      txt_flng_date: {
        required: true,
        date: true
      },

      txt_us_pub_no: {
        required: true,
        match_us_pub_no: true
      },

      txt_frst_nm_invntr: {
        required: true,
        maxlength: 100,
        minlength: 2
      },

      txt_art_unit: {
        required: true,
        maxlength: 100,
        minlength: 3
      },

      txt_ex_nm: {
        required: true,
        maxlength: 100,
        minlength: 2
      },

      txt_att_doc_nm: {
        required: true,
        maxlength: 100,
        minlength: 2
      },

      txt_npl: {
        maxlength: 100,
      },

      txt_frgn_pt_no: {
        maxlength: 100,
      }

    },
    messages: {
      //This section we need to place our custom validation message for each control.  
      txt_app_no: {
        required: "Name is required.",
        minlength: "Application Number must consist of at least 8 digit."
      },

      txt_us_pt_no: {
        required: "US Patent number is required.",
        minlength: "US Patent number must consist minimum 6 digits.",
        maxlength: "US Patent number can't be more than of 7 digits."
      },

      txt_flng_date: {
        required: "Filing date is required.",
        date: "Filing date should be in proper format (yyyy/MM/dd)."
      },

      txt_us_pub_no: {
        required: "Publication Number is required.",
        match_us_pub_no: "Publication number must have a four digit year, then a 7 digits number and 2 characters at the last. With or Without US prefix."
      },

      txt_frst_nm_invntr: {
        required: "First Inventor Name is required field.",
        maxlength: "Maximum length of Inventor Name should be 100 character.",
        minlength: "Minimum length of Inventor Name should be 2 character."
      },

      txt_art_unit: {
        required: "Art Unit is required field.",
        maxlength: "Maximum length of Art Unit should be 100 character.",
        minlength: "Minimum length of Art Unit should be 3 character."
      },

      txt_ex_nm: {
        required: "Examiner Name is required field.",
        maxlength: "Maximum length of Examiner Name should be 100 character.",
        minlength: "Minimum length of Examiner Name should be 2 character."
      },

      txt_att_doc_nm: {
        required: "Attorney Docket Number is required field.",
        maxlength: "Maximum length of Attorney Docket Number should be 100 character.",
        minlength: "Minimum length of Attorney Docket Number should be 2 character."
      },

      txt_npl: {
        maxlength: "Maximum length of NPL should be 100 character.",
      },

      txt_frgn_pt_no: {
        maxlength: "Maximum length of Foreign Patent Number should be 100 character.",
      },

    }
  });

});