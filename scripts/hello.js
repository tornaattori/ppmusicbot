module.exports = robot => {
  robot.hear(/hello bot/i, msg => {
    msg.send('Hello!');
  });
};

module.exports = robot => {
  robot.hear(/who's the daddy/i, msg => {
    msg.send('Markku is!');
  });
};
