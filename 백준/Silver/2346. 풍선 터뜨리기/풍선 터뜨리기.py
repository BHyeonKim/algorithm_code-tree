N = int(input())
balloons = list(map(int, input().split()))

visited = [False] * N

balloon_index = 0
count = 0
ans = ''

while True:
    ans += str(balloon_index + 1) + ' '
    move = balloons[balloon_index]
    visited[balloon_index] = True
    count += 1

    if count == N:
        break

    move_count = 0
    next_index = balloon_index

    while move_count < abs(move):
        if move > 0:
            next_index += 1
            if next_index >= N:
                next_index = 0
            if visited[next_index]:
                continue
            move_count += 1
        elif move < 0:
            next_index -= 1
            if next_index < 0:
                next_index = N - 1
            if visited[next_index]:
                continue
            move_count += 1

    balloon_index = next_index

print(ans.strip())