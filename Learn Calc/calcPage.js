function start() { // Just for home page
    window.location.href = "pageList/page1.html";
}

function home() { // Takes user to Home Page
    window.location.href = "../homePage.html"
}

function next() { // Go to the next page
    
    let pgN = getPageCount();

    pgN += 1;

    let imgPath = "page" + pgN + ".html";  

    //console.log("Navigating to: " + imgPath);  // Log the path to the console for debugging

    window.location.href = imgPath;


}

function back() { // Go to previous page
    let pgN = getPageCount();

    pgN -= 1;

    let imgPath = "page" + pgN + ".html";  

    //console.log("Navigating to: " + imgPath);  // Log the path to the console for debugging

    window.location.href = imgPath;
}

function getPageCount() { // Used to retrieve the page #

    let pageName = window.location.pathname.split("/").pop(); // returns page#.html

    let pgCount = Number(pageName.match(/\d+/)[0]); //Extracts the #

    return pgCount
}

function TABI() { //Think ABout It, reveal "Next" button
    setTimeout(function() {
        document.getElementById("nextButton").style.display = 'block';
    }, 2000);
}

function TABIpic() {//Think ABout It, reveal image instead of next button
    setTimeout(function() {
        document.getElementById("hiddenPic").style.display = 'flex';
    }, 2000);

}

function TABIsec() {//Think ABout It, reveal section of content
    setTimeout(function() {
        document.getElementById("secretSection").style.display = 'block';
    }, 2000);
}

function TF(isCor, checkN, isDone) { //True or False (isItCorrect, Checkmark #, showNextButton)
    let checkName = "check" + checkN;
    
    if (isCor) {
        document.getElementById(checkName).innerHTML = '<img src="../Pics/check.png" alt="Correct" class="checkmark">';
    }
    else {
        document.getElementById(checkName).innerHTML = '<img src="../Pics/X.png" alt="Wrong" class="checkmark">';
    }

    if (isDone) {
        document.getElementById("nextButton").style.display = 'block'; // Show the "Next" button
    }
}

function oneSub(Ans, isDone) { // 1 Q Submit (Answer, T/F display Next button)
    let pA = 0

    pA = Number(document.getElementById("q1").value);
    if (Ans === pA) {
        document.getElementById("check1").innerHTML = '<img src="../Pics/check.png" alt="Correct" class="checkmark">';
    }
    else { // Displays X for wrong Answer
        document.getElementById("check1").innerHTML = '<img src="../Pics/X.png" alt="Wrong" class="checkmark">';
    }
    if (isDone) {
        document.getElementById("nextButton").style.display = 'block'; // Show the "Next" button
    }
}

function twoSub(Ans1, Ans2, isDone) { // 2 Q Submit (Answer1, Answer2, T/F display Next button)
    let pa1 = 0;
    let pa2 = 0;
    let check = 0;

    pa1 = Number(document.getElementById("q1").value);
    pa2 = Number(document.getElementById("q2").value);

    if (Ans1 === pa1) { // Displays Check for right Answer
        document.getElementById("check1").innerHTML = '<img src="../Pics/check.png" alt="Correct" class="checkmark">';
        check += 1;
    }
    else { // Displays X for wrong Answer
        document.getElementById("check1").innerHTML = '<img src="../Pics/X.png" alt="Wrong" class="checkmark">';
    }
    if (Ans2 === pa2) {// Displays Check for right Answer
        document.getElementById("check2").innerHTML = '<img src="../Pics/check.png" alt="Correct" class="checkmark">';
        check += 1;
    }
    else { // Displays X for wrong Answer
        document.getElementById("check2").innerHTML = '<img src="../Pics/X.png" alt="Wrong" class="checkmark">';
    }
    if (check === 2 && isDone === true) {
        document.getElementById("nextButton").style.display = 'block'; // Show the "Next" button
    }
}

