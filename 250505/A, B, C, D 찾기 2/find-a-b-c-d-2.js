const fs = require('fs');
const arr = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number).sort((a, b) => a - b);

const visited = Array(15).fill(false);
let isAnswerExists = false;

for (let indexA = 0; indexA < 15; indexA++) {
    visited[indexA] = true;
    const A = arr[indexA];

    for (let indexB = 0; indexB < 15; indexB++) {
        if (visited[indexB]) continue;
        visited[indexB] = true;
        const B = arr[indexB];

        const index_AB = arr.findIndex((val, idx) => val === A + B && !visited[idx]);
        if (index_AB === -1) {
            visited[indexB] = false;
            continue;
        }
        visited[index_AB] = true;

        for (let indexC = 0; indexC < 15; indexC++) {
            if (visited[indexC]) continue;
            visited[indexC] = true;
            const C = arr[indexC];

            const index_BC = arr.findIndex((val, idx) => val === B + C && !visited[idx]);
            if (index_BC === -1) {
                visited[indexC] = false;
                continue;
            }
            visited[index_BC] = true;

            const index_AC = arr.findIndex((val, idx) => val === A + C && !visited[idx]);
            if (index_AC === -1) {
                visited[index_BC] = false;
                visited[indexC] = false;
                continue;
            }
            visited[index_AC] = true;

            const index_ABC = arr.findIndex((val, idx) => val === A + B + C && !visited[idx]);
            if (index_ABC === -1) {
                visited[index_AC] = false;
                visited[index_BC] = false;
                visited[indexC] = false;
                continue;
            }
            visited[index_ABC] = true;

            for (let indexD = 0; indexD < 15; indexD++) {
                if (visited[indexD]) continue;
                visited[indexD] = true;
                const D = arr[indexD];

                const index_CD = arr.findIndex((val, idx) => val === C + D && !visited[idx]);
                if (index_CD === -1) {
                    visited[indexD] = false;
                    continue;
                }
                visited[index_CD] = true;

                const index_AD = arr.findIndex((val, idx) => val === A + D && !visited[idx]);
                if (index_AD === -1) {
                    visited[index_CD] = false;
                    visited[indexD] = false;
                    continue;
                }
                visited[index_AD] = true;

                const index_BD = arr.findIndex((val, idx) => val === B + D && !visited[idx]);
                if (index_BD === -1) {
                    visited[index_AD] = false;
                    visited[index_CD] = false;
                    visited[indexD] = false;
                    continue;
                }
                visited[index_BD] = true;

                const index_ABD = arr.findIndex((val, idx) => val === A + B + D && !visited[idx]);
                if (index_ABD === -1) {
                    visited[index_BD] = false;
                    visited[index_AD] = false;
                    visited[index_CD] = false;
                    visited[indexD] = false;
                    continue;
                }
                visited[index_ABD] = true;

                const index_ACD = arr.findIndex((val, idx) => val === A + C + D && !visited[idx]);
                if (index_ACD === -1) {
                    visited[index_ABD] = false;
                    visited[index_BD] = false;
                    visited[index_AD] = false;
                    visited[index_CD] = false;
                    visited[indexD] = false;
                    continue;
                }
                visited[index_ACD] = true;

                const index_BCD = arr.findIndex((val, idx) => val === B + C + D && !visited[idx]); // 수정됨
                if (index_BCD === -1) {
                    visited[index_ACD] = false;
                    visited[index_ABD] = false;
                    visited[index_BD] = false;
                    visited[index_AD] = false;
                    visited[index_CD] = false;
                    visited[indexD] = false;
                    continue;
                }
                visited[index_BCD] = true;

                if (A + B + C + D === arr[14]) {
                    console.log(`${A} ${B} ${C} ${D}`);
                    isAnswerExists = true;
                    break;
                }

                visited[index_BCD] = false;
                visited[index_ACD] = false;
                visited[index_ABD] = false;
                visited[index_BD] = false;
                visited[index_AD] = false;
                visited[index_CD] = false;
                visited[indexD] = false;
            }

            if (isAnswerExists) break;
            visited[index_ABC] = false;
            visited[index_AC] = false;
            visited[index_BC] = false;
            visited[indexC] = false;
        }

        if (isAnswerExists) break;
        visited[index_AB] = false;
        visited[indexB] = false;
    }

    if (isAnswerExists) break;
    visited[indexA] = false;
}
