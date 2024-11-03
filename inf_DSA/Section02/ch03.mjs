// 연결리스트(Linked List) 구현

// 연결리스트의 추상자료형
// 1. 연결리스트의 모든 데이터 출력 = printAll()
// 2. 연결리스트의 모든 데이터 제거
// 3. 원하는 인덱스에 데이터 삽입
// 4. 마지막 데이터 뒤에 데이터를 삽입
// 5. 원하는 인덱스의 데이터를 삭제하는 기능
// 6. 마지막 인덱스의 데이터를 제거하는 기능
// 7. 원하는 인덱스에 있는 데이터를 읽는 기능

import { Node } from "./LinkedList.mjs";

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);

node1.next = node2;
node2.next = node3;

console.log(node1.data);
console.log(node1.next.data);
console.log(node1.next.next.data);