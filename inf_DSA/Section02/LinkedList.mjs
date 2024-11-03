// Node Class
class Node {
    // 생성자 (매개변수 : data(필수 값), next(입력하지 않는 경우 기본값 null) )
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

// LinkedList Class
class LinkedList {
    // 생성자
    constructor(){
        this.head = null;   // head : 연결리스트의 시작 노드를 가르킴
        this.count = 0;   // count : 총 저장된 노드의 수를 저장하는 count 프로퍼티
    }

    // 원하는 인덱스에 데이터를 삽입하는 insertAt() 함수
    // index : 삽입할 위치를 표시, data : index에 삽입할 데이터
    insertAt(index, data) {
        // 1. 연결리스트의 크기보다 크거나 음수위치에 삽입하는 경우 에러 발생
        if(index > this.count || index < 0){
            throw new Error("유효하지 않은 index 입니다.");
        }

        // 2. data로 Node 생성
        let newNode = new Node(data);

        // 3-(1). index == 0 -> 새 Node가 head가 되는 경우
        if(index == 0){
            newNode.next = this.head;   // 새 Node의 next를 현재 head로 지정
            this.head = newNode;        // 현재 head를 새 Node로 지정
        } else {
            // 3-(2). index != 0 -> 새 Node가 head가 아닌 경우

        }
    }
}

export { Node }