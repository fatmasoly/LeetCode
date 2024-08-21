class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [1] * n
    
    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]
    
    def union(self, x, y):
        rootX = self.find(x)
        rootY = self.find(y)
        if rootX != rootY:
            if self.rank[rootX] > self.rank[rootY]:
                self.parent[rootY] = rootX
            elif self.rank[rootX] < self.rank[rootY]:
                self.parent[rootX] = rootY
            else:
                self.parent[rootY] = rootX
                self.rank[rootX] += 1

class Solution(object):
    def regionsBySlashes(self, grid):
        """
        :type grid: List[str]
        :rtype: int
        """
        n = len(grid)
        uf = UnionFind(4 * n * n)
        
        for i in range(n):
            for j in range(n):
                index = 4 * (i * n + j)
                if grid[i][j] == '/':
                    uf.union(index + 0, index + 3)
                    uf.union(index + 1, index + 2)
                elif grid[i][j] == '\\':
                    uf.union(index + 0, index + 1)
                    uf.union(index + 2, index + 3)
                else:
                    uf.union(index + 0, index + 1)
                    uf.union(index + 1, index + 2)
                    uf.union(index + 2, index + 3)
                
                if i > 0:
                    uf.union(index + 0, index - 4 * n + 2)
                if j > 0:
                    uf.union(index + 3, index - 4 + 1)
        
        regions = sum(1 for i in range(4 * n * n) if uf.find(i) == i)
        return regions
