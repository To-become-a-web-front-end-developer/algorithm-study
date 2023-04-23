from collections import deque

def bfs(g, s, vs):
    q = deque([s])
    vs[s] = True
    while q:
        v = q.popleft()
        print(v, end=' ')
        for i in g[v]:
            if not vs[i]:
                q.append(i)
                vs[i] = True
g = [
  [],
  [2, 5],
  [1, 3, 4],
  [2],
  [2],
  [1]
]
vs = [False] * 6

bfs(g, 1, vs)
