const passwords = {
    1: [
        { password: "12345", strength: "easy" },
        { password: "abcdef", strength: "easy" },
        { password: "qwerty", strength: "easy" },
        { password: "hello123", strength: "moderate" },
        { password: "secureP@ss", strength: "moderate" },
        { password: "1a2b3c4d", strength: "moderate" },
        { password: "P@$$w0rd123", strength: "strong" },
        { password: "XyZ!29#fG", strength: "strong" },
        { password: "mY#SuperP@55", strength: "strong" },
        { password: "mypassword", strength: "easy" },
        { password: "testpass", strength: "easy" },
        { password: "welcome1", strength: "moderate" },
        { password: "ilovecoding", strength: "moderate" },
        { password: "Passw0rd$", strength: "strong" },
        { password: "Z9x#P!3l", strength: "strong" }
    ],
    2: [
        { password: "admin", strength: "easy" },
        { password: "password123", strength: "easy" },
        { password: "abc123", strength: "easy" },
        { password: "P@ssw0rd!", strength: "moderate" },
        { password: "LetMeIn123", strength: "moderate" },
        { password: "RedDragon88", strength: "moderate" },
        { password: "S3cur3C0d3!", strength: "strong" },
        { password: "Qwerty#Secure$", strength: "strong" },
        { password: "!N3v3rGue$$Th1s", strength: "strong" },
        { password: "iloveyou", strength: "easy" },
        { password: "sunshine", strength: "easy" },
        { password: "football22", strength: "moderate" },
        { password: "Spart@n99", strength: "moderate" },
        { password: "MyP@ssw0rdIsStrong!", strength: "strong" },
        { password: "T!gerF@ce12", strength: "strong" }
    ],
    3: [
        { password: "guest", strength: "easy" },
        { password: "letmein", strength: "easy" },
        { password: "monkey", strength: "easy" },
        { password: "B3tterP@ss", strength: "moderate" },
        { password: "S3curityM@ster", strength: "moderate" },
        { password: "MyDogRocks88", strength: "moderate" },
        { password: "H4ckerProof99!", strength: "strong" },
        { password: "Cyb3rS3cur3!", strength: "strong" },
        { password: "D0ntGue$$Th1s#", strength: "strong" },
        { password: "welcome", strength: "easy" },
        { password: "123abc", strength: "easy" },
        { password: "Baseb@ll44", strength: "moderate" },
        { password: "Tr0ub@dor&3", strength: "moderate" },
        { password: "UltraSecure@Pass99", strength: "strong" },
        { password: "N0tH@ckable#", strength: "strong" }
    ]
};

let currentSet = [];
let currentPasswordIndex = 0;
let score = 0;

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

function startGame(setNumber) {
    console.log("Game started with set:", setNumber);

    currentSet = shuffleArray([...passwords[setNumber]]);
    currentPasswordIndex = 0;
    score = 0;

    document.getElementById("set-selection").style.display = "none";
    document.getElementById("game-area").style.display = "block";

    document.getElementById("intro-message").style.display = "block"; // Show intro message
    document.getElementById("password-display").innerText = "Get ready..."; // Show placeholder text
    document.getElementById("score-display").innerText = "";

    setTimeout(() => {
        document.getElementById("intro-message").style.display = "none"; // Hide intro message
        showNextPassword();
    }, 2000);
}

function showNextPassword() {
    if (currentPasswordIndex < currentSet.length) {
        let currentPassword = currentSet[currentPasswordIndex];
        document.getElementById("password-display").innerText = "Password: " + currentPassword.password;
    } else {
        endGame();
    }
}

function checkStrength(selectedStrength) {
    let currentPassword = currentSet[currentPasswordIndex];

    if (selectedStrength === currentPassword.strength) {
        score++;
    }

    currentPasswordIndex++;

    if (currentPasswordIndex < currentSet.length) {
        showNextPassword();
    } else {
        endGame();
    }
}

function endGame() {
    document.getElementById("password-display").innerText = "";

    let message = score >= 12 ? `🎉 You passed! Score: ${score}/15` : `❌ Game Over! Score: ${score}/15`;
    document.getElementById("score-display").innerText = message;
}
