module.exports = {
    name: 'mod' ,
    description: "elysium and cloudy bot link",
    execute(message, args){

     // if(message.member.permissions.has("KICK_MEMBERS")){
       // message.channel.send('you have the perms to kick members');
      //}
    
      if(message.member.roles.cache.has('871041897764909096')) {
      message.channel.send('stop thinking and add these bots to your server') && message.channel.send('https://top.gg/bot/834502699503845476') && message.channel.send('https://discords.com/bots/bot/791971458372730881')
      } 
      else {
        message.channel.send( 'you dont have the perms to use command, let me add the role ')
      
       message.member.roles.add('871041897764909096').catch(console.error);
      
      }

    

    

}}