function threeSub(Ans1, Ans2, Ans3, isDone) { // 3 Q Submit (Ans1, Ans2, Ans3, T/F Next button)
    let pa1 = 0;
    let pa2 = 0;
    let pa3 = 0;
    let check = 0;

    pa1 = Number(document.getElementById("q1").value);
    pa2 = Number(document.getElementById("q2").value);
    pa3 = Number(document.getElementById("q3").value);

    if (Ans1 === pa1) { // Displays Check for right Answer
        document.getElementById("check1").innerHTML = '<img src="../Pics/check.png" alt="Correct" class="checkmark">';
        check += 1;
    }
    else { // Displays X for wrong Answer
        document.getElementById("check1").innerHTML = '<img src="../Pics/X.png" alt="Wrong" class="checkmark">';
    }
    if (Ans2 === pa2) {// Displays Check for right Answer
        document.getElementById("check2").innerHTML = '<img src="../Pics/check.png" alt="Correct" class="checkmark">';
        check += 1;
    }
    else { // Displays X for wrong Answer
        document.getElementById("check2").innerHTML = '<img src="../Pics/X.png" alt="Wrong" class="checkmark">';
    }
    if (Ans3 === pa3) {// Displays Check for right Answer
        document.getElementById("check3").innerHTML = '<img src="../Pics/check.png" alt="Correct" class="checkmark">';
        check += 1;
    }
    else { // Displays X for wrong Answer
        document.getElementById("check3").innerHTML = '<img src="../Pics/X.png" alt="Wrong" class="checkmark">';
    }
    if (check === 3 && isDone === true) {
        document.getElementById("nextButton").style.display = 'block'; // Show the "Next" button
    }
}

