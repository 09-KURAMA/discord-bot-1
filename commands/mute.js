module.exports={
    name: 'mute',
    description: "mute",
    execute(message, args){
       const target = message.mentions.users.first();
       if(target){
        let  mainRole =message.guild.roles.cache.find(role => role.name ==='member');
        let  muteRole =message.guild.roles.cache.find(role => role.name ==='Muted');
        let memberTarget = message.guild.members.cache.get(target.id);
        
        memberTarget.roles.remove(mainRole.id);
        memberTarget.roles.add(muteRole.id);
        message.channel.send(`<@${memberTarget.user.id}> has been muted`);


       } 
       else{
           message.channle.send('cant find that user');
       }


    }
}