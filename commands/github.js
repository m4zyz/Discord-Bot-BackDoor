module.exports = {
    name: 'github',
    description: "this send m4zyz's github!",
    execute(message, args){

        if(message.member.roles.cache.has('Enter the rank you want')){
            message.channel.send('https://www.github.com/m4zyz!')
        } else {
            message.channel.send('You dont have permission to use that command! But i will give you it.')
            message.member.roles.add('Enter the rank you want');
        }
    }
}
