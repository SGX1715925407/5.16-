$(function () {
    $(function () {
        $.ajax({
            url: '../json/tation2.json',
            success: function (data) {
                // console.log(data.report);
                var list = '';
                for (var i = 0; i < data.report.length; i++) {
                    list += '<div class="play">';
                    list += '<div class="play_div">';
                    list += '<img src="' + data.report[i].img + '" alt="">';
                    list += '<div class="tong">';
                    list += '<h1>' + data.report[i].text + '</h1>';
                    list += '<p>';
                    list += '<span></span>';
                    list += '<span>' + data.report[i].name + '</span>';
                    list += ' <span>' + data.report[i].time + '</span>';
                    list += '</p>';
                    list += '<p>';
                    list += "<i></i>" + data.report[i].num1;
                    list += "<i></i>" + data.report[i].num2;
                    list += '</p>';
                    list += "</div>";
                    list += '</div>';
                    list += '</div>';
                    list += '<div style="clear:both;"></div>';
                    list += '<div class="play_bottom">';
                    list += '<a href="">' + data.report[i].text2 + '</a>';
                    list += '</div>';
                }

                $('.article').html(list);
            }
        })
    });
})