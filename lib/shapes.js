class Shapes{
    constructor(){
        this.color=''
    }
    setColor(color){
        this.color=(color);
    }
}

class circle extends Shapes{
    render(){
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"/>`
    }
}
class square extends Shape{
    render(){
        return `<rect x="50" height="200" width="200" fill="${this.color}"/>`
    }
}
class triangle extends Shapes{
    render(){
        //return `<polygon heigh="100%" width="100%" points="25,75 75,25 25,25" fill="${this.color}"/>
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}"/>`
    }
};

module.exports = {circle, square, triangle}