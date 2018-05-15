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

module.exports = robot => {
  robot.hear(/yeaa bot/i, msg => {
    msg.send('HELL YEA!');
  });
};

module.exports = robot => {
  robot.hear(/mämmi/i, msg => {
    msg.send('mömmö');
  });
};

module.exports = robot => {
  robot.hear(/oh yeaaaa/i, msg => {
    msg.send('OHHHH!');
  });
};
