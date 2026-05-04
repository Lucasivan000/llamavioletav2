const products = [
    {
        id: 1,
        name: "Cartera NUBE",
        subtitle: "Hecha a mano en macramé.",
        images: [
            "../assets/Carteras/nube/nube.png",
            "../assets/Carteras/nube/nube1.png",
            "../assets/Carteras/nube/nube2.png"
        ],
        descripcion: "Cartera hecha a mano en cordón de algodón color crudo de 4 mm, con manija circular de madera de 12 cm de diámetro. Medidas aproximadas: 21 × 36 cm.",
        precio: "75.000"
    },

    {
        id: 2,
        name: "Cartera CIELO",
        subtitle: "Diseño liviano con flecos.",
        images: [
            "../assets/Carteras/cielo/cielo.png",
            "../assets/Carteras/cielo/cielo1.png",
            "../assets/Carteras/cielo/cielo2.png",
            "../assets/Carteras/cielo/cielo3.png"
        ],
        descripcion: "Cartera hecha a mano con cordón de algodón de 7 mm color crudo y manija de madera laqueada de 13 × 9 cm. Terminación en flecos. Medidas aproximadas: 22 × 50 cm.",
        precio: "75.000"
    },

    {
        id: 3,
        name: "Cartera TIERRA",
        subtitle: "Tejido artesanal con carácter.",
        images: [
            "../assets/Carteras/tierra/tierra.png"
        ],
        descripcion: "Cartera hecha a mano color camel con manija desmontable confeccionada en hilo de algodón, tejida con detalle de ochos de 5 cm por 95 cm de largo. Tejida en cordón relleno de algodón de 7 mm. Contiene en su interior una bolsa de lienzo de algodón. Medidas aproximadas: 28 × 38 cm.",
        precio: "90.000"
    },

    {
        id: 4,
        name: "Cartera AMOR",
        subtitle: "Color y detalle artesanal.",
        images: [
            "../assets/Carteras/amor/amor.png",
            "../assets/Carteras/amor/amor1.png",
            "../assets/Carteras/amor/amor2.png"
        ],
        descripcion: "Cartera hecha a mano con manija desmontable, tejida en cordón de algodón de 7 mm. Color amarillo con detalles en fucsia. En su interior contiene una bolsa de lienzo de algodón. Medidas aproximadas: 26 × 38 cm. Manija desmontable: 118 cm.",
        precio: "90.000"
    },

    {
        id: 5,
        name: "Cartera NUDO",
        subtitle: "Diseño compacto y artesanal.",
        images: [
            "../assets/Carteras/nudo/nudo3.png",
            "../assets/Carteras/nudo/nudo1.png",
            "../assets/Carteras/nudo/nudo2.png"

        ],
        descripcion: "Cartera hecha a mano realizada con soga de algodón color crudo, con cierre a contratono en color camel. En su interior contiene una bolsa de lienzo de algodón. Medidas aproximadas: 27 × 27 cm.",
        precio: "50.000"
    },

    {
        id: 6,
        name: "Portacelulares",
        subtitle: "Funcional y artesanal.",
        images: [
            "../assets/Carteras/portacel/portacelular1.png",
            "../assets/Carteras/portacel/portacelular2.png",
            "../assets/Carteras/portacel/portacelular3.png",
            "../assets/Carteras/portacel/portacelular4.png",
            "../assets/Carteras/portacel/portacelular5.png"
        ],
        descripcion: "Hechos con hilo de algodón en colores camel, visón, crudo y rosa vintage. Diferentes largos de manija para llevar como bandolera o al hombro. Medidas aproximadas: Bicolor: cuerpo de 11 × 21 cm, largo de correa 114 cm. Visón con flecos: cuerpo de 11,5 × 17 cm, largo de correa 100 cm. Rosa vintage: cuerpo de 10,5 × 17,5 cm, largo de correa 58 cm. Camel: cuerpo de 10 × 17 cm, largo de correa 114 cm. Las medidas de las correas están tomadas en su totalidad.",
        precio: "30.000"
    },

    {
        id: 7,
        name: "Cartera JOSEFA",
        subtitle: "Detalles originales en madera.",
        images: [
            "../assets/Carteras/josefa/josefa.png",
            "../assets/Carteras/josefa/josefa1.png",
            "../assets/Carteras/josefa/josefa2.png",
            "../assets/Carteras/josefa/josefa3.png"

        ],
        descripcion: "Cartera realizada a mano con hilo de algodón crudo de 4 mm. Manija de madera tejida con el mismo hilo en color camel, con detalles originales y divertidos. Medidas aproximadas: 24 × 44 cm.",
        precio: "90.000"
    },

    {
        id: 8,
        name: "Cartera HERMINIA",
        subtitle: "Doble uso, diseño artesanal.",
        images: [
            "../assets/Carteras/herminia/herminia1.png",
            "../assets/Carteras/herminia/herminia2.png",
            "../assets/Carteras/herminia/herminia3.png",
            "../assets/Carteras/herminia/herminia4.png"

        ],
        descripcion: "Cartera hecha a mano con soga de algodón de 4 mm en color crudo. Cuenta con manijas incorporadas y correa desmontable para permitir un doble uso. Medidas aproximadas: 24 × 25 cm.",
        precio: "90.000"
    },

    {
        id: 9,
        name: "Cartera FLORA",
        subtitle: "Macramé delicado.",
        images: [
            "../assets/Carteras/flora/flora1.png",
            "../assets/Carteras/flora/flora2.png",
            "../assets/Carteras/flora/flora3.png",
            "../assets/Carteras/flora/flora4.png",
            "../assets/Carteras/flora/flora5.png"
        ],
        descripcion: "Carterita hecha en macramé totalmente a mano, realizada en hilo de algodón crudo y rosado. Medidas aproximadas: 17 × 19 cm.",
        precio: "60.000"
    },
    {
        id: 10,
        name: "Cartera AURORA",
        subtitle: "Macramé estructurado y funcional.",
        images: [
            "../assets/Carteras/aurora/aurora1.png",
            "../assets/Carteras/aurora/aurora2.png",
            "../assets/Carteras/aurora/aurora3.png",
            "../assets/Carteras/aurora/aurora4.png"
        ],
        descripcion: "Cartera hecha con soga de 7mm de algodón rellena, color verde oliva. Sus medias son 27cm de ancho, 33cm de alto, 3 cm de profundidad. Tiene dos manijas , para llevarla como  más te guste, y una bolsita interior en algodón crudo que se puede sacar"
,
        precio: "90.000"
    },
    {
        id: 11,
        name: "Cartera AGUS",
        subtitle: "",
        images: [
            "../assets/Carteras/agus/agus1.png",
            "../assets/Carteras/agus/agus2.png",
            "../assets/Carteras/agus/agus3.png"

        ],
        descripcion: "Cartera hecha a mano en macramé con soga de algodón de 4 mm que aporta mayor cuerpo a la pieza. Medidas aproximadas: 25 × 19 cm.",
        precio: "90.000"
    },
    {
        id: 12,
        name: "Cartera ALI",
        subtitle: "",
        images: [
            "../assets/Carteras/ali/ali1.png",
            "../assets/Carteras/ali/ali2.png",
            "../assets/Carteras/ali/ali3.png",
            "../assets/Carteras/ali/ali4.png",
            "../assets/Carteras/ali/ali5.png",
            "../assets/Carteras/ali/ali6.png",
            "../assets/Carteras/ali/ali7.png"
        ],
        descripcion: "Cartera tejida en macramé, realizada totalmente a mano con soga de algodón de 7 mm. En su interior tiene una bolsa de lienzo de algodón color beige. Medidas aproximadas: 25 × 26 cm.",
        precio: "75.000"
    },
    {
        id: 13,
        name: "Cartera ANA",
        subtitle: "",
        images: [
            "../assets/Carteras/ana/ana.png",
            "../assets/Carteras/ana/ana1.png",
            "../assets/Carteras/ana/ana2.png",
            "../assets/Carteras/ana/ana3.png"
        ],
        descripcion: "Cartera de mano color chocolate realizada totalmente a mano con hilo de algodón, con terminación en flecos y botón de madera lustrado en composé. Medidas aproximadas: 23 × 20 cm.",
        precio: "85.000"
    },
    {
        id: 14,
        name: "Cartera AZULINO",
        subtitle: "",
        images: [
            "../assets/Carteras/azulino/azulino.png",
            "../assets/Carteras/azulino/azulino1.png",
            "../assets/Carteras/azulino/azulino2.png",
            "../assets/Carteras/azulino/azulino3.png"
            
        ],
        descripcion: "Cartera de mano hecha en hilo de algodón azul de 4 mm. En su interior contiene una bolsa de lienzo de algodón color crudo. Medidas aproximadas: 24 × 26 cm.",
        precio: "45.000"
    }
];
