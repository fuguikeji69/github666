function detailCheck() {
    $("#hmfbTable>.number_box>ul>li:contains('双')").css("color", "#F8223C"), $("#hmfbTable>.number_box>ul>li:contains('大')").css("color", "#F8223C"), $("#hmfbTable>.number_box>ul>li:contains('红')").css("color", "#F8223C"), $("#hmfbTable>.number_box>ul>li:contains('蓝')").css("color", "#0093E8"), $("#hmfbTable>.number_box>ul>li:contains('绿')").css("color", "#1FC26B"), $("li.hisNum_detail>ul>li>span:contains('红')").css("color", "#F8223C"), $("li.hisNum_detail>ul>li>span:contains('蓝')").css("color", "#0093E8"), $("li.hisNum_detail>ul>li>span:contains('绿')").css("color", "#1FC26B");
    var a = $(".hisNum_detail>ul>li,.temaNum.Seven"),
        t = $(".opacity"),
        e = $(".xztj>div>ul>li.active");
    if (0 == t.length && 0 == e.length) return $(".hisNum_detail>ul>li,.temaNum.Seven").css("opacity", "1"), !1;
    0 == t.length && e.length;
    for (l = 0; l < a.length; l++) 1 == a[l].classList.contains("opacity") ? a[l].style.opacity = "1" : a[l].style.opacity = "0.1";
    var s = $(".xztj>div li.active").find("a").text(),
        i = $(".opacity");
    0 == s.length && 0 == i.length ? $(".hisNum_detail>ul>li,.Seven").css("opacity", "1") : 0 == s.length && 0 != i.length && $(".opacity").css("opacity", "1"), 0 == i.length && (i = $(".hisNum_detail>ul>li,.Seven"));
    for (var l = 0; l < i.length; l++)
        for (var n = 0; n < s.length; n++) {
            if (i[l].getAttribute("data-text") == s[n]) {
                i[l].style.opacity = "1";
                break
            }
            i[l].style.opacity = "0.1"
        }
    e = $(".xztj>div>ul>li.active")
}

function yearsFun(a, t) {
    1 == a ? attrArr = proto.Zoo : 2 == a ? attrArr = proto.fiveLineArr : 3 == a ? attrArr = proto.jiaqzs : 4 == a ? attrArr = proto.boy_girl : 5 == a ? attrArr = proto.top_bottom : 6 == a ? attrArr = proto.four_season : 7 == a ? attrArr = proto.cqsh : 8 == a && (attrArr = proto.colorCh), $.ajax({
        type: "post",
        url: url.config140 + "findSmallSixHistory.do",
        data: {
            year: t,
            type: a
        },
        dataType: "json",
        success: function(a) {
            $(".box-title").siblings().remove();
            var t = "";
            "" != a.result.data && ($.each(a.result.data.bodyList, function(a, e) {
                for (var s = [], i = [], l = e.preDrawCode.split(","), n = 0; n < e.color.length; n++) s.push(proto.colorEng[e.color[n]]), i.push(attrArr[e.czAndFe[n]]);
                if (0 == e.seventhSingleDouble ? e.seventhSingleDouble = "单" : 1 == e.seventhSingleDouble ? e.seventhSingleDouble = "双" : e.seventhSingleDouble = "和", 0 == e.seventhBigSmall ? e.seventhBigSmall = "大" : 1 == e.seventhBigSmall ? e.seventhBigSmall = "小" : e.seventhBigSmall = "和", 0 == e.totalBigSmall ? e.totalBigSmall = "大" : 1 == e.totalBigSmall ? e.totalBigSmall = "小" : e.totalBigSmall = "和", 0 == e.totalSingleDouble ? e.totalSingleDouble = "单" : 1 == e.totalSingleDouble && (e.totalSingleDouble = "双"), $(".aone").hasClass("active")) o = "opacity";
                else var o = "";
                if ($(".atwo").hasClass("active")) r = "opacity";
                else var r = "";
                if ($(".athree").hasClass("active")) c = "opacity";
                else var c = "";
                if ($(".afour").hasClass("active")) h = "opacity";
                else var h = "";
                if ($(".afive").hasClass("active")) u = "opacity";
                else var u = "";
                if ($(".asix").hasClass("active")) p = "opacity";
                else var p = "";
                if ($(".aseven").hasClass("active")) v = "opacity";
                else var v = "";
                l[0] < 10 && (l[0] = "0" + l[0]), l[1] < 10 && (l[1] = "0" + l[1]), l[2] < 10 && (l[2] = "0" + l[2]), l[3] < 10 && (l[3] = "0" + l[3]), l[4] < 10 && (l[4] = "0" + l[4]), l[5] < 10 && (l[5] = "0" + l[5]), l[6] < 10 && (l[6] = "0" + l[6]), 0 == e.nanairo ? e.nanairo = "红" : 1 == e.nanairo ? e.nanairo = "绿" : 2 == e.nanairo ? e.nanairo = "蓝" : 3 == e.nanairo && (e.nanairo = "和局"), 0 == e.seventhSingleDouble ? e.seventhSingleDouble = "单" : 1 == e.seventhSingleDouble ? e.seventhSingleDouble = "双" : 2 == e.seventhSingleDouble && (e.seventhSingleDouble = "和"), 0 == e.seventhCompositeDouble ? e.seventhCompositeDouble = "合单" : 1 == e.seventhCompositeDouble ? e.seventhCompositeDouble = "合双" : 2 == e.seventhCompositeDouble && (e.seventhCompositeDouble = "和"), 0 == e.seventhCompositeBig ? e.seventhCompositeBig = "合大" : 1 == e.seventhCompositeBig ? e.seventhCompositeBig = "合小" : 2 == e.seventhCompositeBig && (e.seventhCompositeBig = "和"), 0 == e.seventhMantissaBig ? e.seventhMantissaBig = "尾大" : 1 == e.seventhMantissaBig ? e.seventhMantissaBig = "尾小" : 2 == e.seventhMantissaBig && (e.seventhMantissaBig = "和"), t += "<div class='hisNUm_box number_box'><ul><li class='Time_box'><span>" + e.preDrawDate + "</span><span>" + e.issue + "期</span></li><li class='hisNum_detail'><ul><li class='One " + o + "'data-text='" + i[0] + "'><span class='" + s[0] + "'>" + l[0] + "</span> <span>" + i[0] + "</span></li><li class='Two " + r + "'data-text='" + i[1] + "'><span class='" + s[1] + "'>" + l[1] + "</span> <span>" + i[1] + "</span></li><li class='Three " + c + "'data-text='" + i[2] + "'><span class='" + s[2] + "'>" + l[2] + "</span> <span>" + i[2] + "</span></li><li class='Four " + h + "'data-text='" + i[3] + "'><span class='" + s[3] + "'>" + l[3] + "</span> <span>" + i[3] + "</span></li><li class='Five " + u + "'data-text='" + i[4] + "'><span class='" + s[4] + "'>" + l[4] + "</span> <span>" + i[4] + "</span></li><li class='Six " + p + "'data-text='" + i[5] + "'><span class='" + s[5] + "'>" + l[5] + "</span> <span>" + i[5] + "</span></li></ul></li><li class='temaNum Seven " + v + "'data-text='" + i[6] + "'><span class='" + s[6] + "'>" + l[6] + "</span> <span>" + i[6] + "</span></li><li class='Daxia_dansh dansh_ '>" + e.sumTotal + "</li><li class='Daxia_dansh'>" + e.totalSingleDouble + "</li><li class='Daxia_dansh'>" + e.totalBigSmall + "</li><li class='Daxia_dansh'>" + e.nanairo + "</li><li class='Daxia_dansh'>" + e.seventhSingleDouble + "</li><li class='Daxia_dansh'>" + e.seventhBigSmall + "</li><li class='Daxia_dansh'>" + e.seventhCompositeDouble + "</li><li class='Daxia_dansh'>" + e.seventhCompositeBig + "</li><li class='Daxia_dansh'>" + e.seventhMantissaBig + "</li></ul></div>"
            }), $(".box-title").after(t), detailCheck())
        }
    })
}

