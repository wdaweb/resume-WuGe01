<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon" href="#" type="image/x-icon">
    <link rel="stylesheet" href="./plugins//bootstrap.css">
    <link rel="stylesheet" href="mystyle.css">
    <script src="./plugins/jquery-3.5.1.js"></script>

    <title>我的電子履歷表</title>
</head>

<body>
    <header>
        <div class="header">
            <div class="container">
                <a onclick="showMain('main')"><img class="b-touch headerIn" src="./img/logo-01.png"></a>
                <button class="headerWord b-touch btn btn-outline-secondary" style="border: 0px;" onclick="showMain('log')"
                   >後台</button>
                <button class="headerWord b-touch btn btn-outline-secondary" style="border: 0px;" onclick="showMain('tel')"
                   >聯繫</button>
                <button class="headerWord b-touch btn btn-outline-secondary" style="border: 0px;" onclick="showMain('art')"
                   >作品</button>
                <button class="headerWord b-touch btn btn-outline-secondary" style="border: 0px;" onclick="showMain('exp')"
                   >經歷</button>
                <button class="headerWord b-touch btn btn-outline-secondary" style="border: 0px;" onclick="showMain('skill')"
                  >技能</button>
                <button class="headerWord b-touch btn btn-outline-secondary" style="border: 0px;" onclick="showMain('res')"
                   >自傳</button>
            </div>
        </div>
    </header>
    <div class="back"></div>
    <div class="big_dady">
        <div class="main container">
            <div style="width: 100%;padding: 10px;" id="main">

            </div>
        </div>
    </div>

    <script>
        function showMain(e) {
            $.get(`./api/${e}.html`, {}, (text) => {
                $('#main').html(text);
            });
        }
    </script>
</body>

</html>