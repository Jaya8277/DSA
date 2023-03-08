// To reverse an array in a linked list using JavaScript, you can follow these steps:

// Traverse the linked list to count the number of nodes.
// Create a new array with the same length as the linked list.
// Traverse the linked list again, this time from the head to the tail, and add each node's data to the corresponding index in the new array.
// Set the head of the linked list to the last element in the new array, and set the next pointer of each node to the previous node in the array.

function reverseLinkedListArray(linkedList) {
    let node = linkedList.head;
    let length = 0;
    
    // Count the number of nodes in the linked list
    while (node !== null) {
      length++;
      node = node.next;
    }
    
    // Create a new array with the same length as the linked list
    const arr = new Array(length);
    
    // Traverse the linked list and add each node's data to the corresponding index in the new array
    node = linkedList.head;
    for (let i = length - 1; i >= 0; i--) {
      arr[i] = node.data;
      node = node.next;
    }
    
    // Set the head of the linked list to the last element in the new array
    linkedList.head = { data: arr[length - 1], next: null };
    node = linkedList.head;
    
    // Set the next pointer of each node to the previous node in the array
    for (let i = length - 2; i >= 0; i--) {
      node.next = { data: arr[i], next: null };
      node = node.next;
    }
  }
  