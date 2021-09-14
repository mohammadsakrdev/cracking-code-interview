const map = { 12: [{ timestamp: 12345 }, { timestamp: 67890 }] };

function getCaptainLatestPing(captainId) {
  if (map[captainId]) {
    const pingRecords = map[captainId];
    pingRecords.sort((a, b) => a['timestamp'] - b['timestamp']);
    return pingRecords[pingRecords.length - 1];
  }
  return null;
}

function addCaptainPing(captainId, ping = {}) {
  if (map[captainId]) {
    map[captainId].push(ping);
  } else {
    map[captainId] = [ping];
  }
}

const exist = getCaptainLatestPing(12);
console.log(exist);

const nonExist = getCaptainLatestPing(14);
console.log(nonExist);
