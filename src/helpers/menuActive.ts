type activeMenu= ''|'all'|'cat'|'dog'|'fish'

export const objectActive= (activedMenu:activeMenu) => {
    let objectReturn = {
        all:false,
        cat:false,
        dog:false,
        fish:false
    }

    if(activedMenu !=="") {
        objectReturn[activedMenu]=true
    }

    return objectReturn;
}