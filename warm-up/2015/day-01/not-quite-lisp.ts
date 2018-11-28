
const FLOORS = {
    BASEMENT: -1
};

const GO = {
    UP: '(',
    DOWN: ')'
};
  
const ALLOWED_DIRECTIONS = [GO.UP, GO.DOWN];

const stepUp = (floor => floor + 1);
const stepDown = (floor => floor - 1);
const updatePosition = (position => position + 1);
const isBasement = (floor => floor === FLOORS.BASEMENT);

class Building {
    
    floor: number;
    position: number;
    basementPosition: number;
    isFoundBasement: boolean;

    constructor(floor = 0, position = 0, basementPosition = 0, isFoundBasement = false) {
        this.floor = floor;
        this.position = position;
        this.basementPosition = basementPosition;
        this.isFoundBasement = isFoundBasement;
    }

    isDirection(direction) : boolean {
        return ALLOWED_DIRECTIONS.indexOf(direction) !== -1;
    };
      
    goTo(direction, position) : void {
       this.position = updatePosition(position);
       this.floor = (direction === GO.UP) ? stepUp(this.floor) : stepDown(this.floor);  
       if (isBasement(this.floor) && !this.isFoundBasement) {
           this.basementPosition = this.position;
           this.isFoundBasement = !this.isFoundBasement;
        }
    };

    deliverPresent(input) : void {
        input.split('').filter(this.isDirection).map(direction => this.goTo(direction, this.position));
    };

    showResult() {
        console.log('Apartment floor is ', this.floor);
        console.log('Basement position is ', this.basementPosition);
    }
}

let building = new Building();
const instructions = '()())';
building.deliverPresent(instructions);
building.showResult();