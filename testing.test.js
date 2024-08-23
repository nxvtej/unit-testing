const { default: testRunner } = require("node:test");
const myNameis  = require("./testing")

test("My name is navdeep singh ket me print it ", ()=>{
    expect(myNameis("navdeep")).toBe("navdeep")
})