function getExp() {
    $('#flag').html("");
      $.get("./api/getExp.php",{},function (e) {
          $('#flag').prepend(e);
          $(".Exptr").hide();
            $(".Exptr").each(function(i,v){
            if(i<1){
                $(v).show()
            }
        })
      })
      
}
function getArt() {
    $('#flag').html("");
    $.get("./api/getAArt.php",{},function (e) {
        $('#flag').prepend(e);
        $(".ArtSize").hide();
        $(".ArtSize").each(function(i,v){
            if(i<3){
                $(v).show()
            }
        })
    })
}
function getBArt() {
    $('#flag').html("");
      $.get("./api/getBArt.php",{},function (e) {
          $('#flag').prepend(e);
          $(".Arttr").hide();
            $(".Arttr").each(function(i,v){
            if(i<4){
                $(v).show()
            }
        })
      })
      
}
function addArt() {
      let photo = document.querySelector("#File-input");
      if(photo.files && photo.files[0] && $('#title').val() && $('#text').val() && $('#linkArt').val()){
       let file_data = $('#File-input').prop('files')[0];
       let form_data = new FormData();
          form_data.append('file', file_data);   
          form_data.append('title', $('#title').val());   
          form_data.append('text', $('#text').val());   
          form_data.append('link', $('#linkArt').val());   
          form_data.append('showArt',document.querySelector('#showArt').checked);   
          $.ajax({
                  url: './api/SaveArt.php',
                  cache: false,
                  contentType: false,
                  processData: false,
                  data: form_data,                
                  type: 'post',
                  success: function (e) {
                      alert("新增成功");
                      console.log(e)
                  },
                  error: function () {
                     alert("錯誤：請確認黨格式與確實填寫");
                  },
           });
      }        
}
function addExp() {
      let photo = document.querySelector("#File-input");
      if(photo.files && photo.files[0] && $('#title').val() && $('#text').val() && $('#time').val()){
       let file_data = $('#File-input').prop('files')[0];
       let form_data = new FormData();
          form_data.append('file', file_data);   
          form_data.append('title', $('#title').val());   
          form_data.append('text', $('#text').val());   
          form_data.append('time', $('#time').val());   
          form_data.append('showExp', $('#showExp').val());   
          $.ajax({
                  url: './api/SaveExp.php',
                  cache: false,
                  contentType: false,
                  processData: false,
                  data: form_data,                
                  type: 'post',
                  success: function (e) {
                      alert("新增成功");
                      getExp()
                  },
                  error: function () {
                     alert("錯誤：請確認黨格式與確實填寫");
                  },
           });
      }        
}
function getSkill() {
    $('#flag').html("");
    $.get("./api/getSkill.php",{},function (e) {
        $('#flag').prepend(e);
        $(".skillSize").hide();
        $(".skillSize").each(function(i,v){
            if(i<6){
                $(v).show()
            }
        })
    })
}
function saveTel() {
    let food=$('#food').val();
    let word=$('#word').val();
    let place=$('#place').val();
    let tel=$('#tel').val();
    let email=$('#email').val();
    let telTime=$('#telTime').val();
    $.post("./api/saveTel.php",{food,word,place,tel,email,telTime},function () {
        getTel()
    })
}
function getTel() {
    $.get("./api/getTel.php",{},function (e) {
        let str=new Array(e);
        $("#food").val(str[0]['food']);
        $("#word").val(str[0]['word']);
        $("#place").val(str[0]['place']);
        $("#tel").val(str[0]['tel']);
        $("#email").val(str[0]['email']);
        $("#telTime").val(str[0]['telTime']);
    },"json")
}
function getATel() {
    $.get("./api/getTel.php",{},function (e) {
        let str=new Array(e);
        $("#food").html(str[0]['food']);
        $("#word").html(str[0]['word']);
        $("#place").html(str[0]['place']);
        $("#tel").html(str[0]['tel']);
        $("#email").html(str[0]['email']);
        $("#telTime").html(str[0]['telTime']);
    },"json")
}
function fixArt(e) {
    let src=document.querySelector(`#inArtimg${e}`).src;
    console.log(src)
    let title=document.querySelector(`#Arttitle${e}`).innerText;
    let text=document.querySelector(`#Arttext${e}`).innerText;
    let link=document.querySelector(`#Artlink${e}`).innerText;
    $(`#Artimg${e}`).html(`<img  onclick='chkfix()' src='${src}' style='width: 100px;height: 100px;' class='b-touch' id='fiximg'><div style='display: none;'><input type='file' class='AvatarInput Artimg' id='Fix-input' name='img' onchange='readFixURL(this)'></div>`);
    $(`#Arttitle${e}`).html(`<input type="text" class="b-touch" id="fixtitle" value="${title}">`);
    $(`#Arttext${e}`).html(`<input type="text" class="b-touch" id="fixtext" value="${text}">`);
    $(`#Artlink${e}`).html(`<input type="text" class="b-touch" id="fixlink" value="${link}">`);
    $(`#Artbtn${e}`).html(`<input class='b-touch btn btn-outline-secondary' type='button' onclick='fixnowsBArt()' id='fixupload' value='確認'>`);
    $(`#Artbthc${e}`).html(`<input class='b-touch btn btn-outline-secondary' type='button' onclick='getBArt()' value='取消'><input type="hidden" id="fixhidden" value='${e}'>`);  
}
function fixnowsBArt() {    
      let photo = document.querySelector("#Fix-input");
      let form_data = new FormData();
      if(photo.files && photo.files[0]){
          let file_data = $('#Fix-input').prop('files')[0];
          form_data.append('file', file_data);   
      }
          form_data.append('title', $('#fixtitle').val());   
          form_data.append('text', $('#fixtext').val());   
          form_data.append('link', $('#fixlink').val());   
          form_data.append('sh', $(`#Insh${$('#fixhidden').val()}`)[0].checked);   
          form_data.append('id', $('#fixhidden').val());   
          $.ajax({
                  url: './api/fixArt.php',
                  cache: false,
                  contentType: false,
                  processData: false,
                  data: form_data,                
                  type: 'post',
                  success: function (e) {
                      alert("修正成功");
                      getBArt()
                      console.log(e)
                  },
                  error: function () {
                     alert("錯誤：請確認黨格式與確實填寫");
                  },
           });
}
function chkart(e) {
    document.querySelector(`#ArtLink${e}`).click();
}
function showExp(ee) {      
          vv=$('#startpage').val()
          console.log(vv)
          $.get("./api/countExp.php",{},function (k) {
          if(ee==1){
            vv++
            if(vv>k)vv=k
            $(`#showExp${vv-1}`).hide()
            $(`#showExp${vv}`).show()
            $('#startpage').val(vv)
            console.log(vv)
          }else if(ee==0){
            vv--
            if(vv<1)vv=1
            $(`#showExp${vv+1}`).hide()
            $(`#showExp${vv}`).show()
            $('#startpage').val(vv)  
            console.log(vv)
          }
        }) 
 }
