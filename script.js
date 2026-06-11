function bubbleSort(arr) {

    let a = [...arr];

    for(let i = 0; i < a.length; i++) {

        for(let j = 0; j < a.length - i - 1; j++) {

            if(a[j] > a[j + 1]) {

                [a[j], a[j + 1]] =
                [a[j + 1], a[j]];
            }
        }
    }

    return a;
}

function mergeSort(arr) {

    if(arr.length <= 1)
        return arr;

    let mid = Math.floor(arr.length / 2);

    let left =
        mergeSort(arr.slice(0, mid));

    let right =
        mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {

    let result = [];
    let i = 0;
    let j = 0;

    while(i < left.length &&
          j < right.length) {

        if(left[i] < right[j]) {
            result.push(left[i]);
            i++;
        }
        else {
            result.push(right[j]);
            j++;
        }
    }

    return result
        .concat(left.slice(i))
        .concat(right.slice(j));
}

function compareSorts() {

    let input =
        document.getElementById("numbers").value;

    if(input.trim() === "") {

        alert("Please enter numbers");
        return;
    }

    let numbers =
        input.split(",")
             .map(num => Number(num.trim()));

    let start =
        performance.now();

    bubbleSort(numbers);

    let bubbleTime =
        performance.now() - start;

    start =
        performance.now();

    mergeSort(numbers);

    let mergeTime =
        performance.now() - start;

    document.getElementById("result")
    .innerHTML = `

    <div class="card">
        <h2>Bubble Sort</h2>
        <p><strong>Time Complexity:</strong> O(n²)</p>
        <p><strong>Execution Time:</strong>
        ${bubbleTime.toFixed(6)} ms</p>
    </div>

    <div class="card">
        <h2>Merge Sort</h2>
        <p><strong>Time Complexity:</strong> O(n log n)</p>
        <p><strong>Execution Time:</strong>
        ${mergeTime.toFixed(6)} ms</p>
    </div>
    `;
}