const products = [
    {
        id: 1,
        name: "Cartera NUBE",
        subtitle: "Hecha a mano en macramé.",
        images: [
            "../assets/Carteras/nube/nube.png"
        ],
        historia: "",
        details: "Cartera hecha a mano en cordón de algodón color crudo de 4mm, con manija circular de madera de 12 cm de diámetro. Medidas aproximadas: 21 cm x 36 cm. Cada cartera tiene detalles únicos que la hacen irrepetible.",
        personalization: "Cada pieza presenta variaciones propias del trabajo artesanal.",
        times: "Producción artesanal."
    },

    {
        id: 2,
        name: "Cartera CIELO",
        subtitle: "Diseño liviano con flecos.",
        images: [
            "../assets/Carteras/cielo/cielo.png"
        ],
        historia: "",
        details: "Cartera hecha a mano con cordón de algodón de 7mm color crudo y manija de madera laqueada de 13 cm x 9 cm. Terminación en flecos. Medidas aproximadas: 22 cm x 50 cm. Cada cartera es única e irrepetible.",
        personalization: "Variaciones propias del trabajo manual.",
        times: "Producción artesanal."
    },

    {
        id: 3,
        name: "Cartera TIERRA",
        subtitle: "Tejido artesanal con carácter.",
        images: [
            "../assets/Carteras/tierra/tierra.png"
        ],
        historia: "",
        details: "Cartera hecha a mano color camel con manija desmontable confeccionada en hilo de algodón, tejida con detalle de ochos de 5 cm por 95 cm de largo. Tejida en cordón relleno de algodón de 7 mm. Contiene en su interior una bolsa de lienzo de algodón. Medidas aproximadas: 28 cm x 38 cm.",
        personalization: "Cada pieza es única.",
        times: "Producción artesanal."
    },

    {
        id: 4,
        name: "Cartera AMOR",
        subtitle: "Color y detalle artesanal.",
        images: [
            "../assets/Carteras/amor/amor.png"
        ],
        historia: "",
        details: "Cartera hecha a mano con manija desmontable, tejida en cordón de algodón de 7mm. Color amarillo con detalles en fucsia. En su interior contiene una bolsa de lienzo de algodón. Medidas aproximadas: 26 cm x 38 cm. Manija desmontable de 118 cm.",
        personalization: "Detalles únicos hechos a mano.",
        times: "Producción artesanal."
    },

    {
        id: 5,
        name: "Cartera NUDO",
        subtitle: "Diseño compacto y artesanal.",
        images: [
            "../assets/Carteras/nudo/nudo.png"

        ],
        historia: "",
        details: "Cartera hecha a mano realizada con soga de algodón color crudo con cierre a contratono en color camel. En su interior contiene una bolsa de lienzo de algodón. Medidas aproximadas: 27 cm x 27 cm.",
        personalization: "Cada cartera es irrepetible.",
        times: "Producción artesanal."
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
        historia: "",
        details: "Portacelulares hechos con hilo de algodón en colores camel, visón, crudo y rosa vintage. Diferentes largos de manija para llevar como bandolera o al hombro. Medidas y formatos variables según modelo.",
        personalization: "Cada pieza presenta detalles únicos.",
        times: "Producción artesanal."
    },

    {
        id: 7,
        name: "Cartera JOSEFA",
        subtitle: "Detalles originales en madera.",
        images: [
            "../assets/Carteras/josefa/josefa.png"

        ],
        historia: "",
        details: "Cartera realizada a mano con hilo de algodón crudo de 4 mm. Su manija es de madera tejida con el mismo hilo en color camel, con detalles originales y divertidos. Medidas aproximadas: 24 cm x 44 cm.",
        personalization: "Terminaciones artesanales únicas.",
        times: "Producción artesanal."
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
        historia: "",
        details: "Cartera hecha a mano con soga de algodón de 4 mm en color crudo. Cuenta con manijas incorporadas y correa desmontable para permitir un doble uso. Medidas aproximadas: 24 cm x 25 cm.",
        personalization: "Cada pieza es única.",
        times: "Producción artesanal."
    },

    {
        id: 9,
        name: "Cartera FLORA",
        subtitle: "Macramé delicado.",
        images: [
            "../assets/Carteras/flora/flora1.png",
            "../assets/Carteras/flora/flora2.png"
        ],
        historia: "",
        details: "Carterita hecha en macramé totalmente a mano, realizada en hilo de algodón crudo y rosado. Medidas aproximadas: 17 cm x 19 cm. Cada cartera tiene detalles diferentes que la hacen única.",
        personalization: "Diseño artesanal irrepetible.",
        times: "Producción artesanal."
    },
    {
        id: 10,
        name: "Cartera AURORA",
        subtitle: "Macramé estructurado y funcional.",
        images: [
            "../assets/Carteras/aurora/aurora1.png",
            "../assets/Carteras/aurora/aurora2.png",
            "../assets/Carteras/aurora/aurora3.png"
        ],
        details: "Cartera hecha a mano con soga de algodón rellena de 7 mm, en color verde oliva. Medidas aproximadas: 27 cm de ancho, 33 cm de alto y 3 cm de profundidad. Cuenta con dos manijas para llevarla de distintas formas y una bolsita interior de algodón crudo desmontable.",
        personalization: "Cada pieza presenta variaciones propias del trabajo artesanal.",
        times: "Producción artesanal."
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
        historia: "",
        details: "",
        personalization: "",
        times: ""
    },
    {
        id: 12,
        name: "Cartera ALI",
        subtitle: "",
        images: [
            "../assets/Carteras/ali/ali1.png",
            "../assets/Carteras/ali/ali2.png",
            "../assets/Carteras/ali/ali3.png"
        ],
        historia: "",
        details: "",
        personalization: "",
        times: ""
    },
    {
        id: 13,
        name: "Cartera ANA",
        subtitle: "",
        images: [
            "../assets/Carteras/ana/ana.png"
        ],
        historia: "",
        details: "",
        personalization: "",
        times: ""
    },
    {
        id: 14,
        name: "Cartera AZULINO",
        subtitle: "",
        images: [
            "../assets/Carteras/azulino/azulino.png"
        ],
        historia: "",
        details: "",
        personalization: "",
        times: ""
    }
];
