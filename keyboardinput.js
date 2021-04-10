let direction = { x: 0, y: 0 }
let lastDirection = { x: 0, y: 0 }
let skillActive = false

window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            if (lastDirection.y !== 0) break
            direction = { x: 0, y: -1 }
            break
        case 'ArrowDown':
            if (lastDirection.y !== 0) break
            direction = { x: 0, y: 1 }
            break
        case 'ArrowLeft':
            if (lastDirection.x !== 0) break
            direction = { x: -1, y: 0 }
            break
        case 'ArrowRight':
            if (lastDirection.x !== 0) break
            direction = { x: 1, y: 0 }
            break
        case 'Spacebar':
            skillActive = true
            break
        
    }
})

window.addEventListener('keyup', e => {
    switch (e.key) {
        case 'Spacebar':
            skillActive = false
            break
    }
})


export function getDirection() {
    lastDirection = direction
    return direction
}

export function specialSkill()
{
    return skillActive
}
    

document.addEventListener("keydown", KeyCheck);  //or however you are calling your method
function KeyCheck(event)
{
   var KeyID = event.keyCode;
   switch(KeyID)
   {
      case 8:
        location.reload()
      break; 
   }
}

