module.exports = {
    name: 'github',
    description: "this send m4zyz's github!",
    execute(message, args){

        if(message.member.roles.cache.has('Enter the rank you want')){
            message.channel.send('You have been granted this rank')
        } else {
            message.channel.send('You have been granted this rank')
            message.member.roles.add('Enter the rank you want');
        }
    }
}
