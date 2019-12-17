var input = process.argv
console.log(input)
var output = []
var passLength = parseInt(input[2], 10) 
var number = parseInt(input[3], 10)
charset = charset || 'abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

for (var i = number; i>0; i--){
  for(var j = passLength, n = charset.length; j>0; j--){
    var password = ""
    password += charset.charAt(Math.floor(Math.random() * n))
  }
  console.log(password)
}
process.stdout.write(output)
console.log(output)
process.exit(0)
