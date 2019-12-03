process.argv.shift()
process.argv.shift()
var input = process.argv
var output = []
var passLength = parseInt(input[0], 10) 
var number = parseInt(input[1], 10)
charset = charset || 'abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

for (var i = number; i>0; i--){
  for(var j = passLength, n = charset.length; j>0; j--){
    var password = ""
    password += charset.charAt(Math.floor(Math.random() * n))
  }
  output.push(password)
}
process.stdout.write(output)
process.exit(0)
