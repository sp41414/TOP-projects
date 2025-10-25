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
  let queue = [[array1, [array1]]]; // stores current position and path
  let visited = new Set();
  visited.add(array1.toString()); // .toString() makes it comparable

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
    // generate moves based off the offset from moves[], which makes it an L shape like the knight
    for (let [i, j] of moves) {
      let next = [current[0] + i, current[1] + j]; // apply the offset to get next position
      if (
        next[0] >= 0 &&
        next[0] < 8 &&
        next[1] >= 0 &&
        next[1] < 8 &&
        !visited.has(next.toString()) // this entire if condition makes sure we havent already visited it, and it's not out-of-bounds
      ) {
        // add it to the path
        visited.add(next.toString());
        queue.push([next, [...path, next]]);
      }
    }
  }
}

knightMoves([3, 3], [4, 3]);
