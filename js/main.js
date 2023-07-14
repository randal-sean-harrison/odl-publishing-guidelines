$(function () {


    $("#page-header").load("header.html", function () {
      console.log("Header loaded");
   });
   
   $("#page-footer").load("footer.html", function () {
      console.log("Footer loaded");

     // Add the current year to copyright

      const thisYear = new Date().getFullYear();
    $("#copyright-year").text(thisYear);
   });

});
