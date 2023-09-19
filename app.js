cat.addEventListener('change',()=>{
    var category = cat.value;
console.log(category);
function getQuotes() {
    var xhr = new XMLHttpRequest();
    // var category = 'your_category_here'; // Replace with the desired category

    xhr.open('GET', 'https://api.api-ninjas.com/v1/quotes?category=' + category, true);
    xhr.setRequestHeader('X-Api-Key', 'mkDvuLt81Q1C4XI38X2gVg==bKDpNeX5nocbdTwo');

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) { // Request completed
            if (xhr.status === 200) { // Successful response
                var result = JSON.parse(xhr.responseText);
                console.log(result[0]);
                qoutedBy.innerHTML = result[0].author;
                qoute.innerHTML = result[0].quote;
            } else {
                console.error('Error: ', xhr.status, xhr.statusText);
            }
        }
    };

    xhr.send();
}
getQuotes();
});
