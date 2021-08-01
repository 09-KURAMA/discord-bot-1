module.exports ={
    name: 'kick',
    description:"kick",
    execute(message ,args){
       
        const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.kick();
            message.channel.send("member has been kicked");
        }
        else{
            message.channel.send('Mention a user to kick')
        }
    
         
    }
}