function getabm(a) {
    a = a || "", $.ajax({
        type: "post",
        url: url.config140_2 + "alternatePicture/findByRecently.do",
        data: {
            year: a
        },
        dataType: "json",
        success: function(a) {
            var t = a.result.data;
            $.each(t, function(a, t) {
                0 == t.type ? (zoo_Aimg = t.image, $("#add_ABimg img").attr("src", url.photoUrl + zoo_Aimg)) : zoo_Bimg = t.image
            })
        },
        error: function() {}
    })
}
$(".xzhm>li:not(title)").click(function() {
    var a = $(this).toggleClass("active").find("a").attr("href").replace("#zhma", "");
    $("." + a).toggleClass("opacity"), detailCheck()
}), $(".ckmbt").click(function() {
    $("body,html").animate({
        scrollTop: $("#ABimg_box").offset().top
    }, 500)
}), $(function() {
    $.ajax({
        type: "get",
        url: url.config140 + "findPreDrawYearAll.do?",
        dataType: "json",
        async: !1,
        success: function(a) {
            yearArr = a.result.data;
            for (var t = "", e = 0; e < yearArr.length; e++) t += "<li>" + yearArr[e] + "</li>";
            $(".years_list").html(t), $(".years_list>li:first-child").addClass("active")
        }
    })
}), $(".xzsx>li:not(title)").click(function(a) {
    a.preventDefault(), $(this).find("a").addClass("checked").parent().siblings().find("a").removeClass("checked");
    var t = $(this).find("a").attr("href").replace("#", "");
    $("." + t).css("display", "block").siblings("div").css("display", "none")
}), $(".xztj>div li").click(function() {
    $(this).toggleClass("active"), detailCheck()
}), $(".xztj>div li>input").click(function() {
    $(this).parent().siblings().removeClass("active")
}), $(".years_list").on("click", "li", function() {
    $(this).addClass("active").siblings().removeClass("active");
    var a = $(this).text();
    $(".listhead>span").text(a + "年开奖记录");
    yearsFun(0 != $(".xzsx>li .checked").length ? $(".xzsx>li>.checked").parent().attr("lang") : 1, a), getabm(a)
}), $(".xzsx>li:not(title)").click(function() {
    var a = $(this).attr("lang"),
        t = $(".years_list>li.active").text();
    $(".xztj>div>ul .active").removeClass("active"), yearsFun(a, t)
}), $(function() {
    var a = $(".years_list>li.active").text();
    $(".listhead>span").text(a + "年开奖记录"), yearsFun(1, a)
});
var zoo_Aimg, zoo_Bimg;
$(function() {
    getabm()
}), $("#ABimg_btn").on("click", "button", function() {
    $(this).addClass("active").siblings().removeClass(), "A" == $(this).attr("data-text") ? $("#add_ABimg img").attr("src", url.photoUrl + zoo_Aimg) : $("#add_ABimg img").attr("src", url.photoUrl + zoo_Bimg)
});