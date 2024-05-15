document.addEventListener('DOMContentLoaded', function () {
    const output = document.getElementById('output');
    const input = document.getElementById('input');
    const terminalInput = document.querySelector('.terminal-input'); 
    input.scrollIntoView({ behavior: 'smooth', block: 'end' });
    firstOut = '';
    input.focus();

    input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            firstOut = input.value;
            const command = input.value.toLowerCase();
            input.value = ''; // Clear input field after pressing Enter
            commands(command);
        }
    });

    function commands(cmd) {
        switch (cmd) {
            case 'cheat codes':
                displayInput(firstOut);
                displayInfo(help);
                break;
            case 'reveal identity':
                displayInput(firstOut);
                displayInfo(identity);
                break;
            case 'resume':
                displayInput(firstOut);
                displayInfo(resume);
                break;
            case 'past experience':
                displayInput(firstOut);
                displayInfo(experience);
                break;
            case 'projects':
                displayInput(firstOut);
                displayInfo(projects);
                break;
            case 'academia':
                displayInput(firstOut);
                displayInfo(academia)
            case 'loading':
                displayInput(firstOut);
                displayInfo(loading);
                break;
            case 'github':
                displayInput(firstOut);
                displayInfo(gitHub);
                break;
            case 'cl':
                output.innerHTML = '';
                break;
            default:
                displayInput(firstOut);
                output.innerHTML += `<span class="error-message">Unknown command: ${cmd}</span><br>`;
        }

        //put cursor into terminal input field
        terminalInput.focus();
        terminalInput.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
    
    function displayInput(inputValue) {
        output.innerHTML += '<span class="input-line">http//justincarr.me//  </span> <span class="input-line">' + inputValue + '</span><br>';
    }

    function displayInfo(infoArray) {
        for (let i = 0; i < infoArray.length; i++) {
            output.innerHTML += infoArray[i] + '<br>';
        }
    }



});

help = [

'List of directories: ',
'Reveal Identity       Learn about me - at your own risk', 
'Resume                  See my resume in terminal style',
'Academia               Academic accomplishments',
'Projects                  List of past projects',
'Loading                 Incredible tasks currently being accomplished',
'GitHub                  Trophy room of typing',
'Cheat Codes          See current available directories',
'cl                           Clear output log',

]

identity = [

'WOW, we caught a stalker folks.', 
'Loves sports: playing, betting, and watching',
'Enjoys short walks to the computer and short drives to the gym.',

]

resume = [

'<u>Summary of Qualifications</u>',
'   • Computer Engineering (BASc) student, alongside a business certificate.',
'   • Python, C, C++, SQL, Java, Microsoft Office, MATLAB, SolidWorks, PHP, JS, CSS.',
'   • Strong mathematical skills and ability to problem-solve.',
'   • Strong machine learning and artificial intelligence knowledge.',
'',
'<u>Education</u>',
'Bachelor of Engineering and Applied Science | Queens University', 
'   • Major: Computer Engineering, streamlined in artificial intelligence.',
'Business Certificate | Queens University | 2023-2024',
'',
'<u>Relevant Engineering Projects</u>',
'Digital Systems Engineering Project',
'   • Designed, implemented, and simulated Risc-style computer on Quartus II. Consisted of Risc', 
'     processor, memory, and I/O. Implemented on physical Altera Cyclone V chip.',
'   • Developed a Neural Network and GUI to count calories in workout videos',
'   • Collaborated with 3 engineering students to create a neural network that could predict a workout', 
'     being done and the calories burnt in an input video. Additionally, created web-based front end with a ',
'     database for users.',
'Configured and programmed a small vehicle to navigate autonomously',
'   • Collaborated with 2 engineers to code an Arduino IDE sketch that allows a vehicle we created to', 
'     navigate from a starting point to a target location and back without hitting randomized obstacles.',
'',
'<u>Experience</u>',
'General Laborer | Stevens Quality Home Improvements | June 2023 – August 2023',
'   • Successfully navigated day to day operations/installation of materials required to repair and replace ',
'     exterior home decor. ',
'Pro Shop Staff | Savannah Golf Links | May 2021 – August 2021', 
'   • Managed bookings, merchandise sales, front desk, tracked course pace, and opening and closing', 
'     duties for the course. ',
'Computer engineer | RTG Systems Inc. | May 2022 – August 2022',
'   • Built Database on Microsoft Access, created extensions for AutoCad, automated tedious tasks,', 
'     Individual work.',
'',
'<u>Additional Skills and Information</u>', 
'   • Avid intramural sports participation including volleyball, dodgeball, hockey, and basketball. Love', 
'     team building activities and sports. Participated in fundraising through the Cure Cancer Classic ',
'     which is a student led non-profit organization that raises money for cancer research. Ran a ',
'     construction program in high school to sell wooden chairs and raise money for overhead.'

]

experience = [

'<u>Experience</u>',
'General Laborer | Stevens Quality Home Improvements | June 2023 – August 2023',
'   • Successfully navigated day to day operations/installation of materials required to repair and replace ',
'     exterior home decor. ',
'Pro Shop Staff | Savannah Golf Links | May 2021 – August 2021', 
'   • Managed bookings, merchandise sales, front desk, tracked course pace, and opening and closing', 
'     duties for the course. ',
'Computer engineer | RTG Systems Inc. | May 2022 – August 2022',
'   • Built Database on Microsoft Access, created extensions for AutoCad, automated tedious tasks,', 
'     Individual work.',

]

projects = [

'Queens University Capstone Project.',
'Supervisor - Il-Min Kim',
'',
'   • Web-based Calorie Counter. Uses CNN to determine the workout being done (benchpress, squat, deadlift, or none)',
'     and uses that output along side the users inputted data to do a calories burnt calculation.',
'   • Calculations for calorie prediction were 96.9% accurate in comparison to the gold standard of an apple watch.',
'<a href="Assets/Capstone_Final_Report_Group24.pdf" target="_blank">Final Report PDF</a>',
'',
"Compiler project CMPE-458",
'Primary Instructor - Jahed, Karim',
'',
' • Understand and modify a small but real programming language compiler (“PT Pascal”) to implement a new language',
' • All programming done in Pascal using the PT Pascal compiler itself.',
' • Using the S/SL compiler construction tools (like IBM)',
'<a href="https://github.com/justincarr010101/CMPE-458" target="_blank">Project github repository (compiler)</a>',
'',
'Personal Website',
' • Your already here!',
'<a href="https://github.com/justincarr010101/Personal-Website" target="_blank">Personal Website Public Repository</a>',

]

loading = [

'<u>Coding relevant</u>',
'   • Currently working on this personal website and getting a job',
'   • Complete a machine learning project (still choosing)',
'   • 2 leak code problems a day (goal)',
'',
'<u>Other goals</u>',
'   • Bench 315 (currently at 275 for 6 in reps), (max attempt 300)',
'   • Retrieve mortgage broker license to have opportunities at multiple income streams. (planned date)',
'   • Get comfortable with the process',

]

gitHub = [

'<a href="https://github.com/justincarr010101/CapstoneProject" target="_blank">Github Link</a>',

]
