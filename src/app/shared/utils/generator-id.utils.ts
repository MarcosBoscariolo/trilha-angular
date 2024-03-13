export class GeneratorId {
  static generateId() {
    let idRandom = 0;
    for (let i = 0; i < 9; i++) {
      idRandom = idRandom * 10 + Math.floor(Math.random() * 10);
    }
    return idRandom;
  }
}
