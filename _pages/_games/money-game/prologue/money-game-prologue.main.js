// const story_line = {
//     "Chapter 1": {
//         "Hospital": {
//             style: {
//                 background: "url(/_pages/_games/money-game/prologue/images/background-hospital.png)",
//                 music: "/_pages/_games/money-game/prologue/soundscape/tracks/Hopeless - Jimena Contreras.mp3",
//                 sounds: ""
//             },
//             slides: {
//                 1: {
//                     lines: {
//                         1: "The room is dimly lit, the soft hum of medical machines providing a constant, eerie background. As your vision clears, you see a group of people standing by your bedside.",
//                         2: "A young woman, maybe in her mid-twenties, stands close to the couple. She's beautiful, with deep brown eyes that reflect a blend of joy and sorrow. She smiles tentatively at you, brushing a lock of hair behind her ear. There is something familiar about her, but your foggy mind struggles to place her.",
//                         3: "You made it, she says softly. We've all been waiting for this moment.",
//                     },
//                     choices: {
//                         1: "Ask what's going on",
//                         2: "Act up",
//                         3: "Nod and smile"
//                     }
//                 },
//                 2: {
//                     lines: {
//                         1: "You look between the faces around you, trying to make sense of who they are and why they are here. The elderly couple, the young woman, and this mysterious figure in the corner—what do they mean to you? How long have you been asleep? And more importantly, what happened before all of this?",
//                         2: "Mother: It's been a long time, you know...",
//                         3: "Father: We didn't know if you would ever wake up."
//                     },
//                     choices: {
//                         1: "Ask about your past",
//                         2: "Ask about the woman",
//                         3: "Smile and thank them to be there"
//                     }
//                 },
//                 3: {
//                     lines: {
//                         1: "The young woman aproach your bedside, a mix of emotions apear trough her eyes.",
//                         2: "It is gonna be okay " + "username" + ", you are back with us. You have a lot to catch up now.",
//                         4: "Do you remember anything? " + "username"
//                     },
//                     choices: {
//                         1: "Is there anything to remember?",
//                         2: "Look confused",
//                         3: "Nod and smile"
//                     }
//                 }
//             }
//         }
//     }
// }

// function doMusicStart() {
    
// }

// function doContentChange(chapter, scene, slide) {
//     const body = document.body;
//     const chapter_data = story_line[chapter];
//     const scene_data = chapter_data[scene];
//     const slide_data = scene_data.slides[slide];

//     const screen_elements = {
//         title_bar: document.getElementById('chapter-name'),
//         dialogue_text: document.getElementById('dialogue-text'),
//         choice_grid_container: document.getElementById('grid-container')
//     }

//     function addDialogues() {
//         let dialogue_number = 1;
//         function displayDialogue() {
//             if (dialogue_number <= Object.keys(slide_data.lines).length) {
//                 screen_elements.dialogue_text.textContent = slide_data.lines[dialogue_number];
//                 dialogue_number += 1;
//                 setTimeout(displayDialogue, 10000);
//             }
//         }
//         displayDialogue();
//     }

//     function createChoices() {
//         const choices = slide_data.choices;
//         if (screen_elements.choice_grid_container) {
//             while (screen_elements.choice_grid_container.firstChild) {
//                 screen_elements.choice_grid_container.removeChild(screen_elements.choice_grid_container.firstChild);
//             }
//         }
//         Object.keys(choices).forEach(key => {
//             const choice_element = document.createElement('div');
//             choice_element.className = 'grid-item';
//             const choice_element_button = document.createElement('button');
//             choice_element_button.id = 'choice-element';
//             choice_element_button.textContent = choices[key];
//             choice_element_button.addEventListener('click', () => {
//                 console.log(`Choice ${key} clicked`);
//             });
//             choice_element.appendChild(choice_element_button);
//             if (screen_elements.choice_grid_container) {
//                 screen_elements.choice_grid_container.appendChild(choice_element);
//             }
//         });
//     }


//     body.style.background = scene_data.style.background;
//     body.style.backgroundSize = 'cover';
//     body.style.backgroundPosition = 'center';
//     createChoices();
//     addDialogues();
// }

// doContentChange("Chapter 1", "Hospital", 1)