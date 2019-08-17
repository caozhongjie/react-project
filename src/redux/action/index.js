export const type = {
    SWITCH_MEUN: 'SWITCH_MEUN'
}

export function switchMenu(menuName) {
    console.log('menuName',menuName)
    return { // 这个返回的就是reducer中的action
        type:type.SWITCH_MEUN,
        menuName: menuName
    }
}