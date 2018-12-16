function F() {
    return F;
  }
console.log(new F() === F);
