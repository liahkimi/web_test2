const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', function() {
    const task = prompt('할일을 입력하세요:');
    if (task !== null ) {
        const taskItem = document.createElement('div');
        taskItem.className = 'task-item'; 

        // 체크박스 생성
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        taskItem.appendChild(checkbox);

        // 내용 생성
        const span = document.createElement('span');
        span.textContent = task;
        taskItem.appendChild(span);

        // 버튼 생성
        const editButton = document.createElement('button');
        editButton.textContent = '삭제';
        editButton.addEventListener('click', function() {
      
        });
        taskItem.appendChild(editButton);

        // taskList <div>에 추가
        taskList.appendChild(taskItem);
    } else {
        alert('할일을 입력하지 않았습니다.');
    }
});
