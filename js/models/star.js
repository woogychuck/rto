var Star = BaseObject.extend({
        init: function () {
            this._super('star');
        },
        name: '',
        class: '',
        className: '',
        maxSatelliteCount: 0,
        tempAdj:0,
        mass: 0,
        generateStar: function(systemName){
            this.name = systemName;
            var spectralSeed = Math.random();
            if(spectralSeed < .30){
                this.className = 'Red Dwarf';
                this.class = 'M';
                this.maxSatelliteCount = 3;
                this.mass = Math.random() * .4 + .1;
                this.tempAdj = 1;
            }else if(spectralSeed < .45){
                this.className = 'Orange Main Sequence';
                this.class = 'K';
                this.maxSatelliteCount = 6;
                this.mass = Math.random() * .3 + .5;
                this.tempAdj = 2;
            }else if(spectralSeed < .60){
                this.className = 'Yellow Main Sequence';
                this.class = 'G';
                this.maxSatelliteCount = 12;
                this.mass = Math.random * .5 + .8;
                this.tempAdj = 4;
            }else if(spectralSeed < .70) {
                this.className = 'White Main Sequence';
                this.class = 'F';
                this.maxSatelliteCount = 15;
                this.mass = Math.random * .7 + 1.3;
                this.tempAdj = 6;
            }else if(spectralSeed < .80) {
                this.className = 'White Subgiant';
                this.class = 'A';
                this.maxSatelliteCount = 25;
                this.mass = Math.random() * 8 + 2;
                this.tempAdj = 10;
            }else if(spectralSeed < .90){
                this.className = 'Blue Giant';
                this.class = 'B';
                this.maxSatelliteCount = 30;
                this.mass = Math.random() * 20 + 10;
                this.tempAdj = 20;
            }else if(spectralSeed < .94){
                this.className = 'Supergiant';
                this.class = 'O';
                this.maxSatelliteCount = 10;
                this.mass = Math.random() * 30 + 30;
                this.tempAdj = 40;
            }else if(spectralSeed < .96){
                this.className = 'Quasar';
                this.class = 'Q';
                this.maxSatelliteCount = 0;
                this.mass = Math.random() * 30 + 30;
                this.tempAdj = 1;
            }else if(spectralSeed < .98){
                this.className = 'Neutron Star';
                this.class = 'N';
                this.maxSatelliteCount = 0;
                this.mass = Math.random() * 30 + 30;
                this.tempAdj = 1;
            }else{
                this.className = 'Singularity';
                this.class = 'S';
                this.maxSatelliteCount = 0;
                this.mass = 999;
                this.tempAdj = 0;
            }
        }
    }
);