function showArtVal(e) {
    let KK=$('#startpage').val();
    $.get("./api/countArt.php",{},function (k) {
      if(e==0){
        KK--
        if(KK<4)KK=4
        $(`#showArt${KK+1}`).hide()
        $(`#showArt${KK-3}`).show()
      }else{
        KK++
        if(KK>k)KK=k
        $(`#showArt${KK-4}`).hide()
        $(`#showArt${KK}`).show()
      }
      $('#startpage').val(KK);
    })
    
}
function showSkillVal(e) {
    let aa=$('#startpage').val();
    if(e==1)aa++;
    if(e==0)aa--;
    $.get("./api/countSkill.php",{},function (k) {
    if(aa<4)aa=4;
    if(aa>k)aa=k;
    $('#startpage').val(`${aa}`);
    if(e==0){
      $(`#showSkill${aa-3}`).show()
      $(`#showSkill${aa+1}`).hide()
    }else{
      $(`#showSkill${aa-4}`).hide()
      $(`#showSkill${aa}`).show()
    }
    })
}
function fixnows() {    
      let photo = document.querySelector("#Fix-input");
      let form_data = new FormData();
      if(photo.files && photo.files[0]){
          let file_data = $('#Fix-input').prop('files')[0];
          form_data.append('file', file_data);   
      }
          form_data.append('title', $('#fixtitle').val());   
          form_data.append('text', $('#fixtext').val());   
          form_data.append('power', $('#fixpower').val());   
          form_data.append('id', $('#fixhidden').val());   
          $.ajax({
                  url: './api/fixSkill.php',
                  cache: false,
                  contentType: false,
                  processData: false,
                  data: form_data,                
                  type: 'post',
                  success: function () {
                      alert("修正成功");
                      getBSkill()
                  },
                  error: function () {
                     alert("錯誤：請確認黨格式與確實填寫");
                  },
           });
}
function addSkill() {
    let photo = document.querySelector("#File-input");
    if(photo.files && photo.files[0] && $('#title').val() && $('#text').val() && $('#power').val()){
     let file_data = $('#File-input').prop('files')[0];
     let form_data = new FormData();
        form_data.append('file', file_data);   
        form_data.append('title', $('#title').val());   
        form_data.append('text', $('#text').val());   
        form_data.append('power', $('#power').val());   
        $.ajax({
                url: './api/SaveSkill.php',
                cache: false,
                contentType: false,
                processData: false,
                data: form_data,                
                type: 'post',
                success: function () {
                    alert("新增成功");
                    getBSkill()
                },
                error: function () {
                   alert("錯誤：請確認黨格式與確實填寫");
                },
         });
    }        
}
function fixnowsExp() {    
    let photo = document.querySelector("#Fix-input");
    let form_data = new FormData();
    if(photo.files && photo.files[0]){
        let file_data = $('#Fix-input').prop('files')[0];
        form_data.append('file', file_data);   
    }
        form_data.append('title', $('#fixtitle').val());   
        form_data.append('text', $('#fixtext').val());   
        form_data.append('time', $('#fixtime').val());   
        form_data.append('sh', $('#fixsh').val());   
        form_data.append('id', $('#fixhidden').val());   
        $.ajax({
                url: './api/fixExp.php',
                cache: false,
                contentType: false,
                processData: false,
                data: form_data,                
                type: 'post',
                success: function () {
                    alert("修正成功");
                    getExp()
                },
                error: function () {
                   alert("錯誤：請確認黨格式與確實填寫");
                },
         });
}
function getAExp() {
    $('#flag').html("");
    $.get("./api/getAExp.php",{},function (e) {
        $('#flag').prepend(e);
        $(".expSize").hide();
        $(".expSize").each(function(i,v){
            if(i<2){
                $(v).show()
            }
        })
    })
}
function GetArtVal(e) {
    let val=$('#startpage').val()
    $.get("./api/countArt.php",{},function (k) {
        if(e==0){
            val--
            if(val<3)val=3
            $(`#Artcard${val-2}`).show()    
            $(`#Artcard${val+1}`).hide()    
        }else{
            val++
            if(val>k)val=k
            $(`#Artcard${val-3}`).hide()   
            $(`#Artcard${val}`).show()  
        }
        $('#startpage').val(val)
        
    })
}
function fixExp(e) {

  let src=document.querySelector(`#inExpimg${e}`).src;

  let title=document.querySelector(`#Exptitle${e}`).innerText;
  console.log(title)
  let text=document.querySelector(`#Exptext${e}`).innerText;
  console.log(text)
  let Xtime=document.querySelector(`#Exptime${e}`).innerHTML;
  console.log(Xtime)
  let sh=(document.querySelector(`#sh${e}`).value)?'checked':'';
  console.log(sh)
  $(`#Expg${e}`).html(`<img onclick='chkfix()' src='${src}' style='width: 100px;height: 100px;' class='b-touch' id='fiximg'><div style='display: none;'><input type='file' class='AvatarInput Expimg' id='Fix-input' name='img' onchange='readFixURL(this)'></div>`);  
  $(`#Exptitle${e}`).html(`<input type="text" class="b-touch" id="fixtitle" value="${title}">`);
  $(`#Extext${e}`).html(`<textarea id="fixtext" class="b-touch" cols="30" rows="6">${text}</div>`);
  $(`#Exptime${e}`).html(`<input type="text" class="b-touch" id="fixtime" value="${Xtime}">`);
  $(`#Expsh${e}`).html(`<input type="checkbox"  class="b-touch" id="fixsh" value="1" ${sh}>`) ;
  $(`#Expbthc${e}`).html(`<input class='b-touch btn btn-outline-secondary' type='button' onclick='getExp()' value='取消'><input type="hidden" id="fixhidden" value='${e}'>`);  
  $(`#Expbtn${e}`).html(`<input class='b-touch btn btn-outline-secondary' type='button' onclick='fixnowsExp()' id='fixupload' value='確認'>`);
}
function fixSkill(e) {
    let src=document.querySelector(`#inSkillimg${e}`).src;
    let title=document.querySelector(`#Skilltitle${e}`).innerText;
    let text=document.querySelector(`#Skilltext${e}`).innerText;
    let power=document.querySelector(`#Skillpower${e}`).innerText;
    $(`#Skillimg${e}`).html(`<img onclick='chkfix()' src='${src}' style='width: 100px;height: 100px;' class='b-touch' id='fiximg'><div style='display: none;'><input type='file' class='AvatarInput skillimg' id='Fix-input' name='img' onchange='readFixURL(this)'></div>`);
    $(`#Skilltitle${e}`).html(`<input type="text" class="b-touch" id="fixtitle" value="${title}">`);
    $(`#Skilltext${e}`).html(`<input type="text" class="b-touch" id="fixtext" value="${text}">`);
    $(`#Skillpower${e}`).html(`<input type="number" min="0" max="100" class="b-touch" id="fixpower" value="${power}">`);
    $(`#Skillbthc${e}`).html(`<input class='b-touch btn btn-outline-secondary' type='button' onclick='getBSkill()' value='取消'><input type="hidden" id="fixhidden" value='${e}'>`);  
    $(`#Skillbtn${e}`).html(`<input class='b-touch btn btn-outline-secondary' type='button' onclick='fixnows()' id='fixupload' value='確認'>`);
}
function readFixURL(input) {
    if (input.files && input.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        let img = document.querySelector('#fiximg');
        img.src = e.target.result;
      }
      reader.readAsDataURL(input.files[0]);
    }
    
}
function chkart(e) {
    document.querySelector(`#ArtLink${e}`).click();
}
function chkfix() {
    document.querySelector('#Fix-input').click();
}
function delSkill(id) {
$.get("./api/delSkill.php",{id},function (e) {
  getBSkill()
})
}
function delArt(id) {
$.get("./api/delArt.php",{id},function (e) {
  getBArt()
})
}
function delExp(id) {
$.get("./api/delExp.php",{id},function (e) {
  getExp()
})
}
function getBSkill() {
    $('#flag').html("");
$.get("./api/getBSkill.php",{},function (e) {
    $('#flag').prepend(e);
    // showSkill
    $(".Skiltr").hide();
    $(".Skiltr").each(function(i,v){
        if(i<4){
            $(v).show()
        }
    })
})
} 
function showMain(e) {
    $.get(`./client/${e}.html`, {}, (text) => {
        $('#main').html(text);
    });
}
function showBMain(e) {
    $.get(`./backend/${e}.html`, {}, (text) => {
        $('#main').html(text);
    });
}
function changeSession() {
    $.get("./api/changeSession.php",{},function(e){
        if(e==1)window.location.replace('./backcontrol.html');
        else{
            openMain("200px","100px");
        }
    })
}
function openMain(a,b) {
    $('.main').animate({
        width:a,height:b
        },500)
}
function sendFrom() {
    let acc = $('#acc').val();
    let pw = $('#pw').val();     
    if(acc!="" && pw!="") {
        $.post("./api/controlCenter.php",{acc,pw},function(e){
            (e==1)?window.location.replace('./backcontrol.html'):alert("帳號與密碼錯誤");
          });
    }else{
        alert("請填寫完整的帳號與密碼")
    }
}
function ToIndex() {
    window.location.replace('./index.html');
}
function logOut() {
    window.location.replace('./index.html');
    $.get("./api/logOut.php",{},function () {})
}
function chkAvatar() {
    document.querySelector('#File-input').click();
}
function readURL(input) {
    if (input.files && input.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        let img = document.querySelector('#Avatar');
        img.src = e.target.result;
      }
      reader.readAsDataURL(input.files[0]);
    }
    
}
function updateMain() {
    let photo = document.querySelector("#File-input");
    if (photo.files && photo.files[0]) {
        console.log(photo.files[0].name);
    }
}
function loadingMain() {
    $.get("./api/loadingMain.php",{},function (e) {
        let str=new Array(e);
        $("#text1").val(str[0]['text1']);
        $("#text2").val(str[0]['text2']);
        $("#text3").val(str[0]['text3']);
    }, 'json')
    $.get("./api/loadingMainImg.php",{},function (e) {
        document.querySelector("#Avatar").src=`./img/${e}`;
    })
}
function loadingRes() {
    $.get("./api/loadingRes.php",{},function (e) {
        let str=new Array(e);
        $("#text").val(str[0]['text']);
        $("#title").val(str[0]['title']);
    }, 'json')
    $.get("./api/loadingResImg.php",{},function (e) {
        document.querySelector("#Avatar").src=`./img2/${e}`;
    })
}
function SaveMain() {
    let text1=$("#text1").val();
    let text2=$("#text2").val();
    let text3=$("#text3").val();
    $.get("./api/SaveMain.php",{text1,text2,text3},function () {
        
    })
}
function SaveRes() {
    let title=$("#title").val();
    let text=$("#text").val();
    $.get("./api/SaveRes.php",{title,text},function () {
        
    })
}
function getMain() {
    $.get("./api/getMainImg.php",{},function (e) {
        let str=new Array(e);
        document.querySelector('#myhead').src=`./img/${str[0]['name']}`
        $('#Btext1').html(str[0]['text1'])
        $('#Btext2').html(str[0]['text2'])
        $('#Btext3').html(str[0]['text3'])
    },'json')

}   
function getRes() {
    $.get("./api/getResImg.php",{},function (e) {
        let str=new Array(e);
        document.querySelector('#mylife').src=`./img2/${str[0]['name']}`
        $('#text').html(str[0]['text'])
        $('#title').html(str[0]['title'])
    },'json')
}
function GetExpVal(e) {
    let val=$('#startpage').val()
    $.get("./api/countExp.php",{},function (k) {
        let page=Math.ceil(k/2);
        if(e==0){
        if(val>1){
                let q=(val*1-1);  
                let qq=q*2
                let qqq=val*2           
                for (let i = qqq-1; i <= qqq; i++) {
                    $(`#Expcard${i}`).hide() 
                }
                for (let j = qq-1; j <= qq; j++) {
                    $(`#Expcard${j}`).show() 
                }
                $('#startpage').val(val*1-1)    
                }               
        }else{
            if(val<page){
                let v=(val*1+1)
                let vv=v*2
                let vvv=val*2
                for (let i = vvv-1; i <= vvv; i++) {
                    $(`#Expcard${i}`).hide() 
                }
                for (let j = vv-1; j <= vv; j++) {
                    $(`#Expcard${j}`).show()   
                }
                $('#startpage').val(val*1+1)
                }
        }
        
    })
}
function GetSkillVal(e) {
    let val=$('#startpage').val();
    $.get("./api/countSkill.php",{},function (k) {
    let page=Math.ceil(k/6);
        if(e==0){
            if(val>1){
                let q=(val*1-1);  
                let qq=q*6
                let qqq=val*6            
                for (let i = qqq-5; i <= qqq; i++) {
                    $(`#skillcard${i}`).hide() 
                }
                for (let j = qq-5; j <= qq; j++) {
                    $(`#skillcard${j}`).show()   
                }
                $('#startpage').val(val*1-1)    
                }
                
        }else{
            if(val<page){
                let v=(val*1+1)
                let vv=v*6
                let vvv=val*6
                for (let i = vvv-5; i <= vvv; i++) {
                    $(`#skillcard${i}`).hide() 
                }
                for (let j = vv-5; j <= vv; j++) {
                    $(`#skillcard${j}`).show()   

                }
                $('#startpage').val(val*1+1)
                }
        }


    })
}
 
