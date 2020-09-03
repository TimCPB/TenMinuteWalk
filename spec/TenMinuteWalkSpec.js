describe("isTenMinuteWalk", function() {
  var array1 = ['w', 's']
  var array2 = ['w', 's', 'e', 'e', 'n', 'n', 'e', 's', 'w', 'w']
  var array3 = ['w', 's', 'e', 'n', 'n', 'e', 's', 'w', 'w', 'w']
  var array4 = ['w', 's', 'e', 's', 's', 'e', 's', 'w', 'n', 'n']

  it("returns false if walk is less than 10 minutes", function() {
    expect(isTenMinuteWalk(array1)).toEqual(false)
  })

  it("returns true if a walk is exactly 10 minutes", function() {
    expect(isTenMinuteWalk(array2)).toEqual(true)
  })

  it("returns false if the walk doesn't return to starting point", function() {
    expect(isTenMinuteWalk(array3)).toEqual(false)
  })
})