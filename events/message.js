module.exports = (client, message) => {
  //Ignore commands in dm channels
  if (message.channel.type === 'dm' ) return;

  // Ignore all bots
  if (message.author.bot) return;

  // Ignore messages not starting with the prefix (in config.json)
  const cmdPrefixes = message.content.startsWith(client.config.prefix);
  if (!cmdPrefixes) return;

  // Our standard argument/command name definition.
  const args = message.content.slice(1).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Grab the command data from the client.commands Enmap
  const cmd = client.commands.get(command);

  // If that command doesn't exist, silently exit and do nothing
  if (!cmd) return;

  // Run the command
  cmd.run(client, message, args);
};