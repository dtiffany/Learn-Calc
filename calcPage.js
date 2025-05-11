console.log("calcPage.js loaded");
window.debugNav = {
    getCurrentPage: getCurrentPageNumber,
    testNavigation: navigateToPage,
    goHome: goHome
};

const isGitHubPages = window.location.host.includes('github.io');
const repoName = 'Learn-Calc'; 
const basePath = window.location.hostname === 'localhost' ? '/' : '/Learn-Calc/';
const pagePath = 'PageList/';

function navigateToPage(pageNumber) {
    window.location.href = `${basePath}${pagePath}page${pageNumber}.html`;
}


function initPageNavigation() {
    // Page navigation buttons (1-10)
    document.querySelectorAll('[data-page]').forEach(button => {
        button.addEventListener('click', (e) => {
            const pageNumber = e.target.getAttribute('data-page');
            navigateToPage(pageNumber);
        });
    });

    // Home button
    document.querySelectorAll('[data-home]').forEach(button => {
        button.addEventListener('click', goHome);
    });

    // Next/Previous buttons
    document.querySelectorAll('[data-next]').forEach(button => {
        button.addEventListener('click', () => {
            const currentPage = getCurrentPageNumber();
            navigateToPage(currentPage + 1);
        });
    });

    document.querySelectorAll('[data-back]').forEach(button => {
        button.addEventListener('click', () => {
            const currentPage = getCurrentPageNumber();
            navigateToPage(currentPage - 1);
        });
    });
}

  // Update your button handlers
function handlePageClick(event) {
    const pageNumber = event.target.dataset.page;
    if (pageNumber) navigateToPage(pageNumber);
}
  
function start() {
    navigateToPage(1);
}

function goHome() {
    window.location.href = `${basePath}index.html`;
}

function next() {
    navigateToPage(getCurrentPageNumber() + 1);
}

function back() {
    const current = getCurrentPageNumber();
    if (current > 1) navigateToPage(current - 1);
    else goHome();
}

// Helper function to get current page number
function getCurrentPageNumber() {
    const currentPath = window.location.pathname;
    const match = currentPath.match(/page(\d+)\.html/);
    return match ? parseInt(match[1]) : 1;
}

document.addEventListener('DOMContentLoaded', initPageNavigation);

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

