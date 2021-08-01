module.exports ={
    name:'ban',
    description:'ban',
    execute(message ,args){
        const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.ban();
            message.channel.send("member has been banned");
        }
        else{
            message.channel.send('Mention a user to ban')
        }
    }
}