E, S, M = map(int, input().split())

earth = 1
sun = 1
moon = 1
ans = 1

while True:
    if earth == E and sun == S and moon == M:
        break

    earth += 1
    sun += 1
    moon += 1
    ans += 1

    if earth > 15:
        earth = 1

    if sun > 28:
        sun = 1

    if moon > 19:
        moon = 1

print(ans)