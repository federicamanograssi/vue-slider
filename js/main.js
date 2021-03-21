// Descrizione: Rifare l'esercizio dello slider come fatto assieme in classe.

var app = new Vue ({
    el : '#slider_photo',
    data : {
        counterPhoto : 0,
        photos_slider : [
            'img/photo01.jpg',
            'img/photo02.jpg',
            'img/photo03.jpg'
        ]
    },
    methods : {
        nextPhoto(){
            this.counterPhoto++;
            if (this.counterPhoto == this.photos_slider.length){
                this.counterPhoto = 0;
            }
        },
        prevPhoto(){
            this.counterPhoto--;
            if(this.counterPhoto <0){
                this.counterPhoto = (this.photos_slider.length-1)
            }
        }
    }
})


// Bonus1: Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente.
// Bonus2: Introdurre l' evento click sui pallini e visualizzare immagine relativa.
// Bonus3: spazio alla fantasia 