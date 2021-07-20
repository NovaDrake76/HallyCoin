
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

var x = 0;
var a = 0;

async function number(){
    while (x<1000000000){
     x++;
     x = x + a; 
     await sleep(400);
     document.getElementById("hallycoins").innerHTML = x;

     if( x >= 100){
        document.getElementById("dudu").style.display = "inline";
    }

    if(x >= 1000){
        document.getElementById("btn1").disabled = false;
    }
    if(x >= 10000){
        document.getElementById("btn2").disabled = false;
    }
    if(x >= 100000){
        document.getElementById("btn3").disabled = false;
    }
    if(x >= 1000000){
        document.getElementById("btn4").disabled = false;
    }
    if(x >= 10000000){
        document.getElementById("btn5").disabled = false;
    }
    if(x >= 100000000){
        document.getElementById("btn6").disabled = false;
    }
    if(x >= 100000000){
        document.getElementById("btn7").disabled = false;
    }


    }

}

function duplax(){
    x = x + 10 * (a+1);
}

function dupladudu(){
    x = x + 100 * (a+1);
}

function compra1(){
    document.getElementById("gabrises").style.display = "inline";
    document.getElementById("pobre").style.display = "none";
    document.getElementById("btn1").style.display = "none";
    x = x - 1000;
    a = 10;
}

function compra2(){
    document.getElementById("alce").style.display = "inline";
    document.getElementById("btn2").style.display = "none";
    x = x - 10000;
    a = 100;
}

function compra3(){
    document.getElementById("jv").style.display = "inline";
    document.getElementById("btn3").style.display = "none";
    x = x - 100000;
    a = 1000;
}

function compra4(){
    document.getElementById("dupla").style.display = "inline";
    document.getElementById("btn4").style.display = "none";
    x = x - 1000000;
    a = 10000;
}

function compra5(){
    document.getElementById("dono").style.display = "inline";
    document.getElementById("btn5").style.display = "none";
    x = x - 10000000;
    a = 100000;
}

function compra6(){
    document.getElementById("assalto").style.display = "inline";
    x = 0;
}

function compra7(){
    document.getElementById("breno").style.display = "inline";
    document.getElementById("guardei").style.display = "flex";
    x = 0;
    a = 0;
    var novoBotao = document.createElement("BUTTON");
    novoBotao.innerHTML = "Dupla com Hally";
    novoBotao.className = "btn btn-danger";
    novoBotao.id = "duplaHally";
    novoBotao.onclick = async function newGamePlus(){
    
        while(true){
            x = Math.random()*1000;
            await sleep(400);
        }
    }

    document.getElementById("duplas").appendChild(novoBotao);

}


function graph(){

    var smoothie = new SmoothieChart({
        grid: { strokeStyle:'grey', fillStyle:'#242f45',
                lineWidth: 1, millisPerLine: 2000, verticalSections: 3, },
        labels: { fillStyle:'rgb(60, 0, 0)' }
      });
    smoothie.streamTo(document.getElementById("mycanvas"), 1000);

    // Data
var line1 = new TimeSeries();

// Add a random value to each line every second
setInterval(function() {
  line1.append(new Date().getTime(), x);
}, 1000);

// Add to SmoothieChart
smoothie.addTimeSeries(line1, { strokeStyle:'#81c995', fillStyle:'rgba(49, 62, 55, 0.4)', lineWidth:3 });

}

setInterval(news, 15000);

 function news(){

    var textArray = [
        'HallyCoin dispara após anúncio de Elon Dudu',
        'Notas no sistema pessoal',
        'Hoje tem contraturno?',
        'Xcoin desaba 500% após Lobão se eleger',
        'Mineradoras chinesas desligam máquinas focadas em HallyCoin',
        'Nem sempre um segurança vai te proteger',
        'Use meu código no KWAI para ganhar o dobro de HallyCoins',
        'Compre na alta, troque por skins no CS',
        'A eleição de Max Miller foi limpa e sem apoio externo',
        'Não pergunte a Romerito',
        'Rodrigo é o Batatão de Toy Story',
        'A piada é o seguinte: Danilo compra na alta e...',
        'Daí o médico te fala: pela manhã, uma xícara de café e um tapa em hally. Melhor obedecer o doutor',
        'Ari tem um server de minecraft secreto, só perguntar pelo botão de fazer cocô que ele passa o IP',
        'https://github.com/laynH/Anime-Girls-Holding-Programming-Books',
        'O disco voador cruzou o corredor'
        
    ];
    var randomNumber = Math.floor(Math.random()*textArray.length);

        document.getElementById("noticias").innerHTML = textArray[randomNumber];
}