(function() {       // #1
    // Your page1 object - now scoped to this function
    const page1 = {
        distance: Math.min(window.innerWidth * 0.8, 1000), // 80% of screen or max 1000px
        newDis: "",
        count: 0,
        disCount: 100,
        disDisplay: 100,
        restartCount: 0,

        willyWalk: function() {
            this.count += 1;
            if (this.count > 10) {
                this.distance = 1500;
                this.count = 0;
                this.restartCount += 1;
                if (this.restartCount < 4) {
                    alert("Looks like the blue line is too small to see, let's zoom in");
                } else {
                    alert("At this point Willy is close enough to make it work, but theoretically, would Willy ever make it inside?");
                    location.reload();
                }
            }

            //const oldDistance = this.distance;
            this.distance = this.distance / 2;
            console.log("New distance: ", this.distance);  // Log new distance for debugging

            //const blueWrap = document.getElementById('blueWrap');
           // blueWrap.style.width = this.distance + "px";


            this.newDis = this.distance + "px";
            document.getElementById('blueWrap').style.width = this.newDis;
            
            const blueWrap = document.getElementById('blueWrap');
            blueWrap.style.width = this.newDis;

            // Move the wrapper to the right so it shrinks from the left
            const offset = 1000 - this.distance;
            blueWrap.style.transform = `translateX(${offset}px)`;

            // Willy stays pinned to the left of the wrapper
            const willyLeft = document.getElementById('willyLeft');
            willyLeft.style.transform = `translateX(${offset}px)`;


            this.disCount = this.disCount / 2;
            this.disDisplay = this.roundIfNecessary(this.disCount, 11);

            document.querySelector('#distance-display').textContent = `Distance to Bathroom: ${this.disDisplay} meters`;

            if (typeof TABIsec === 'function') {
                TABIsec();
            }
        },

        roundIfNecessary: function(number, decimalPlaces) {
            let numStr = number.toString();
            let decimalPos = numStr.indexOf('.');
            
            if (decimalPos === -1 || numStr.length - decimalPos - 1 <= decimalPlaces) {
                return number;
            }
            
            return number.toFixed(decimalPlaces);
        }
    };
    // Initialize all buttons
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('blueWrap').style.width = page1.distance + "px";

        const blueWrap = document.getElementById('blueWrap');
        const willyLeft = document.getElementById('willyLeft');
    
        // Set initial width
        blueWrap.style.width = page1.distance + "px";
    
        const walkButton = document.getElementById('WillyWalk');
        if (walkButton) {
            walkButton.addEventListener('click', function() {
                page1.willyWalk();
            });
        }
        
        // Navigation buttons
        const backButton = document.getElementById('backButton');
        if (backButton) {
            backButton.addEventListener('click', goBackPage);
        }
        
        const nextButton = document.getElementById('nextButton');
        if (nextButton) {
            nextButton.addEventListener('click', goNextPage);
        }
    });
    
})();
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
(function() {   // #5
    const page5 = {
        ans1: 4,
        ans2: -1,
        ans3: 1,
        ans4: -4,
        pA1: 0,
        pA2: 0,
        pA3: 0,
        pA4: 0,
        check: 0,

        submit: function() {
            this.check = 0;
            this.pA1 = Number(document.getElementById("red").value);
            this.pA2 = Number(document.getElementById("blue").value);
            this.pA3 = Number(document.getElementById("green").value);
            this.pA4 = Number(document.getElementById("purple").value);
        
            if (this.ans1 === this.pA1) {
                document.getElementById("check1").innerHTML = '<img src="../Pics/check.png" alt="Correct" class="checkmark">';
                this.check += 1;
            }
            else 
            { // Displays X for wrong Answer
                document.getElementById("check1").innerHTML = '<img src="../Pics/X.png" alt="Wrong" class="checkmark">';
            }
            
            if (this.ans2 === this.pA2) {
                document.getElementById("check2").innerHTML = '<img src="../Pics/check.png" alt="Correct" class="checkmark">';
                this.check += 1;
            } 
            else 
            { // Displays X for wrong Answer
                document.getElementById("check2").innerHTML = '<img src="../Pics/X.png" alt="Wrong" class="checkmark">';
            }
        
            if (this.ans3 === this.pA3) {
                document.getElementById("check3").innerHTML = '<img src="../Pics/check.png" alt="Correct" class="checkmark">';
                this.check += 1;
            } 
            else 
            { // Displays X for wrong Answer
                document.getElementById("check3").innerHTML = '<img src="../Pics/X.png" alt="Wrong" class="checkmark">';
            }

            if (this.ans4 === this.pA4) {
                document.getElementById("check4").innerHTML = '<img src="../Pics/check.png" alt="Correct" class="checkmark">';
                this.check += 1;
            } 
            else 
            { // Displays X for wrong Answer
                document.getElementById("check4").innerHTML = '<img src="../Pics/X.png" alt="Wrong" class="checkmark">';
            }

            if (this.check === 4) {
                document.getElementById("nextButton").style.display = 'block';
            }
        }
    };

    window.page5Submit = function() {
        page5.submit();
    };
})();
/*
(function() {   
    const page7 = {
        ans1: 4,
        pA1: 0,
        check: 0,

        submit: function() {
            this.check = 0;
            this.pA1 = Number(document.getElementById("q1").value);
        
            if (this.ans1 === this.pA1) {
                document.getElementById("check1").innerHTML = '<img src="../Pics/check.png" alt="Correct" class="checkmark">';
                this.check += 1;
            }
        
            if (this.check === 1) {
                document.getElementById("nextButton").style.display = 'block';
            }
        }
    };

    window.page7Submit = function() {
        page7.submit();
    };
})();
*/
(function() {       // #8
    const page8 = {
        ans1: 2,
        ans2: 0,
        ans3: -4,
        pA1: 0,
        pA2: 0,
        pA3: 0,
        check: 0,

        submit: function() {
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
                document.getElementById("nextButton").style.display = 'block';
            }
        }
    };

    window.page8Submit = function() {
        console.log("Submit button clicked")
        page8.submit();
    };
})();

/*
(function() {       // #10
    const page10 = {
        ans1: 44,
        pA1: 0,
        check: 0,

        submit: function() {
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

        TF: function(isTrue) {
            if (isTrue) {
                this.check += 1;
                if (this.check === 2) {
                    document.getElementById("check2").innerHTML = '<img src="../Pics/check.png" alt="Correct" class="checkmark">';
                }
                if (this.check === 3) {
                    document.getElementById("check3").innerHTML = '<img src="../Pics/check.png" alt="Correct" class="checkmark">';
                    document.getElementById("nextButton").style.display = 'block';
                }
            }
        }
    };

    window.page10Submit = function() {
        page10.submit();
    };
    
    window.page10TF = function(isTrue) {
        page10.TF(isTrue);
    };
})();
*/