let page1 = { // Willy Walk Function
    distance: 1500, // Size of blue line in pixels
    newDis: "",
    count: 0,
    disCount: 100,
    disDisplay: 100, // Number the user sees representing distance, rounded to 10 decimal points
    restartCount: 0,

    willyWalk: function () {
        this.count += 1;
        if (this.count > 10) {
            this.distance = 1500;
            this.count = 0;
            this.restartCount += 1;
            if (this.restartCount < 4) {
                alert("Looks like the blue line is to small to see, let's zoom in");
            }
            else {
                alert("At this point Willy is close enough to make it work, but theoretically, would Willy ever make it inside?")
                location.reload();
            }
        }
        this.distance = this.distance / 2;
        this.newDis = this.distance + "px";
        document.querySelector('.blue-line').style.width = this.newDis;
        this.disCount = this.disCount / 2;
        this.disDisplay = this.roundIfNecessary(this.disCount, 11); // roounds to 10 decimal string


        document.querySelector('#distance-display').textContent = `Distance to Bathroom: ${this.disDisplay} meters`;

        
    },

    roundIfNecessary: function (number, decimalPlaces) {
        // Convert number to a string
        let numStr = number.toString();
        
        // Find the position of the decimal point
        let decimalPos = numStr.indexOf('.');
        
        // If there is no decimal point or the number has fewer decimal places than required, return the number as is
        if (decimalPos === -1 || numStr.length - decimalPos - 1 <= decimalPlaces) {
            return number;
        }
        
        // Otherwise, round the number to the specified decimal places
        return number.toFixed(decimalPlaces);

    }
};
/*
let page2 = { // 3 Ans
    // Answers
    ans1: 1,
    ans2: -1,
    ans3: 3,
    // Player answers
    pA1: 0,
    pA2: 0,
    pA3: 0,
    // Check to see if all are complete
    check: 0,



    submit: function () {
        this.check = 0;
        this.pA1 = Number(document.getElementById("q1").value);
        this.pA2 = Number(document.getElementById("q2").value);
        this.pA3 = Number(document.getElementById("q3").value);
    
        if (this.ans1 === this.pA1) {
            document.getElementById("check1").innerHTML = '<img src="../Pics/check.png" alt="Correct" class="checkmark">';
            this.check += 1;
        }
    
        
        if (this.ans2 === this.pA2) {
            document.getElementById("check2").innerHTML = '<img src="../Pics/check.png" alt="Correct" class="checkmark">';
            this.check += 1;
        }
    
        if (this.ans3 === this.pA3) {
            document.getElementById("check3").innerHTML = '<img src="../Pics/check.png" alt="Correct" class="checkmark">';
            this.check += 1;
        }

        if (this.check === 3) {
            document.getElementById("nextButton").style.display = 'block'; // Show the "Next" button
        
        }
    },

    firstBack: function () {
        //Seperate back function to go to home page
        window.location.href = "../homePage.html"
    }


};
*/
/*
let page4 = { //2 Answers
    //Answers
    ans1: 2,
    ans2: -2,
    //Player Answers
    pA1: 0,
    pA2: 0,

    check: 0,


    submit: function () {
        this.check = 0;
        this.pA1 = Number(document.getElementById("red").value);
        this.pA2 = Number(document.getElementById("blue").value);

        if (this.ans1 === this.pA1) {
            document.getElementById("check1").innerHTML = '<img src="../Pics/check.png" alt="Correct" class="checkmark">';
            this.check += 1;
        }
    
        
        if (this.ans2 === this.pA2) {
            document.getElementById("check2").innerHTML = '<img src="../Pics/check.png" alt="Correct" class="checkmark">';
            this.check += 1;
        }

        if (this.check === 2) {
            document.getElementById("nextButton").style.display = 'block'; // Show the "Next" button
        }


    }
};
*/
let page5 = { // 4 Ans
    // Answers
    ans1: 4,
    ans2: -1,
    ans3: 1,
    ans4: -4,
    // Player answers
    pA1: 0,
    pA2: 0,
    pA3: 0,
    pA4: 0,
    // Check to see if all are complete
    check: 0,



    submit: function () {
        this.check = 0;
        this.pA1 = Number(document.getElementById("red").value);
        this.pA2 = Number(document.getElementById("blue").value);
        this.pA3 = Number(document.getElementById("green").value);
        this.pA4 = Number(document.getElementById("purple").value);
    
        if (this.ans1 === this.pA1) {
            document.getElementById("check1").innerHTML = '<img src="../Pics/check.png" alt="Correct" class="checkmark">';
            this.check += 1;
        }
    
        
        if (this.ans2 === this.pA2) {
            document.getElementById("check2").innerHTML = '<img src="../Pics/check.png" alt="Correct" class="checkmark">';
            this.check += 1;
        }
    
        if (this.ans3 === this.pA3) {
            document.getElementById("check3").innerHTML = '<img src="../Pics/check.png" alt="Correct" class="checkmark">';
            this.check += 1;
        }

        if (this.ans4 === this.pA4) {
            document.getElementById("check4").innerHTML = '<img src="../Pics/check.png" alt="Correct" class="checkmark">';
            this.check += 1;
        }

        if (this.check === 4) {
            document.getElementById("nextButton").style.display = 'block'; // Show the "Next" button
        
        }
    },

};
/*
let page7 = { // 1 Ans
   //Answers
   ans1: 4,
   //Player Answers
   pA1: 0,

   check: 0,


   submit: function () {
       this.check = 0;
       this.pA1 = Number(document.getElementById("q1").value);
      

       if (this.ans1 === this.pA1) {
           document.getElementById("check1").innerHTML = '<img src="../Pics/check.png" alt="Correct" class="checkmark">';
           this.check += 1;
       }
   

       if (this.check === 1) {
           document.getElementById("nextButton").style.display = 'block'; // Show the "Next" button
       
       }


   }
};
*/
let page8 = { // 3 ans
    // Answers
    ans1: 2,
    ans2: 0,
    ans3: -4,
    
    // Player answers
    pA1: 0,
    pA2: 0,
    pA3: 0,

    // Check to see if all are complete
    check: 0,



    submit: function () {
        this.check = 0;
        this.pA1 = Number(document.getElementById("q1").value);
        this.pA2 = Number(document.getElementById("q2").value);
        this.pA3 = Number(document.getElementById("q3").value);
        
    
        if (this.ans1 === this.pA1) {
            document.getElementById("check1").innerHTML = '<img src="../Pics/check.png" alt="Correct" class="checkmark">';
            this.check += 1;
        }
    
        
        if (this.ans2 === this.pA2) {
            document.getElementById("check2").innerHTML = '<img src="../Pics/check.png" alt="Correct" class="checkmark">';
            this.check += 1;
        }
    
        if (this.ans3 === this.pA3) {
            document.getElementById("check3").innerHTML = '<img src="../Pics/check.png" alt="Correct" class="checkmark">';
            this.check += 1;
        }


        if (this.check === 3) {
            document.getElementById("nextButton").style.display = 'block'; // Show the "Next" button
        
        }
    },

};


let page10 = { // 1 Ans, 2 T/F
    //Answers
    ans1: 44,
    //Player Answers
    pA1: 0,
 
    check: 0,
 
 
    submit: function () {
        this.check = 0;
        this.pA1 = Number(document.getElementById("q1").value);
       
 
        if (this.ans1 === this.pA1) {
            document.getElementById("check1").innerHTML = '<img src="../Pics/check.png" alt="Correct" class="checkmark">';
            this.check += 1;
        }
    
 
        if (this.check === 1) {
            document.getElementById("hiddenSection").style.display = 'block';
        }
 
 
    },

    TF: function (isTrue) {
        if (isTrue) {
            this.check += 1;
            if (this.check === 2) {
                document.getElementById("check2").innerHTML = '<img src="../Pics/check.png" alt="Correct" class="checkmark">';
            }
            if (this.check === 3) {
                document.getElementById("check3").innerHTML = '<img src="../Pics/check.png" alt="Correct" class="checkmark">';
                document.getElementById("nextButton").style.display = 'block'; // Show the "Next" button
            }
        }

    }
 };