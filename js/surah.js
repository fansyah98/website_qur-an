let data = new URLSearchParams(window.location.search);
let datax = data.get("id")
if(datax==1){
    $.ajax({
    url: 'https://api.quran.gading.dev/surah/'+datax,
    type: "get",
    dataType: "json",
    success: function (detail) {
        var htA = "";
        var htTitle = "";
            var surat_ke = detail['data']['number'];
            var nama_surat_arab = detail['data']['name']['short'];
            var nama_surat = detail['data']['name']['transliteration']['id'];
            var arti_surat = detail['data']['name']['translation']['id'];
            var jumlah_surat = detail['data']['numberOfVerses'];
            var basmallah = detail['data']['verses'][0]['text']['arab'];
            var jumlah_ayat = detail['data']['verses']['length'];

            htTitle+='<div class="mx-2 justify-content-center text-center">'+ nama_surat + ' (' + arti_surat + ')' +'</div>';
            for(var i=0; i < jumlah_ayat; i++){
                var ayat = detail['data']['verses'][i]['text']['arab'];
                var ayat_text = detail['data']['verses'][i]['text']['transliteration']['en'];
                var arti_ayat = detail['data']['verses'][i]['translation']['id'];
                htA+='<div class="mb-2">';
                htA+='<div class="col justify-content-center text-end"><div class="arab" lang="ar" style="font-size:25px;" >'+
                    ayat +'</div></div>';
                htA+='<div class="col justify-content-center text-start px-3 mb-2">'+ ayat_text +'</div>';
                htA+='<div class="col justify-content-center text-start px-3 mb-2"><cite>'+'"'+ arti_ayat + '"' +'</cite></div>';
                htA+='</div>';
                htA+='<hr class="bg-light border-1 border-top border-dark">';
            }
        $(".nama-surat").html(htTitle);
        $(".detail-surat").html(htA);
    }
    });
}else{
    $.ajax({
    url: 'https://api.quran.gading.dev/surah/'+datax,
    type: "get",
    dataType: "json",
    success: function (detail) {
        var htA = "";
        var htTitle = "";
            var surat_ke = detail['data']['number'];
            var nama_surat = detail['data']['name']['transliteration']['id'];
            var arti_surat = detail['data']['name']['translation']['id'];
            var jumlah_surat = detail['data']['numberOfVerses'];
            if(datax==9){
                var basmallah = "";
            }else{
                var basmallah = detail['data']['preBismillah']['text']['arab'];
            }
            var jumlah_ayat = detail['data']['verses']['length'];
            
            htTitle+='<div class="mx-2 justify-content-center text-center">'+ nama_surat + ' (' + arti_surat + ')' +'</div>';

            htA+='<div class="mb-2">';
            htA+='<div class="col justify-content-center text-center"><div class="arab" lang="ar" style="line-height:60px;font-size:30px;">'
                + 
                basmallah
                +'</div></div>';
            htA+='</div>';
            for(var i=0; i < jumlah_ayat; i++){
                var ayat = detail['data']['verses'][i]['text']['arab'];
                var ayat_text = detail['data']['verses'][i]['text']['transliteration']['en'];
                var arti_ayat = detail['data']['verses'][i]['translation']['id'];
                htA+='<div class="mb-2">';
                htA+='<div class="col justify-content-center text-end"><div class="arab" lang="ar" style="line-height:60px;font-size:25px;" >'+ ayat +'</div></div>';
                htA+='<div class="col justify-content-center text-start px-3 mb-2 fw-bold">'+ ayat_text +'</div>';
                htA+='<div class="col justify-content-center text-start px-3 mb-2"><cite>'+'"'+ arti_ayat + '"' +'</cite></div>';
                htA+='</div>';
                htA+='<hr class="bg-light border-1 border-top border-dark">';
            }
        $(".nama-surat").html(htTitle);
        $(".detail-surat").html(htA);
    }
    });
}
