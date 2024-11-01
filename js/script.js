$.ajax({
    url: "https://api.quran.gading.dev/surah",
    type: "get",
    dataType: "json",
    success: function (detail) {
        var htA = "";
        var htB = "";
        var htC = "";
        for (var i = 0; i < 38; i++) {
            var surat_ke = detail['data'][i]['number'];
            var nama_surat = detail['data'][i]['name']['transliteration']['id'];
            var arti_surat = detail['data'][i]['name']['translation']['id'];
            var jumlah_surat = detail['data'][i]['numberOfVerses'];
            var arabic = detail['data'][i]['name']['short'];

            htA+='<a class="d-block link-surat" href="./surah.html?id='+surat_ke+'">';
            htA+='<div class="card mb-2">';
            htA+='<div class="row px-2" style="min-height: 120px;">';
            htA+='<div class="col-2 justify-content-center align-self-center text-center">'+ surat_ke +'</div>';
            htA+='<div class="col-6 justify-content-center align-self-center">'+ 
                nama_surat + ' ('+jumlah_surat+')' + '<br/>' + arti_surat
                +'</div>';
            htA+='<div class="col-4 justify-content-center align-self-center arab text-center">'+ arabic +'</div>';
            htA+='</div>';
            htA+='</div>';
            htA+='</a>';
        }
        for (var i = 38; i < 76; i++) {
            var surat_ke = detail['data'][i]['number'];
            var nama_surat = detail['data'][i]['name']['transliteration']['id'];
            var arti_surat = detail['data'][i]['name']['translation']['id'];
            var jumlah_surat = detail['data'][i]['numberOfVerses'];
            var arabic = detail['data'][i]['name']['short'];

            htB+='<a class="d-block link-surat" href="./surah.html?id='+surat_ke+'">';
            htB+='<div class="card mb-2">';
            htB+='<div class="row px-2" style="min-height: 120px;">';
            htB+='<div class="col-2 justify-content-center align-self-center text-center">'+ surat_ke +'</div>';
            htB+='<div class="col-6 justify-content-center align-self-center">'+ 
                nama_surat + ' ('+jumlah_surat+')' + '<br/>' + arti_surat
                +'</div>';
            htB+='<div class="col-4 justify-content-center align-self-center arab text-center">'+ arabic +'</div>';
            htB+='</div>';
            htB+='</div>';
            htB+='</a>';
        }
        for (var i = 76; i < 114; i++) {
            var surat_ke = detail['data'][i]['number'];
            var nama_surat = detail['data'][i]['name']['transliteration']['id'];
            var arti_surat = detail['data'][i]['name']['translation']['id'];
            var jumlah_surat = detail['data'][i]['numberOfVerses'];
            var arabic = detail['data'][i]['name']['short'];

            htC+='<a class="d-block link-surat" href="./surah.html?id='+surat_ke+'">';
            htC+='<div class="card mb-2">';
            htC+='<div class="row px-2" style="min-height: 120px;">';
            htC+='<div class="col-2 justify-content-center align-self-center text-center">'+ surat_ke +'</div>';
            htC+='<div class="col-6 justify-content-center align-self-center">'+ 
                nama_surat + ' ('+jumlah_surat+')' + '<br/>' + arti_surat
                +'</div>';
            htC+='<div class="col-4 justify-content-center align-self-center arab text-center">'+ arabic +'</div>';
            htC+='</div>';
            htC+='</div>';
            htC+='</a>';
        }
        $(".divA").html(htA);
        $(".divB").html(htB);
        $(".divC").html(htC);
    }
});