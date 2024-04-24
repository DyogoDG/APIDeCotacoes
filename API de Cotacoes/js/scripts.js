function carregarMoedas(){

    const requisicaoHttp = new XMLHttpRequest()
    requisicaoHttp.open("GET","https://economia.awesomeapi.com.br/last/BTC-BRL,BTC-USD,USD-BRL",false) 
    requisicaoHttp.send()
    
    const resposta = JSON.parse(requisicaoHttp.responseText)
    const moedaBTCBRL = resposta.BTCBRL
    const moedaBTCUSD = resposta.BTCUSD
    const moedaUSDBRL = resposta.USDBRL


    adicionarCardMoeda(moedaBTCBRL,moedaBTCUSD, moedaUSDBRL)
}
       function adicionarCardMoeda(moedaBTCBRL, moedaBTCUSD, moedaUSDBRL){

        const traco1 = document.createElement("h3")
        traco1.innerHTML = "----------------------------------------------"

        const traco2 = document.createElement("h3")
        traco2.innerHTML = "----------------------------------------------"

        const traco3 = document.createElement("h3")
        traco3.innerHTML = "----------------------------------------------"
    
    // BTC-BRL
    const textoNameBTCBRL = document.createElement("h3")
    textoNameBTCBRL.innerHTML = moedaBTCBRL.name

    const textoDataBTCBRL = document.createElement("h3")
    textoDataBTCBRL.innerHTML = moedaBTCBRL.create_date

    const textoBidBTCBRL = document.createElement("h3")
    textoBidBTCBRL.innerHTML = moedaBTCBRL.bid

    const divElementoBTCBRL = document.getElementById("conteudo-moedas-btc-brl")
    divElementoBTCBRL.appendChild(textoNameBTCBRL)
    divElementoBTCBRL.appendChild(textoDataBTCBRL)
    divElementoBTCBRL.appendChild(textoBidBTCBRL)
    divElementoBTCBRL.appendChild(traco1)

    
    // BTC-USD
    const textoNameBTCUSD = document.createElement("h3")
    textoNameBTCUSD.innerHTML = moedaBTCUSD.name

    const textoDataBTCUSD = document.createElement("h3")
    textoDataBTCUSD.innerHTML = moedaBTCUSD.create_date

    const textoBidBTCUSD = document.createElement("h3")
    textoBidBTCUSD.innerHTML = moedaBTCUSD.bid

    const divElementoBTCUSD = document.getElementById("conteudo-moedas-btc-usd")
    divElementoBTCUSD.appendChild(textoNameBTCUSD)
    divElementoBTCUSD.appendChild(textoDataBTCUSD)
    divElementoBTCUSD.appendChild(textoBidBTCUSD)
    divElementoBTCUSD.appendChild(traco2)

    //USD-BRL
    const textoNameUSDBRL = document.createElement("h3")
    textoNameUSDBRL.innerHTML = moedaUSDBRL.name

    const textoDataUSDBRL = document.createElement("h3")
    textoDataUSDBRL.innerHTML = moedaUSDBRL.create_date

    const textoBidUSDBRL = document.createElement("h3")
    textoBidUSDBRL.innerHTML = moedaUSDBRL.bid

    const divElementoUSDBRL = document.getElementById("conteudo-moedas-usd-brl")
    divElementoUSDBRL.appendChild(textoNameUSDBRL)
    divElementoUSDBRL.appendChild(textoDataUSDBRL)
    divElementoUSDBRL.appendChild(textoBidUSDBRL)
    divElementoUSDBRL.appendChild(traco3)
   

}




