// Uses BFS
function knightMoves(array1, array2) {
  // variables
  // list of possible moves
  let moves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];
  // track the path
  let queue = [array1, [array1]];
  let visited = new Set();
  visited.add(array1.toString());

  while (queue.length > 0) {
    let [current, path] = queue.shift();
    if (current[0] === array2[0] && current[1] === array2[1]) {
      console.log(
        `=> You made it in ${path.length - 1} moves! Here's your path: `
      );
      path.forEach((element) => {
        console.log(element);
      });
      return path;
    }
  }
}
