const userWindows = {};

function isInside24h(phone) {
  const last = userWindows[phone];
  const now = Date.now();
  if (!last || now - last > 86400000) {
    userWindows[phone] = now;
    return false;
  }
  return true;
}

function logMessage(phone) {
  userWindows[phone] = Date.now();
}

module.exports = { isInside24h, logMessage };
