class Challenge {
  public async average(a: number, b: number){
    try {
      const response = a + b / 2;
      return response;
    } catch (e) {
      throw new TypeError("Ha ocurrido un error con este reto");
    }
  }
}
