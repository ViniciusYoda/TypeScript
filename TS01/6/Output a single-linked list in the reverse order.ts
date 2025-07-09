type ListNode2 = {
  value: number;
  next: ListNode2 | null;
};

let list2: ListNode2 = {
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

function printReverseList(list2: ListNode2 | null): void {
  let arr: number[] = [];
  let tmp: ListNode2 | null = list2;

  // Percorrendo a lista e armazenando os valores em um array
  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }

  // Imprimindo os valores do array na ordem inversa
  for (let i = arr.length - 1; i >= 0; i--) {
    alert(arr[i]);
  }
}

printReverseList(list2);
