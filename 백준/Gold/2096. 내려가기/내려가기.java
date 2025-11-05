import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());

        int[][] map = new int[N][3];
        for (int i = 0; i < N; i++) {
            String[] line = br.readLine().split(" ");
            for (int j = 0; j < 3; j++) {
                map[i][j] = Integer.parseInt(line[j]);
            }
        }
        br.close();

        int[][] maxDp = new int[N][3];
        int[][] minDp = new int[N][3];

        for (int i = 0; i < 3; i++) {
            maxDp[0][i] = map[0][i];
            minDp[0][i] = map[0][i];
        }

        for (int i = 1; i < N; i++) {
            maxDp[i][0] = Math.max(maxDp[i-1][0], maxDp[i-1][1]) + map[i][0];
            maxDp[i][1] = Math.max(Math.max(maxDp[i-1][0], maxDp[i-1][1]), maxDp[i-1][2]) + map[i][1];
            maxDp[i][2] = Math.max(maxDp[i-1][1], maxDp[i-1][2]) + map[i][2];

            minDp[i][0] = Math.min(minDp[i-1][0], minDp[i-1][1]) + map[i][0];
            minDp[i][1] = Math.min(Math.min(minDp[i-1][0], minDp[i-1][1]), minDp[i-1][2]) + map[i][1];
            minDp[i][2] = Math.min(minDp[i-1][1], minDp[i-1][2]) + map[i][2];
        }

        int maxResult = Math.max(Math.max(maxDp[N-1][0], maxDp[N-1][1]), maxDp[N-1][2]);
        int minResult = Math.min(Math.min(minDp[N-1][0], minDp[N-1][1]), minDp[N-1][2]);

        System.out.println(maxResult + " " + minResult);
    }
}