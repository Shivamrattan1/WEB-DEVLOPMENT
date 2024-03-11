def heappush(heap, element):
    heap.append(element)
    _sift_up(heap, len(heap) - 1)

def _sift_up(heap, index):
    while index > 0:
        parent_index = (index - 1) // 2
        if heap[parent_index] > heap[index]:  # For min heap, use <
            heap[parent_index], heap[index] = heap[index], heap[parent_index]
            index = parent_index
        else:
            break
def heappop(heap):
    if len(heap) == 0:
        raise IndexError("pop from an empty heap")
    min_element = heap[0]  # The minimum element is always at index 0 in a min-heap
    heap[0] = heap[-1]  # Replace the root with the last element
    del heap[-1]  # Remove the last element from the heap
    _sift_down(heap, 0)  # Sift down the new root to restore heap property
    return min_element

def _sift_down(heap, index):
    while True:
        left_child_index = 2 * index + 1
        right_child_index = 2 * index + 2
        smallest = index
        if left_child_index < len(heap) and heap[left_child_index] < heap[smallest]:  # For max heap, use >
            smallest = left_child_index
        if right_child_index < len(heap) and heap[right_child_index] < heap[smallest]:  # For max heap, use >
            smallest = right_child_index
        if smallest == index:
            break
        heap[index], heap[smallest] = heap[smallest], heap[index]
        index = smallest
