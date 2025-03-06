const ham =document.querySelector('.ham');
const enlaces = document.querySelector('.enlaces-menu');
const barras= document.querySelectorAll('.ham span');

ham.addEventListener('click', () =>{
    enlaces.classList.toggle('activado');
    barras.forEach(child => {child.classList.toggle('animado')})
});

let products =[
    {
        Titulo: "Sillon modular barna",
        PrecioPeso: "$250.000",
        PrecioDolar: " U$S282.08",
        Fecha: "05/08/2020",
        imagen: "imagenes/sillonmodularbarna.jpg",
    },
    {
        Titulo: "Mesa de comedor",
        PrecioPeso: "$198.000",
        PrecioDolar: "U$S223.42",
        Fecha: "21/04/2024",
        imagen: "imagenes/mesarectangular.jpg",
    },
    {
        Titulo: "Placard 4 puertas",
        PrecioPeso: "$210.000",
        PrecioDolar: "U$S236.96",
        Fecha: "04/10/2023",
        imagen: "imagenes/placard4puerta.jpg",
    },
    {
        Titulo: "Modular Laqueado",
        PrecioPeso: "$165.000",
        PrecioDolar: "U$S186.17 ",
        Fecha: "10/8/2024",
        imagen: "imagenes/modularlaqueado.jpg",
    },
    {
        Titulo: "Silla campagnola",
        PrecioPeso: "$102.000",
        PrecioDolar: "U$S115.10 ",
        Fecha: "6/2/2023",
        imagen: "imagenes/sillacampagnola.jpg",
    },
    {
        Titulo: "Juego de Sillones 3 Cuerpos rojo",
        PrecioPeso: "$500.000",
        PrecioDolar: "U$S564.18 ",
        Fecha: "2/7/2024",
        imagen: "imagenes/juegodesillones3.jpg",
    },
]


