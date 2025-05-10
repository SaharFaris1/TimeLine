
// addEventListener لان بيكون عندي حدث ،  اضيف 
document.getElementById("commentForm").addEventListener('submit', function(event) {
    event.preventDefault();
// (اسم المستخدم وتعليقه)القيم الي ابغى ارجعها
    let name = document.getElementById("fullName").value;
    let comment = document.getElementById("commentInput").value;


    // Object يمثل القيم الجديده 
    let newComment = {
        name: name,
        text: comment,
        date: new Date().toLocaleString()
    };
// يحولها ل json
    //  يسترجع التعليقات ويحطها في مصفوفه

    let comments = JSON.parse(localStorage.getItem("comments")) || [];

// يضيف التعليق الجديد فالمصفوفه
    comments.push(newComment);

    //  يحفظ المصفوفة المحدثة من التعليقات في localStorage بعد تحويلها إلى سلسلة JSON.

    localStorage.setItem("comments", JSON.stringify(comments));
// عشان يمسح النص
    document.getElementById("fullName").value = "";
    document.getElementById("commentInput").value = "";
// يعرض التعليق 
    displayComments();
});


// فنكشن لعرض الكومنت
function displayComments() {
    let commentsContainer = document.getElementById("commentsContainer");
    commentsContainer.innerHTML = ""; 
//  يسترجع التعليقات من localStorage
    let comments = JSON.parse(localStorage.getItem("comments")) || [];
 // عشان يعرض التعليقات كلها الي فالمصفوفه
    comments.forEach(comment => {

        let commentDiv = document.createElement("div");

     commentDiv.innerHTML = `<p><strong>${comment.name}  (${comment.date})</strong>:<br> ${comment.text}</p>`;
        commentsContainer.appendChild(commentDiv);
    });
}

