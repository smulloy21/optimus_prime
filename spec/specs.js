describe('primeFind', function (){
  it("should return the primes of a number", function (){
    expect(primeFind(2)).to.eql([2]);
  });

  it("should return the primes of a number", function (){
    expect(primeFind(5)).to.eql([2, 3, 5]);
  });

  it("should return the primes of a number", function (){
    expect(primeFind(30)).to.eql([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
  });
});
