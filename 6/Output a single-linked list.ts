type ListNode = {
  value: number;
  next: ListNode | null;
};

let list: ListNode = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list: ListNode | null): void {
  if (list === null) return; // Base case: If the list is null, we stop the recursion.

  alert(list.value); // output the current item

  printList(list.next); // do the same for the rest of the list
}

printList(list);
