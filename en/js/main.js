var i = -1;

function Answer(ans) {
    var q = qdb[i];

    document.getElementById("answer").className = document.getElementById("answer").className.replace(" hide", "");
    document.getElementById("nextBtn").removeAttribute("disabled");
    document.getElementById("trueBtn").setAttribute("disabled", true);
    document.getElementById("falseBtn").setAttribute("disabled", true);

    var txt = "Cevap: <span class=\"";
    txt += q.correct ? "green-text\">Doğru</span>" : "red-text\">Yanlış</span>";
    document.getElementById("correct").innerHTML = txt;
    document.getElementById("correct").className = document.getElementById("correct").className.replace(" text-green", "text-red");
    document.getElementById("correct").className = document.getElementById("correct").className.replace(" hide", "");


}

function Next() {
    i++;

    var q = qdb[i];

    document.getElementById("questionNumber").innerHTML = "Question " + (i + 1) + ":";
    document.getElementById("questionText").innerHTML = q.question;
    document.getElementById("answer").innerHTML = q.answer;

    document.getElementById("answer").className += " hide";
    document.getElementById("correct").className += " hide";
    document.getElementById("nextBtn").setAttribute("disabled", true);
    document.getElementById("trueBtn").removeAttribute("disabled");
    document.getElementById("falseBtn").removeAttribute("disabled");
}