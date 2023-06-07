$(document).ready(function () {
    var btncolor= $('.color button')
    var btnsize=$('.size button')
    var btnup=$('.bt2');
    var btndown=$('.bt1');

    // chọn giữ nguyên màu
    for(var i=0;i<btncolor.length;i++){
        $(btncolor[i]).click(function () { 
            for(var k=0;k<btncolor.length;k++){
                btncolor[k].classList.remove('bactive')
            }
            this.classList.add('bactive');
            $('#txtcolor').text(this.textContent)
        });
    }


    // tang giam so luong
    $(btnup).click(function(){
        var amount=$('.space-left input')[0]
        if(parseInt(amount.value)<100)
            amount.value=parseInt(amount.value)+1;
    })
    $(btndown).click(function(){
        var amount=$('.space-left input')[0]
        if(parseInt(amount.value)>1)
            amount.value=parseInt(amount.value)-1;
    })
});

/////////////tang giam so luong
$(document).ready(function(){
    $(".cong2").click(function(){
        var amount = $(this).prev().attr("value");
        $(this).prev().attr("value",Number(amount)+1);
        $(".tinhtong4").text((Number(amount)+1)* 170000)
    });
    $(".tru2").click(function(){
        var amount=$(this).next().attr("value");
        if(Number(amount)>1)
        $(this).next().attr("value",Number(amount)-1);
        $(".tinhtong4").text((Number(amount)-1) * 170000)
    });
});
$(document).ready(function(){
    $(".cong1").click(function(){
        var amount = $(this).prev().attr("value");// .next(): xác định thành phần cùng cấp ngay kế tiếp thành phần sử dụng .next().
        $(this).prev().attr("value",Number(amount)+1);
        $(".tinhtong4").text((Number(amount)+1)* 250000)
    });
    $(".tru1").click(function(){
        var amount=$(this).next().attr("value");
        if(Number(amount)>1)
        $(this).next().attr("value",Number(amount)-1);
        $(".tinhtong4").text((Number(amount)-1) * 250000)
    });
});
$(document).ready(function(){
    $(".cong3").click(function(){
        var amount = $(this).prev().attr("value");
        $(this).prev().attr("value",Number(amount)+1);
        $(".tinhtong4").text((Number(amount)+1)* 200000)
    });
    $(".tru3").click(function(){
        var amount=$(this).next().attr("value");
        if(Number(amount)>1)
        $(this).next().attr("value",Number(amount)-1);
        $(".tinhtong4").text((Number(amount)-1) * 200000)
    });
});

function xoa1()
{
    document.getElementById('form1').style.display = 'none';
}
function xoa2()
{
    document.getElementById('form2').style.display = 'none';
}
function xoa3()
{
    document.getElementById('form3').style.display = 'none';
}


