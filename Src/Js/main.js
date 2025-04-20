document.addEventListener('DOMContentLoaded', () => {
    new TypeIt('.animated', {
        speed: 140,
        loop: true
    })
    .type('Jeallz Dev          ', { dlay: 70000 })
    .delete(20)
    .type('Estevan Chicoski Viera          ', {dlay: 50000})
    .delete(32)
    .go()
})

document.addEventListener('DOMContentLoaded', () => {
    new TypeIt('.animated2', {
        speed: 150,
        loop: true
    })
    .type('Mobile Flutter          ', { dlay: 50000 })
    .delete(40)
    .type('Web Full-stack          ', {dlay: 50000})
    .delete(40)
    .type('Discord Bots          ', { dlay: 50000 })
    .delete(40)
    .go()
})