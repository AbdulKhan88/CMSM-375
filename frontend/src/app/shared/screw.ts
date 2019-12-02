export class Screw {
  // Variables names in this class have to be a exact copy of the one in the back end
  id: string;
  accessId: string;
  name: string;
  headType: string;
  price: string;
  category: string;
  gauge: string;
  threadsPerInch: string;
  shaftLen: string;
  content: string;
  imgPath: string;



  toString(): string {
    return this.name + this.headType + this.price + this.category + this.gauge + this.threadsPerInch + this.shaftLen + this.content + this.imgPath;
  }
}
