class Solution(object):
    def maxProbability(self, n, edges, succProb, start, end):
        graph = defaultdict(list)
        for i, (a, b) in enumerate(edges):
            graph[a].append((b, succProb[i]))
            graph[b].append((a, succProb[i]))
        
        max_heap = [(-1.0, start)]
        max_prob = [0.0] * n
        max_prob[start] = 1.0
        
        while max_heap:
            prob, node = heapq.heappop(max_heap)
            prob = -prob
            
            if node == end:
                return prob
            
            for neighbor, edge_prob in graph[node]:
                new_prob = prob * edge_prob
                if new_prob > max_prob[neighbor]:
                    max_prob[neighbor] = new_prob
                    heapq.heappush(max_heap, (-new_prob, neighbor))
        
        return 0.0