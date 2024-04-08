document.querySelectorAll(".Button-TaylorSwift, .Button-Fearless, .Button-SpeakNow, .Button-RED, .Button-1989, .Button-Reputation, .Button-Lover, .Button-Folklore, .Button-Evermore, .Button-Midnights").forEach(function(botao) {
    botao.addEventListener("click", function(event) {
        let imagem = "";
        switch(event.target.textContent) {
            case "Taylor Swift":
                imagem = "./assets/taylorswift.jpg";
                break;
            case "Fearless":
                imagem = "./assets/fearless.jpg";
                break;
            case "Speak Now":
                imagem = "./assets/speaknow.jpg";
                break;
            case "RED":
                imagem = "./assets/red.jpg";
                break;
            case "1989":
                imagem = "./assets/1989.jpg";
                break;
            case "Reputation":
                imagem = "./assets/reputation.jpg";
                break;
            case "Lover":
                imagem = "./assets/lover.jpg";
                break;
            case "Folklore":
                imagem = "./assets/folklore.jpg";
                break;
            case "Evermore":
                imagem = "./assets/evermore.jpg";
                break;
            case "Midnights":
                imagem = "./assets/midnights.jpg";
                break;
            default:
                break;
        }

        const imgElemento = document.createElement("img");
        imgElemento.src = imagem;

        document.getElementById("container").innerHTML = "";
        document.getElementById("container").appendChild(imgElemento);
    });
});
