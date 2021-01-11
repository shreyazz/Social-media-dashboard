$(document).ready(function () {
  $(".span_for_dark").on("click", () => {
    $("body").toggleClass("dark");
    $(".round").toggleClass("toggle_round");
    $(".span_for_dark").toggleClass("span_for_dark_toggle");
    $(".bg_pattern").toggleClass("bg_pattern_toggle");
    $(".heading").toggleClass("heading_toggle");
    $(".item1, .item2 , .item3 , .item4").toggleClass("item_toggle");
    $(".overview").toggleClass("overview_toggle");
    $(".box1, .box2, .box3, .box4, .box5, .box6, .box7, .box8").toggleClass(
      "box_toggle"
    );
    $("h1").toggleClass("h1_toggle");
    $(
      ".box1_num , .box2_num , .box3_num , .box3_num , .box4_num , .box5_num , .box6_num , .box7_num , .box8_num"
    ).toggleClass("box_num_toggle");
    $(".dark_label").text($(".dark_label").text() == 'Light Mode' ? 'Dark Mode' : 'Light Mode');
  });
});
