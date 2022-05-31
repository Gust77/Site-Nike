const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".itemMenu");


const produto = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        descri: "Nike Air Force é uma das grandes inovações da marca para que o amortecimento seja ainda mais eficiente e você tenha o máximo de desempenho em suas atividades e exercícios físicos.",
        colors: [
                {
                    code: "black",
                    img: "imagens/airblack.webp"
                },
                    {
                        code: "red",
                        img: "imagens/airred.webp"
                    },
            ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 149,
        descri: "O protótipo do Air Jordan levava as cores vermelho, branco e preto, a trinca do Chicago Bulls, time em que o atleta se consagrou. O “air” se referia ao jogo aéreo de Jordan nas quadras, sempre dando a impressão de voar com a bola nas mãos.",
        colors: [
                {
                    code: "lightgray",
                    img: "./imagens/airjor.webp"
                },
                    {
                        code: "ivory",
                        img: "./imagens/airjorbeg.webp"
                    },
            ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 159,
        descri: "Nike Blazer Mid '77 Vintage, clássico desde o início. O couro e os materiais sintéticos na parte de cima mantêm o look clássico do original, ao mesmo tempo que adicionam conforto e sustentação. O tratamento vintage na entressola cria um look old school.",
        colors: [
                {
                    code: "whitesmoke",
                    img: "./imagens/blazer.webp"
                },
                    {
                        code: "yellow",
                        img: "./imagens/bazeyell.webp"
                    },
            ],
    },
    {
        id: 4,
        title: "Crater",
        price: 250,
        descri: "O Tênis Nike Crater Impact é feito com pelo 20% de materiais reciclados por peso e com sobreposições de cortes retos que produzem menos resíduos. A sua entressola é confeccionada em espuma Crater, que é feita de resíduos da fabricação e adiciona estabilidade.",
        colors: [
                {
                    code: "black",
                    img: "./imagens/crater.webp"
                },
                    {
                        code: "lightgreen",
                        img: "./imagens/craterora.webp"
                    },
            ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 89,
        descri: "A parte de cima em “Fios de lixo espacial” usa cerca de 75% de conteúdo reciclado por peso, e é feita a partir de garrafas de plástico, camisetas e retalhos de fios reciclados. Uma entressola de espuma Crater macia combina a Nike Grind com uma mistura de espumas para proporcionar estabilidade e uma estética única.",
        colors: [
                {
                    code: "lightgreen",
                    img: "./imagens/hippie2.webp"
                },
                    {
                        code: "black",
                        img: "./imagens/hippie3.webp"
                    },
            ],
    }
]

//define que escolher produto começa no primeiro item da lista "produto"
let escolherProduto = produto[0]

const trocarProdutoImg = document.querySelector(".imagemProduto")
const trocarProdutoTitle = document.querySelector(".productTitle")
const trocarProdutoPrice = document.querySelector(".productPrice")
const trocarProdutoDescr = document.querySelector(".descricao")
const trocarProdutoCor = document.querySelectorAll(".colorCoinntainner")
const trocarProdutoSize = document.querySelectorAll(".tamanho")




menuItems.forEach((item, index) =>{
    item.addEventListener("click", () => {
        //mudar imagem slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`

        //mudar o produto escolhido
        escolherProduto = produto[index]

        //mudar texto e imagem do produto escolhido
        trocarProdutoTitle.textContent = escolherProduto.title
        trocarProdutoPrice.textContent = ("R$ " + escolherProduto.price)
        trocarProdutoDescr.textContent = escolherProduto.descri
        trocarProdutoImg.src = escolherProduto.colors[0].img

        //mudar opção de cores
        trocarProdutoCor.forEach((color, index)=>{
            color.style.backgroundColor = escolherProduto.colors[index].code
        })
    })
})


//mudar tênis de acordo com a cor
trocarProdutoCor.forEach((color, index)=>{
    color.addEventListener("click", ()=>{
        trocarProdutoImg.src = escolherProduto.colors[index].img
    })
})


//selecioando numero
trocarProdutoSize.forEach((size,idex)=>{
    size.addEventListener("click", ()=>{
        trocarProdutoSize.forEach((size)=>{
            size.style.backgroundColor = 'white'
            size.style.color = 'black'
        })

        size.style.backgroundColor = 'black'
        size.style.color = 'white'
    })
})




/********
galeria*/
const wrapperProd = document.querySelector(".sliderWrapperProd");


menuItems.forEach((item, index) =>{
    item.addEventListener("click", () => {
        //mudar imagem slide
        wrapperProd.style.transform = `translateX(${-111 * index}vw)`

    })
})


/******
modal*/


const botaoProduto = document.querySelector('.botaoProduto')
const pagamento = document.querySelector('.pagamento')
const fechar = document.querySelector('.fechar')

botaoProduto.addEventListener("click", ()=>{
    pagamento.style.display = 'flex'
})

fechar.addEventListener("click", ()=>{
    pagamento.style.display = 'none'
})