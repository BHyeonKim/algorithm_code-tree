const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n');

for(let tc = 1 ; tc < input.length ; tc += 2){
  const N = +input[tc];
  const students = [0,...input[tc+1].split(' ').map(Number)]
  const cycle = Array(N+1).fill(false)
  const finished = Array(N+1).fill(false) 
  cycle[0] = true

  const dfs = (next, visitedStudents, visitedSet) => {
    if(cycle[next] || finished[next]) return;

    if(visitedSet.has(next)){
      const idx = visitedStudents.indexOf(next);
      for(let i = idx; i < visitedStudents.length; i++){
        cycle[visitedStudents[i]] = true;
      }
      return;
    }

    visitedStudents.push(next)
    visitedSet.add(next);
    dfs(students[next], visitedStudents, visitedSet);
    visitedStudents.pop()
    visitedSet.delete(next);
    finished[next] = true; 
  }

  for(let i = 1 ; i < students.length ; i++){
    if(cycle[i] || finished[i]) continue; 
    dfs(students[i], [i], new Set([i])) 
  }

  console.log(cycle.filter(x => !x).length)
}