process.argv.shift()
process.argv.shift()
var input = process.argv
var output = []
var passLength = parseInt(input[0]) 
var number = parseInt(input[1])
charset = charset || 'abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

for (var i = number; i>0; i--){
  for(var j = passLength; j>0; j--){
    var password = ""
    password += charset.charAt(Math.floor(Math.random() * n))
  }
  output.push(password)
}
process.stdout.write(output)
process.exit(0)
